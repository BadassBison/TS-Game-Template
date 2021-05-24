import { Ball } from './objects/ball';
import { Canvas } from './objects/canvas';

export class Game {

  canvas: Canvas;
  balls: Ball[] = [];
  ballLimit = 10;
  fps = 60;
  frameRate = 1000 / this.fps;

  constructor() {
    this.canvas = new Canvas();
    for (let i = 0; i < this.ballLimit; i++) {
      this.balls.push(Ball.randomBall());
    }

  }

  setupCanvas(): HTMLCanvasElement {
    return this.canvas.canvasElement;
  }

  // Entry for the game
  start() {
    console.log('Starting Game');
    this.run();
  }

  run() {
    setTimeout(() => {
      this.run();
    }, this.frameRate)
    this.update();
    this.draw();
  }

  // ------------------- Updating/Mutation methods --------------------------
  update() {
    this.balls.forEach((ball: Ball) => {
      this.changeSpeed(ball);
    });
  }

  changeSpeed(ball: Ball) {
    ball.posX += ball.speedX;
    ball.posY += ball.speedY;
    // ball.speedX > 0 ? ball.speedX += ball.acceleration : ball.speedX -= ball.acceleration;
    // ball.speedY > 0 ? ball.speedY += ball.acceleration : ball.speedY -= ball.acceleration;
    this.changeDirection(ball);
  }

  changeDirection(ball: Ball) {
    if (this.touchingTopOrBottom(ball)) {
      ball.speedY *= -1
    }
    if (this.touchingLeftOrRight(ball)) {
      ball.speedX *= -1
    }
  }

  touchingTopOrBottom(ball: Ball): boolean {
    return ball.posY - ball.radius <= 0 || ball.posY + ball.radius >= innerHeight;
  }

  touchingLeftOrRight(ball: Ball): boolean {
    return ball.posX - ball.radius <= 0 || ball.posX + ball.radius >= innerWidth;
  }

  // ------------------- Drawing/Animation methods --------------------------
  clearRect() {
    this.canvas.ctx.clearRect(0, 0, innerWidth, innerHeight);
  }

  draw(): void {
    this.clearRect();

    this.balls.forEach((ball: Ball) => {
      this.canvas.ctx.fillStyle = ball.color;
      this.canvas.ctx.beginPath();
      this.canvas.ctx.arc(ball.posX, ball.posY, ball.radius, 0, 2 * Math.PI, true)
      this.canvas.ctx.fill();
    });
  }

}