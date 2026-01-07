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

    // draw orbit
    noFill();
    stroke(0);
    strokeWeight(2);
    arc(centerX, centerY, radius * 2, radius * 2, 0, 360);

    // draw blue circle
    let blueX = cos(frameCount * 0.25) * radius + centerX;
    let blueY = sin(frameCount * 0.25) * radius + centerY;
    fill(10, 10, 200);
    noStroke();
    ellipse(blueX, blueY, 50, 50);

    // draw red circle
    let redX = cos(frameCount * 0.25 + 180) * radius + centerX;
    let redY = sin(frameCount * 0.25 + 180) * radius + centerY;
    fill(200, 10, 10);
    noStroke();
    ellipse(redX, redY, 75, 75);

    // draw green circle
    let greenX = cos(frameCount * 2) * 75 + redX;
    let greenY = sin(frameCount * 2) * 75 + redY;
    fill(10, 200, 10);
    noStroke();
    ellipse(greenX, greenY, 25, 25);
}
