import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query } from '@nestjs/common';
import { productService } from './product.service';
import { CreateProductDto } from './DTO/createProd.dto';
import { UpdateProductDto } from './DTO/updateProd.dto';
import { IProduct } from './DTO/product.dto';

@Controller('products')
export class productsController {
    constructor(private readonly productsService: productService) {}

    @Post()
    create(@Body() createProductDto: CreateProductDto) {
        return this.productsService.create(createProductDto)
    }

    @Get()
    findAll(@Query() query) {
        return this.productsService.getAll(query)
    }

    @Get(':id')
    getById(@Param('id') id: string) {
        return this.productsService.getById(Number(id))
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
        return this.productsService.update(+id, updateProductDto)
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.productsService.delete(Number(id))
  }
}
