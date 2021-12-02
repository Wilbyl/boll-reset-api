import { Controller, Post } from '@nestjs/common';
import {ballService} from './ball.service';


@Controller('ball')
export class BallController {
    constructor(private service: ballService)


    @Post('creat')
    createBall(@Body()data){
        return this.service.createBall(data);
    }

    }
};
