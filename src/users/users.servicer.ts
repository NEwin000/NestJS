import { Injectable, NotFoundException } from '@nestjs/common';
import {Users} from './users.module';

@Injectable()
export class UsersService {
        private users: Users[] = [];

    insertUsers(name: string, passwaord:string, role: number){
        const userId = Math.random().toString();
        const newUsers = new Users(userId, name, passwaord, role);
        this.users.push(newUsers)
        return userId;
    }

    getUsers(){
        return [...this.users];
    }

    getSingleUsers(usersId: string){
        const users = this.findUsers(usersId)[0];
        return {...users};
    }

    updateUsers(usersId: string, name: string, passwaord: string, role: number){
        const [users, index]= this.findUsers(usersId);
        const updateUsers = {...users};
        if(name){
            updateUsers.name = name;
        }
        if(passwaord){
            updateUsers.password = passwaord;
        }
        if(role){
            updateUsers.role = role;
        }
        this.users[index] = updateUsers;
    } 
    deleteUsers(userId: string){
            const index =this.findUsers(userId)[1];
            this.users.splice(index, 1);
    }
        private findUsers(id: string):[Users, number]{
            const usersIndex = this.users.findIndex((user) => user.id == id);
            const users = this.users[usersIndex];
        if (!users){
            throw new NotFoundException('Could not find users.');
          }
          return [users, usersIndex];
        }
}
