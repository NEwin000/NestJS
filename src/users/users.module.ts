import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.servicer';

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class Users{
    constructor(
    public id: string,
    public name: string,
    public password: string,
    public role: number)
    {}
}