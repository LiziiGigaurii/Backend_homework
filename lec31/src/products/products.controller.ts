import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import type { Request } from 'express';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { HasUserIdGuard } from './guards/hasUserID.guard';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @UseGuards(HasUserIdGuard)
  @Post()
  create(@Req() request: Request & { userId: string }, @Body() createProductDto: CreateProductDto) {
    const userId = request.userId;
    return this.productsService.create(userId, createProductDto);
  }

  @Get()
  findAll() {
    return this.productsService.findAll().populate({ path: 'user' });
  }

  // GET /products/user/:userId -> all products of one user (one-to-many demo)
  @Get('user/:userId')
  findByUser(@Param('userId') userId: string) {
    return this.productsService.findByUser(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
}
