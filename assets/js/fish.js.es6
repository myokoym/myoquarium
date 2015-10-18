export default class Fish {
  constructor(canvas) {
    this.canvas = canvas;
    this.img = loadImage("img/mini-sakana.png");
    this.x = 200;
    this.y = 200;
    this.xSpeed = 1;
    this.ySpeed = 0.5;
  }

  update() {
    if (this.x <= 0 ||
        this.x >= this.canvas.width) {
      this.xSpeed *= -1;
    }
    if (this.y <= 0 ||
        this.y >= this.canvas.height) {
      this.ySpeed *= -1;
    }
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  draw() {
    image(this.img,
          this.x - this.img.width / 2,
          this.y - this.img.height / 2);
  }
}
