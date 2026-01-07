// defaults
let WIDTH = 600;
let HEIGHT = 600;
let centerX = WIDTH / 2
let centerY = HEIGHT / 2
let radius = WIDTH / 2 - 100;
let theta = 0;
let x, y = 0
let circleX;
let circleY;

let rect;

function setup() {
    frameRate(60);

    const canvas = createCanvas(WIDTH, HEIGHT);
    canvas.parent('home-canvas')
    canvas.id('test-canvas')

    angleMode(DEGREES)
}

function draw() {
    background(240);

    // draw orbit
    stroke(0);
    strokeWeight(8);
    point(centerX, centerY);
    for (let i = 0; i <= 360; i += 18) {
        x = cos(theta + i) * radius + centerX;
        y = sin(theta + i) * radius + centerY;
        point(x, y);
    }

    // draw venus orbit
    let venusR = radius - 50;
    noFill();
    stroke(0);
    strokeWeight(2);
    arc(centerX, centerY, venusR * 2, venusR * 2, 0, 360);

    // draw venus circle
    let venusX = cos(frameCount * 0.25) * venusR + centerX;
    let venusY = sin(frameCount * 0.25) * venusR + centerY;
    fill(10, 10, 200);
    noStroke();
    ellipse(venusX, venusY, 30, 30);


    // draw earth orbit
    noFill();
    stroke(0);
    strokeWeight(2);
    arc(centerX, centerY, radius * 2, radius * 2, 0, 360);

    // draw earth
    let earthX = cos(frameCount * 0.25 + 180) * radius + centerX;
    let earthY = sin(frameCount * 0.25 + 180) * radius + centerY;
    fill(100, 180, 100);
    noStroke();
    ellipse(earthX, earthY, 75, 75);

    // draw moon
    let moonX = cos(frameCount * 2) * 75 + earthX;
    let moonY = sin(frameCount * 2) * 75 + earthY;
    fill(100, 100, 100);
    noStroke();
    ellipse(moonX, moonY, 25, 25);
}
