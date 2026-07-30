import { Body, Controller, DefaultValuePipe, Delete, Get, Headers, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  getAllProducts(
    @Query() query,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  ) {
    return this.productService.getAll(query, page, limit)
  }

  @Get("/:id")
  getProductsByID(@Param("id" , ParseIntPipe) id) {
    return this.productService.getById(id)
  }

  @Post()
  createProduct(@Body() body) {
    return this.productService.create(body)
  }

  @Delete("/:id")
  deleteProductById(@Param("id", ParseIntPipe) id, @Headers() headers) {
    return this.productService.delete(id, headers)
  }

  @Put("/:id")
  updateProductById( @Body() body,@Param("id", ParseIntPipe ) id) {
    return this.productService.update(id,body)
  }
}