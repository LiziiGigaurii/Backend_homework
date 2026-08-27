import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './Schema/user.schema';
import { Model, isValidObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel:Model<User>){}

  async create(createUserDto: CreateUserDto) {
    const existingUser = await this.userModel.findOne({ username: createUserDto.username })
    if (existingUser) {
      throw new BadRequestException()
    }
    const newUser = await this.userModel.create(createUserDto)
    return newUser
  }

  async findAll() {
    return this.userModel.find().populate({ path: "posts", select: "-user" })
  }

  async findOne(id: string) {
    if (!isValidObjectId(id)) {
      throw new BadRequestException()
    }
    const findUserById = await this.userModel.findById(id)
    if (!findUserById) {
      throw new NotFoundException()
    }
    return findUserById
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    if (!isValidObjectId(id)) {
      throw new BadRequestException()
    }
    const updatedUser = await this.userModel.findByIdAndUpdate(id, updateUserDto, {new: true})
    if (!updatedUser) {
      throw new NotFoundException()
    }
    return updatedUser
  }

  async remove(id: string) {
    if (!isValidObjectId(id)) {
      throw new BadRequestException()
    }
    const deleteUser = await this.userModel.findByIdAndDelete(id)
    if (!deleteUser) {
      throw new NotFoundException()
    }
    return deleteUser
  }

  async addPost(userId, postId) {
    const updateUser = await this.userModel.findByIdAndUpdate(userId, {$push:{posts:postId}})
    return updateUser
  }

}
