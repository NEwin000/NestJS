import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.servicer";

@Module(
    {
    controllers: [UsersController],
    providers: [UsersService],
    }
)
export class UserModule {}