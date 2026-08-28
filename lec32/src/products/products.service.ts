import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schema/product.schema';
import { isValidObjectId, Model } from 'mongoose';
import { PinoLogger } from 'nestjs-pino';

@Injectable()

export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
    private readonly logger: PinoLogger,
  ) 
  {
    this.logger.setContext(ProductsService.name);
  }

  async create(createProductDto: CreateProductDto) {
    this.logger.info({ name: createProductDto.name }, 'Creating product');
    const product = await this.productModel.create(createProductDto);
    this.logger.info({ productId: product._id }, 'Product created');
    return product;
  }

  async findAll(page = 1, limit = 20) {
    const safePage = Math.max(1, page);
    const safeLimit = Math.min(100, Math.max(1, limit));
    this.logger.info({ page: safePage, limit: safeLimit }, 'Fetching products');
    const [items, total] = await Promise.all([
      this.productModel.find().skip((safePage - 1) * safeLimit).limit(safeLimit),
      this.productModel.estimatedDocumentCount(),
    ]);
    return { items, total, page: safePage, limit: safeLimit };
  }

  async findOne(id: string) {
    if (!isValidObjectId(id)) throw new BadRequestException('invalid mongo id');

    const product = await this.productModel.findById(id);

    if (!product) throw new NotFoundException('product not found');
    this.logger.info({ productId: id }, 'Product found');

    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    this.logger.info({ productId: id }, 'Updating product');

    if (!isValidObjectId(id)) throw new BadRequestException('invalid mongo (id)');

    const product = await this.productModel.findByIdAndUpdate(id, updateProductDto, { new: true });

    if (!product) throw new NotFoundException('product not found');

    this.logger.info({ productId: id }, 'Product updated');
    return product;
  }

  async remove(id: string) {
    this.logger.info({ productId: id }, 'Deleting product');

    if (!isValidObjectId(id)) throw new BadRequestException('invalid mongo (id)');

    const product = await this.productModel.findByIdAndDelete(id);
    
    if (!product) throw new NotFoundException('product not found');
    
    this.logger.info({ productId: id }, 'Product deleted');
    return product;
  }
}