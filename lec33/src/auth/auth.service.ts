import { BadGatewayException, BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { PinoLogger } from 'nestjs-pino';
import { SignUpDto } from './DTO/sign-up.dto';
import * as bcrypt from "bcrypt"
import { SignInDto } from './DTO/sign-in.dto';

@Injectable()
export class AuthService {
    constructor (
        private userService: UsersService,
        private jwtService: JwtService,
        private readonly logger: PinoLogger
    ) {
        this.logger.setContext(AuthService.name)
    }

    async signUp(signUpDto: SignUpDto) {
        this.logger.info({ email: signUpDto.email }, "Sign-up request")
        const existingUser = await this.userService.findOneByEmail(signUpDto.email)
        
        if (existingUser) {
            this.logger.info({ email: signUpDto.email}, "User already exists")
        }

        const hashedPass = await bcrypt.hash(signUpDto.password, 10)
        await this.userService.create({...signUpDto, password:hashedPass})
        this.logger.info({ email: signUpDto.email }, "User created successfully!")
        return "User registered successfully!"
    }

    async signIn(signInDto: SignInDto) {
        this.logger.info({ email: signInDto.email }, "Sign-in request")
        const existingUser = await this.userService.findOneByEmail(signInDto.email)

        if (!existingUser) {
            this.logger.info({ email: signInDto.email }, "User not found")
            throw new BadGatewayException("create an account first")
        }
        
        const isEqualPass = await bcrypt.compare(signInDto.password, existingUser.password)
    
        if (!isEqualPass) {
            this.logger.info({ email: signInDto.email }, "Invalid password")
            throw new BadGatewayException("Invalid password")
        }

        const payLoad = {
            userId: existingUser._id
        }

        const accessToken = await this.jwtService.sign(payLoad, {expiresIn: "2hr"})
        this.logger.info({ email: signInDto.email, userId: existingUser._id}, "User signed-in successfully!")
        return accessToken
    }

    async currentUser(userId: string) {
        this.logger.info({ userId }, "Fetching current user")
        const user = this.userService.findOne(userId)
        return user
    }
}
