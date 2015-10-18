export default class Canvas {
  constructor(width, height) {
    createCanvas(width, height);
    this.width = width;
    this.height = height;
    this.bgcolor = color(0, 180, 240);
  }

  draw() {
    background(this.bgcolor);
  }
}
