import { Controller, Body, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './DTO/sign-up.dto';
import { SignInDto } from './DTO/sign-in.dto';
import { AuthGuard } from './guards/auth.guard';
import type { Request } from 'express';

type AuthenticatedRequest = Request & { userId: string };

@Controller('auth')
export class AuthController {
    constructor (private readonly authService: AuthService) {}
    
    @Post("/sign-up")
    signUp(@Body() body: SignUpDto) {
        return this.authService.signUp(body)
    }

    @Post("/sign-in")
    signIn(@Body() body:SignInDto) {
        return this.authService.signIn(body)
    }

    @UseGuards(AuthGuard)
    @Get("/current-user")
    currentUser(@Req() request: AuthenticatedRequest) {
        const userId = request.userId
        return this.authService.currentUser(userId)
    }
}
