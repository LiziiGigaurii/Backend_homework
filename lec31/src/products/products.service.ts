import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model, Types } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './schema/product.schema';
import { UsersService } from '../users/users.service';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
    private usersService: UsersService,
  ) {}

  async create(userId: string, createProductDto: CreateProductDto) {
    const user = await this.usersService.findOne(userId);

    const newProduct = await this.productModel.create({ ...createProductDto, user: user._id });
    await this.usersService.addProduct(user._id, newProduct._id);

    return newProduct;
  }

  findAll() {
    return this.productModel.find();
  }

  // All products belonging to one user (demonstrates the one-to-many relation)
  findByUser(userId: string) {
    if (!isValidObjectId(userId)) throw new BadRequestException('Invalid id');
    return this.productModel.find({ user: new Types.ObjectId(userId) });
  }

  async findOne(id: string) {
    if (!isValidObjectId(id)) throw new BadRequestException('Invalid id');

    const product = await this.productModel.findById(id);
    if (!product) throw new BadRequestException('Product not found');

    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    if (!isValidObjectId(id)) throw new BadRequestException('Invalid id');

    const updatedProduct = await this.productModel.findByIdAndUpdate(id, updateProductDto, {
      new: true,
    });
    if (!updatedProduct) throw new BadRequestException('Product not found');

    return updatedProduct;
  }

  async remove(id: string) {
    if (!isValidObjectId(id)) throw new BadRequestException('Invalid id');

    const deletedProduct = await this.productModel.findByIdAndDelete(id);
    if (!deletedProduct) throw new BadRequestException('Product not found');

    return deletedProduct;
  }
}
