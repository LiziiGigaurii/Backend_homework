import { BadGatewayException, BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
    products = [
    {
      id: 1,
      title: 'Wireless Keyboard',
      description: 'Slim Bluetooth keyboard for laptops',
      price: 89.9,
      stock: 12,
      category: 'electronics'
    },
    {
      id: 2,
      title: 'Ergonomic Desk Chair',
      description: 'Adjustable mesh chair with lumbar support',
      price: 189.99,
      stock: 8,
      category: 'furniture'
    },
    {
      id: 3,
      title: 'Stainless Steel Water Bottle',
      description: 'Insulated 1L bottle for hot and cold drinks',
      price: 24.9,
      stock: 35,
      category: 'fitness'
    }
  ]

  create(createProductDto: CreateProductDto) {
    const lastID = this.products[this.products.length - 1]?.id || 0

    let newProduct = {
      id: lastID + 1,
      title: createProductDto.title,
      description: createProductDto.description,
      price: createProductDto.price,
      stock: createProductDto.stock,
      category: createProductDto.category
    }

    this.products.push(newProduct)
    return newProduct
  }

  findAll() {
    return this.products
  }

  findOne(id: number) {
    let product = this.products.find(el => el.id === id)
    if (!product) {
      throw new NotFoundException()
    }
    return product
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    const index = this.products.findIndex(el => el.id === id)
    if (index === -1) {
      throw new BadGatewayException()
    }

    this.products[index] = {
      ...this.products[index],
      title: updateProductDto.title || this.products[index].title,
      description: updateProductDto.description || this.products[index].description,
      price: updateProductDto.price || this.products[index].price,
      stock: updateProductDto.stock || this.products[index].stock,
      category: updateProductDto.category || this.products[index].category
    }

    return this.products[index]
  }

  remove(id: number) {
    const index = this.products.findIndex(el => el.id === id)
    if (index === -1) {
      throw new BadGatewayException()
    }
    let deletedProduct = this.products.splice(index, 1)
    return deletedProduct
  }
}
