import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './DTO/createProd.dto';
import { UpdateProductDto } from './DTO/updateProd.dto';
import { IProduct } from './DTO/product.dto';

@Injectable()
export class productService {
    products = [
        { id: 1, name: 'milk', price: 5},
        { id: 2, name: 'bread', price: 3},
        { id: 3, name: 'butter', price: 7}
    ]

    getAll(query?: IProduct) {
        const {id, name, price} = query || {}
        let data = this.products

        if (id) {
            data = data.filter((el) => el.id === Number(id))
        }
        if (name) {
            data = data.filter((el) => el.name === name)
        }
        if (price) {
            data = data.filter((el) => el.price === Number(price))
        }

        return data 
    }

    getById(id: number) {
        const productById = this.products.find((el) => el.id === id)
        if (!productById) throw new BadRequestException()
        return productById
    }

    create(CreateProductDto: CreateProductDto) {
        const lastID = this.products[this.products.length - 1]?.id || 0
        const newProduct = {
            id: lastID + 1,
            name: CreateProductDto.name,
            price: CreateProductDto.price
        }

        this.products.push(newProduct)
        return newProduct
    }

    update(id: number, UpdateProductDto: UpdateProductDto) {
        const index = this.products.findIndex((el) => el.id === id)
        if (index === -1) throw new BadRequestException()

        this.products[index] = {
            ...this.products[index],
            name: UpdateProductDto.name || this.products[index].name,
            price: UpdateProductDto.price || this.products[index].price
        }

        return this.products[index]
    }

    delete(id: number) {
        const index = this.products.findIndex((el) => el.id === id)
        if (index === -1) throw new BadRequestException()
        const deletedProduct = this.products.splice(index, 1)
        return deletedProduct
    }
}