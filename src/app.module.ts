import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { BallService } from './ball/ball.service';
import { BallController } from './ball/ball.controller';




@Module({
  imports: [UserModule],
  controllers: [BallController],
  providers: [BallService],
})
export class AppModule {}
