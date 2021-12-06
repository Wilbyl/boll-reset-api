import { Injectable } from '@nestjs/common';


@Injectable()
export class BallService {
  banco = [];

  createUser(data) {
    this.banco.push(data);
    return this.banco;
  }
}
