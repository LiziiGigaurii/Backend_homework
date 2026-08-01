import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './createProd.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {}