import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator"

export class CreateUserDto {
    @IsString()
    @Length(4,20)
    @IsNotEmpty()
    username!: string

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email!: string

    @IsString()
    @IsNotEmpty()
    @Length(8, 20)
    password!: string
}
