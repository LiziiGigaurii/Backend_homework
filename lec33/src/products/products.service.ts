import { BadRequestException, Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './schema/product.schema';
import { isValidObjectId, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PinoLogger } from 'nestjs-pino';
import { faker } from '@faker-js/faker'; 

const SEED_COUNT = 50_000
const SEED_BATCH_SIZE = 5_000

@Injectable()
export class ProductsService implements OnModuleInit {
  constructor (
    @InjectModel(Product.name) private productModel: Model<Product>,
    private readonly logger: PinoLogger
  ) {
    this.logger.setContext(ProductsService.name)
  }

  async onModuleInit() {
    const existing = await this.productModel.estimatedDocumentCount()
    if (existing >= SEED_COUNT) {
      this.logger.info({ count: existing}, "Product seed skipped")
      return 
    }

    const toInsert = SEED_COUNT - existing
    this.logger.info({ existing, toInsert }, 'Seeding products...')

    for (let inserted = 0; inserted < toInsert; inserted += SEED_BATCH_SIZE) {
      const batchSize = Math.min(SEED_BATCH_SIZE, toInsert - inserted)
      const batch = Array.from({ length: batchSize}, () => this.generateFakeProduct())
      await this.productModel.insertMany(batch, {ordered: false})
      this.logger.info({ inserted: existing + inserted})
    }
    this.logger.info({ count: SEED_COUNT }, 'Product seed completed')
  }


  private generateFakeProduct() {
    return {
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: Number(faker.commerce.price({ min: 1, max: 9999 })),
      category: faker.commerce.department()
    }
  }

  async create(createProductDto: CreateProductDto) {
    this.logger.info({ name: createProductDto.name }, 'Creating product')
    const product = await this.productModel.create(createProductDto)
    this.logger.info({ productId: product._id }, 'Product created')
    return product
  }

  async findAll(page = 1, limit = 15) {
    const safePage = Math.max(1, page)
    const safeLimit = Math.min(100, Math.max(1, limit))
    this.logger.info({ page: safePage, limit: safeLimit }, 'Fetching products')
    const [items, total] = await Promise.all([
      this.productModel.find().skip((safePage - 1) * safeLimit).limit(safeLimit),
      this.productModel.estimatedDocumentCount(),
    ])
    return { items, total, page: safePage, limit: safeLimit }
  }

  async findOne(id: string) {
    if (!isValidObjectId(id)) throw new BadRequestException('invalid id')
    const product = await this.productModel.findById(id)
    if (!product) throw new NotFoundException('product not found')
    this.logger.info({ productId: id }, 'Product found')
    return product
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    this.logger.info({ productId: id }, 'Updating product')
    if (!isValidObjectId(id)) throw new BadRequestException('invalid id')
    const product = await this.productModel.findByIdAndUpdate(id, updateProductDto, { new: true })
    if (!product) throw new NotFoundException('product not found')
    this.logger.info({ productId: id }, 'Product updated')
    return product
  }

  async remove(id: string) {
    this.logger.info({ productId: id }, 'Deleting product')
    if (!isValidObjectId(id)) throw new BadRequestException('invalid id')
    const product = await this.productModel.findByIdAndDelete(id)
    if (!product) throw new NotFoundException('product not found')
    this.logger.info({ productId: id }, 'Product deleted')
    return product
  }
  
}
