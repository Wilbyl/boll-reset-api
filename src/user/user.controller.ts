import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(service: UserService) {}

  @Post('creat')
  createUser(@Body() data) {
    return this.service.createUser(data);
  }
}
