import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SingUpDto } from './DTO/sign-up.dto';
import { SignInDto } from './DTO/sign-in.dto';
import { AuthGuard } from './guards/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/sign-up")
  singUp(@Body() body:SingUpDto){
    
    return this.authService.signUp(body)
  }

  @Post("/sign-in")
  signIn(@Body() body:SignInDto){
    return this.authService.signIn(body)
  }

  @UseGuards(AuthGuard)
  @Get("/current-user")
  currentUser(@Req() request: any){
    const userId = request.userId
    return this.authService.currnetUser(userId)
  }
}