import Canvas from './canvas'
import Fish from './fish'

let canvas, fish;

window.setup = function() {
  canvas = new Canvas(640, 480);
  fish = new Fish(canvas);
}

window.draw = function() {
  canvas.draw();
  fish.update();
  fish.draw();
}
