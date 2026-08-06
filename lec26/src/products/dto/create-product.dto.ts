import { IsString, IsNotEmpty, MaxLength, Min, Max, IsOptional, IsNumber, IsInt } from 'class-validator'

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  title!: string

  @IsString()
  @IsOptional()
  description?: string

  @IsString()
  @IsNotEmpty()
  category!: string

  @IsNumber()
  @Min(1)
  @Max(99999)
  price!: number

  @IsInt()
  @Min(1)
  @Max(10000)
  stock!: number
}