export class Ball {

  radius: number;
  color: string;
  posX: number;
  posY: number;
  speedX: number;
  speedY: number;
  acceleration: number;
  mass: number;

  static randomBall() {
    const colors = ['blue', 'red', 'orange', 'purple', 'pink', 'black'];
    const ballSizeMin = 20;
    const ballSizeRange = 30;

    let radius = Math.ceil(Math.random() * ballSizeRange) + ballSizeMin;
    let color = colors[Math.floor(Math.random() * (colors.length))];
    let posX = Math.floor(Math.random() * (innerWidth - (2 * radius) + radius));
    let posY = Math.floor(Math.random() * (innerHeight - (2 * radius) + radius));

    return new Ball(radius, color, posX, posY);
  }

  constructor(radius: number, color: string, posX: number, posY: number) {
    this.radius = radius;
    this.color = color;
    this.posX = posX;
    this.posY = posY;
    this.speedX = 4;
    this.speedY = 4;
    this.acceleration = 0.02;
  }

  update() { }

  draw() { }
}