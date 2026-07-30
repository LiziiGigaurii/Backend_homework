import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { ProductDTO } from './DTO/product.dto';
import { headerDTO } from './DTO/headers.dto';

@Injectable()
export class ProductService {
  products = [
    { id: 1, name: 'milk', price: 5 },
    { id: 2, name: 'bread', price: 3 },
    { id: 3, name: 'butter', price: 7 },
    { id: 4, name: 'cheese', price: 12 },
    { id: 5, name: 'eggs', price: 4 }
  ];

  getAll(query: ProductDTO) {
    const { id, name, price } = query;
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
    return data;
  }

  getById(id: number) {
    const productsById = this.products.find(el => el.id === id)  
    if (!productsById) throw new BadRequestException() 
    return productsById
  }

  create(body:ProductDTO,headers:headerDTO) {
    if (!headers || headers.password !== "2007") throw new BadRequestException()

      const lastID = this.products[this.products.length - 1]?.id || 0
      const newProduct = {
        id: lastID + 1,
        name: body.name,
        price: body.price
      }
      
      this.products.push(newProduct)
      return newProduct
  }

  delete(id: number) {
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
      price: body.price ?? this.products[index].price
    }
    return this.products[index]
  }

}
