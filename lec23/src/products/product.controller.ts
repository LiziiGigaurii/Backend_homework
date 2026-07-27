import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDTO } from './DTO/product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getAllProductInformation() {
    return this.productService.getAllProduct();
  }

  @Get(':id')
  getProductById(@Param() params) {
    const id = params.id
    return this.productService.getProductById(id);
  }

  @Post()
  createProduct(@Body() body: ProductDTO) {
    return this.productService.createProduct(body);
  }

  @Delete(':id')
  deleteProduct(@Param() params) {
    const id = params.id
    return this.productService.deleteProduct(id);
  }
}