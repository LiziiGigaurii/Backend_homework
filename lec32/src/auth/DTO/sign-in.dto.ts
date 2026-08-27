import {IsEmail, IsNotEmpty, IsString, Length} from "class-validator"

export class SignInDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email!:string


  @IsNotEmpty()
  @IsString()
  @Length(8,25)
  password!:string
}