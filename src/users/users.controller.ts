import { Controller, Get, Post, Body, Param, Patch, Delete} from '@nestjs/common';
import { UsersService } from './users.servicer';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}
    
    @Post()
    addUser(
        @Body('name') userName: string, 
        @Body('passwaord') userPasswaord: string,
        @Body('role') userRole: number,
        ) {
      const generateId = this.usersService.insertUsers(
        userName, 
        userPasswaord, 
        userRole,
        );
          return {id: generateId};  
    }

    @Get()
    getAllUsers(){
        return this.usersService.getUsers();
    }

    @Get(':id')
    getUsers(@Param('id') userId: string,){
        return this.usersService.getSingleUsers(userId);
    }

    @Patch(':id')
    updateUsers(
        @Param('id') userId: string,
        @Body('name') userName: string,
        @Body('passwaord') userPasswaord: string,
        @Body('role') userRole: number,
    ){
        this.usersService.updateUsers(userId, userName, userPasswaord, userRole)
        return null;
    }

    @Delete(':id')
    removeUsers(@Param('id') userId: string,){
        this.usersService.deleteUsers(userId);
        return null;
    }
}
