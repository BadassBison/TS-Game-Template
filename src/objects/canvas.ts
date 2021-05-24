export class Canvas {
  canvasElement: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor() {
    this.canvasElement = document.createElement('canvas');
    this.canvasElement.width = innerWidth;
    this.canvasElement.height = innerHeight;
    this.ctx = this.canvasElement.getContext("2d");
  }
}
