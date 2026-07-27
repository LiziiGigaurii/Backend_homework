import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { ProductDTO } from './DTO/product.dto';

@Injectable()
export class ProductService {
  private products = [
    {
      id: 1,
      name: 'butter',
      category: 'food',
      price: 7,
    },
    {
      id: 2,
      name: 'milk',
      category: 'food',
      price: 5,
    },
    {
      id: 3,
      name: 'snickers',
      category: 'snack',
      price: 3,
    },
  ];

  getAllProduct() {
    return this.products;
  }

  getProductById(id: number) {
    const product = this.products.find((el) => el.id === Number(id));
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  createProduct(body: ProductDTO) {
    if (body.price < 0) {
      throw new BadRequestException('Price cant be negative');
    }
    const lastId = this.products[this.products.length - 1]?.id || 0;
    const newObj = {
      id: lastId + 1,
      name: body.name,
      category: body.category,
      price: body.price,
    };

    this.products.push(newObj);
    return newObj;
  }

  deleteProduct(id: number) {
    const index = this.products.findIndex((el) => el.id === Number(id));

    if (index === -1) {
      throw new NotFoundException('Product not found');
    }

    const [deletedProduct] = this.products.splice(index, 1);
    return deletedProduct;
  }
}
