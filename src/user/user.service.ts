import { Injectable } from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto.ts'



@Injectable()
export class UserService {
  banco: CreateUserDto[] = [];

  createUser(data: CreateUserDto): CreateUserDto[] {
    this.banco.push(data);
    return this.banco;
  }

  getUsers(): CreateUserDto[] {
    return this.banco;
  }
}