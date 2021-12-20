import { Controller, Post ,Body } from '@nestjs/common';
import {BallService} from '../ball/ball.service';


@Controller('ball')
export class BallController {
    constructor(private service: BallService) {}


  @Post('create')
  createBall(@Body() data) {
    return this.service.createBall(data);

    }
}

