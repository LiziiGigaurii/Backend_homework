import { BadRequestException, Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { isValidObjectId, Model } from 'mongoose';
import { PinoLogger } from 'nestjs-pino';
import { faker } from '@faker-js/faker';
import * as bcrypt from 'bcrypt';

const SEED_COUNT = 40;

@Injectable()
export class UsersService implements OnModuleInit {
  constructor(
    @InjectModel(User.name) private userModel:Model<User>,
    private readonly logger: PinoLogger,
  )
  {
    this.logger.setContext(UsersService.name)
  }

  async onModuleInit() {
    const existing = await this.userModel.estimatedDocumentCount()

    if (existing >= SEED_COUNT) {
      this.logger.info({ count: existing }, 'User seed skipped')
      return
    }

    const toInsert = SEED_COUNT - existing
    this.logger.info({ existing, toInsert }, 'Seeding users')

    const hashedPass = await bcrypt.hash('pass2007', 10)
    const fakeUsers = Array.from({ length: toInsert }, () => this.generateFakeUser(hashedPass))
    await this.userModel.insertMany(fakeUsers, { ordered: false })

    this.logger.info({ count: SEED_COUNT }, 'seed completed')
  }

  private generateFakeUser(hashedPass: string) {
    return {
      fullName: faker.person.fullName(),
      email: faker.internet.email(),
      password: hashedPass,
    }
  }

  async create(createUserDto: CreateUserDto) {
    this.logger.info({ email: createUserDto.email }, 'Creating user')
    const exsisitingUser = await this.userModel.findOne({email:createUserDto.email})

    if(exsisitingUser) {
      this.logger.info({ email: createUserDto.email }, 'email already exists')
      throw new BadRequestException()
    }

    const createUser  = await this.userModel.create(createUserDto)
    this.logger.info({ email: createUserDto.email, userId: createUser._id }, 'User created')
    return createUser
  }

  findAll() {
    this.logger.info('Fetching all users')
    return this.userModel.find()
  }

  async  findOne(id: string) {
    if(!isValidObjectId(id)) throw new BadRequestException("invalid id")

    const findUser = await this.userModel.findById(id)

    if(!findUser) throw new NotFoundException("user not found")

    this.logger.info({ userId: id }, 'User found')
    return findUser
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    this.logger.info({ userId: id }, 'Updating user')

    if(!isValidObjectId(id)) throw new BadRequestException("invalid id")
    
    const updateUser = await this.userModel.findByIdAndUpdate(id, updateUserDto, {new:true})

    if(!updateUser) throw new NotFoundException()

    this.logger.info({ userId: id }, 'User updated')
    return updateUser
  }

  async findOneByEmail(email: string) {
    this.logger.info({ email }, 'Looking up user by email')
    const user = this.userModel.findOne({ email:email }).select("+password")
    return user
  }

  async remove(id: string) {
    this.logger.info({ userId: id }, 'Deleting user')

    if(!isValidObjectId(id)) throw new BadRequestException("invalid id")

    const deleteUser = await this.userModel.findByIdAndDelete(id)

    if(!deleteUser) throw new NotFoundException("user not found")

    this.logger.info({ userId: id }, 'User deleted')
    return deleteUser
  }
}
