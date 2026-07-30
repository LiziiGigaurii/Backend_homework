import { Body, Controller, Delete, Get, Headers, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  getAllProducts(@Query() query) {
    return this.productService.getAll(query)
  }

  @Get("/:id")
  getProductsByID(@Param("id" , ParseIntPipe) id) {
    return this.productService.getById(id)
  }

  @Post()
  createProduct(@Body() body,@Headers() headers) {
    return this.productService.create(body,headers)
  }

  @Delete("/:id")
  deleteProductById(@Param("id", ParseIntPipe) id) {
    return this.productService.delete(id)
  }

  @Put("/:id")
  updateProductById( @Body() body,@Param("id", ParseIntPipe ) id) {
    return this.productService.update(id,body)
  }
}
