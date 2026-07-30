import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { ProductDTO } from './DTO/product.dto';
import { headerDTO } from './DTO/headers.dto';

@Injectable()
export class ProductService {
  products = [
    { id: 1, name: 'milk', price: 5, description: 'fresh milk' },
    { id: 2, name: 'bread', price: 3, description: 'white bread' },
    { id: 3, name: 'butter', price: 7, description: 'salted butter' },
    { id: 4, name: 'cheese', price: 12, description: 'aged cheese' },
    { id: 5, name: 'eggs', price: 4, description: 'a dozen eggs' }
  ];

  getAll(query: ProductDTO, page: number, limit: number) {
    const { id, name, price, description } = query;
    let data = this.products;

    if (id) {
      data = data.filter((el) => el.id === Number(id));
    }
    if (name) {
      data = data.filter((el) => el.name === name);
    }
    if (price) {
      data = data.filter((el) => el.price === Number(price));
    }
    if (description) {
      data = data.filter((el) => el.description === description);
    }

    const total = data.length;
    const lastPage = Math.max(Math.ceil(total / limit), 1);
    const start = (page - 1) * limit;
    const paginated = data.slice(start, start + limit);

    return {
      data: paginated,
      meta: {
        total,
        page,
        limit,
        lastPage
      }
    };
  }

  getById(id: number) {
    const productsById = this.products.find(el => el.id === id)  
    if (!productsById) throw new BadRequestException() 
    return productsById
  }

  create(body: ProductDTO) {
    const lastID = this.products[this.products.length - 1]?.id || 0
    const newProduct = {
      id: lastID + 1,
      name: body.name,
      price: body.price,
      description: body.description
    }

    this.products.push(newProduct)
    return newProduct
  }

  delete(id: number, headers: headerDTO) {
    if (!headers || headers.password !== "2007") throw new BadRequestException()

    const index = this.products.findIndex(el => el.id === id)
    if (index === -1) throw new NotFoundException()
    let deletedProduct = this.products.splice(index, 1)
    return deletedProduct
  }

  update(id: number, body: ProductDTO) {
    const index = this.products.findIndex(el => el.id === id)
    if (index === -1) throw new NotFoundException()

    this.products[index] = {
      ...this.products[index],
      name: body.name ?? this.products[index].name,
      price: body.price ?? this.products[index].price,
      description: body.description ?? this.products[index].description
    }
    return this.products[index]
  }

}