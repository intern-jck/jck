let WIDTH = 500;
let HEIGHT = 500;
let centerX = WIDTH / 2
let centerY = HEIGHT / 2

let r = 200;
let theta = 0;
let x, y = 0
let circleX;
let circleY;


let rect;
function setup() {
    const canvas = createCanvas(WIDTH, HEIGHT);
    canvas.parent('test-container')
    canvas.id('test-canvas')

    const container = document.getElementById('test-canvas');
    rect = container.getBoundingClientRect();
    console.log(rect.right, rect.left);

    angleMode(DEGREES)

    stroke(0)
    strokeWeight(8)
    point(centerX, centerY)

    for (let i = 180; i <= 360; i += 18) {
        x = cos(theta + i) * r + centerX
        y = sin(theta + i) * r + centerY
        point(x, y)
    }

}

function draw() {

    background(200);
    stroke(0);
    strokeWeight(8);
    point(centerX, centerY);

    for (let i = 180; i <= 360; i += 18) {
        x = cos(theta + i) * r + centerX;
        y = sin(theta + i) * r + centerY;
        point(x, y);
    }

    let mouseOver = false;

    if (mouseX > 0 && mouseX < WIDTH) {
        mouseOver = true;
    } else {
        mouseOver = false;
    }

    if (mouseOver) {
        let currentAngle = map(mouseX, 0, WIDTH, 180, 360);
        circleX = centerX + r * cos(currentAngle);
        circleY = centerY + r * sin(currentAngle);
    }

    fill(50, 100, 200);
    noStroke();
    ellipse(circleX, circleY, 20, 20);

    noFill();
    stroke(150);
    strokeWeight(2);
    arc(centerX, centerY, r * 2, r * 2, 180, 360);

}
