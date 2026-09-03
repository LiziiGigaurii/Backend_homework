import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    @Length(4,30)
    fullName!:string

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email!: string

    @IsNotEmpty()
    @IsString()
    @Length(8,20)
    password!: string
}
