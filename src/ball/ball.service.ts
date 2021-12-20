import { Injectable } from '@nestjs/common';


@Injectable()
export class BallService {
  banco = [];

  createBall(data) {
    this.banco.push(data);
    return this.banco;
  }
}
