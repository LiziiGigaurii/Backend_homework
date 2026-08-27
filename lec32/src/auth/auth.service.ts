import { BadGatewayException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { SingUpDto } from './DTO/sign-up.dto';
import * as bcrypt from "bcrypt"
import { SignInDto } from './DTO/sign-in.dto';
import {JwtService} from "@nestjs/jwt"
import { PinoLogger } from 'nestjs-pino';

@Injectable()
export class AuthService {
    constructor(
        private userService:UsersService,
        private jwtService:JwtService,
        private readonly logger: PinoLogger,
    ){
        this.logger.setContext(AuthService.name);
    }

    async signUp(signUpDto:SingUpDto){
        this.logger.info({ email: signUpDto.email }, 'Sign-up request received');
        const exsisitingUser = await this.userService.findOneByEmail(signUpDto.email)
        if (exsisitingUser) {
            this.logger.info({ email: signUpDto.email }, 'Sign-up skipped: user already exists');
        }
        const hashedPass =  await bcrypt.hash(signUpDto.password,10)
        await this.userService.create({
            fullName: signUpDto.username,
            email: signUpDto.email,
            password: hashedPass,
        })
        this.logger.info({ email: signUpDto.email }, 'User registered successfully');
        return "user created successfully"
    }

    async signIn(signInDto:SignInDto){
        this.logger.info({ email: signInDto.email }, 'Sign-in request received');
        const exsisitingUser = await this.userService.findOneByEmail(signInDto.email)
        if(!exsisitingUser) {
            this.logger.info({ email: signInDto.email }, 'Sign-in failed: user not found');
            throw new BadGatewayException("wadi sheqmeni aqaunti")
        }
        const isEqualPass = await bcrypt.compare(signInDto.password,exsisitingUser.password)
        if(!isEqualPass) {
            this.logger.info({ email: signInDto.email }, 'Sign-in failed: invalid credentials');
            throw new BadGatewayException("invalid credentials")
        }
        const payLoad = {
            userId:exsisitingUser._id
        }
        const accessToken = await this.jwtService.sign(payLoad,{expiresIn:"1hr"})
        this.logger.info({ email: signInDto.email, userId: exsisitingUser._id }, 'User signed in successfully');
        return accessToken
    }

    async currnetUser(userId: string){
        this.logger.info({ userId }, 'Fetching current user');
        const user = this.userService.findOne(userId)
        return user
    }
}