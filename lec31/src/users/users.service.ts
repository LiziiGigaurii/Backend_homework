import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model, Types } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schema/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    const existingUser = await this.userModel.findOne({ email: createUserDto.email });
    if (existingUser) throw new BadRequestException('User with this email already exists');

    const createdUser = await this.userModel.create(createUserDto);
    return createdUser;
  }

  findAll() {
    return this.userModel.find();
  }

  async findOne(id: string) {
    if (!isValidObjectId(id)) throw new BadRequestException('Invalid id');

    const user = await this.userModel.findById(id);
    if (!user) throw new BadRequestException('User not found');

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    if (!isValidObjectId(id)) throw new BadRequestException('Invalid id');

    const updatedUser = await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });
    if (!updatedUser) throw new BadRequestException('User not found');

    return updatedUser;
  }

  async remove(id: string) {
    if (!isValidObjectId(id)) throw new BadRequestException('Invalid id');

    const deletedUser = await this.userModel.findByIdAndDelete(id);
    if (!deletedUser) throw new BadRequestException('User not found');

    return deletedUser;
  }

  // Called from ProductsService whenever a new product is created for this user,
  // so the User document keeps a list of its own product IDs (one-to-many).
  async addProduct(userId: Types.ObjectId, productId: Types.ObjectId) {
    const updatedUser = await this.userModel.findByIdAndUpdate(userId, {
      $push: { products: productId },
    });
    return updatedUser;
  }
}
