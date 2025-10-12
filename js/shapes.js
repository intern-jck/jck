let red, green, blue;
let shape1, shape2;

function setup() {
  createCanvas(400, 400);
  red = color(200, 0, 0)
  green = color(0, 200, 0)
  blue = color(0, 0, 200)

  shape1 = new Rectangle(25, 25, 25, 25)
  shape2 = new Rectangle(50, 50, 50, 50)
}

function draw() {
  background(255, 255, 255);
  shape1.show();
  shape2.show();
  shape1.hover();
  shape2.hover();
  shape1.update();
  shape2.update();
}

function mousePressed() {
  shape1.pressed();
  shape2.pressed();
}

function mouseReleased() {
  shape1.released();
  shape2.released();
}
