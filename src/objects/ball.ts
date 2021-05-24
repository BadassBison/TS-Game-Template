import { IBall } from '../interfaces/ball-interface';

export class Ball {

  radius: number;
  color: string;
  posX: number;
  posY: number;
  speedX: number;
  speedY: number;
  acceleration: number;
  mass: number;

  constructor(_Ball: IBall) { }

  update() { }

  draw() { }
}