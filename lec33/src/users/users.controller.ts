import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '../auth/guards/auth.guard';
import type { Request } from 'express';

type AuthenticatedRequest = Request & { userId: string };

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Patch()
  update(@Req() request: AuthenticatedRequest, @Body() updateUserDto: UpdateUserDto) {
    const userId = request.userId
    return this.usersService.update(userId, updateUserDto);
  }

  @UseGuards(AuthGuard)
  @Delete()
  remove(@Req() request: AuthenticatedRequest) {
    const userId = request.userId
    return this.usersService.remove(userId);
  }
}
