import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto'


@Controller('user')
export class UserController {
  constructor(service: UserService) {}

  @Post('creat')
  createUser(@Body() data) {
    return this.service.createUser(data);
  }
}
