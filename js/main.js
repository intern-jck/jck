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
    frameRate(60);

    const container = document.getElementById('home-canvas');
    rect = container.getBoundingClientRect();
    console.log(rect.right, rect.left);

    const canvas = createCanvas(WIDTH, HEIGHT);
    canvas.parent('home-canvas')
    canvas.id('test-canvas')


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

    for (let i = 0; i <= 360; i += 18) {
        x = cos(theta + i) * r + centerX;
        y = sin(theta + i) * r + centerY;
        point(x, y);
    }

    noFill();
    stroke(150);
    strokeWeight(2);
    arc(centerX, centerY, r * 2, r * 2, 0, 360);

    circleX = cos(frameCount * 0.25) * r + centerX;
    circleY = sin(frameCount * 0.25) * r + centerY;

    // Draw the circle
    fill(10, 10, 200); // Set circle color
    noStroke();
    ellipse(circleX, circleY, 50, 50);

    let circleX2 = cos(frameCount * 0.25 + 180) * r + centerX;
    let circleY2 = sin(frameCount * 0.25 + 180) * r + centerY;

    // Draw the circle
    fill(200, 10, 10); // Set circle color
    noStroke();
    ellipse(circleX2, circleY2, 75, 75);

    fill(255, 100, 100); // Set circle color
    noStroke();
    ellipse(circleX2, circleY2, 65, 65);

    // let yOffset = sin(frameCount * 1) * 100; // Adjust 0.05 for speed
    // circleY = height / 2 + yOffset;

    // // Display frame rate (optional)
    // fill(0);
    // text("FPS: " + frameRate(), 10, 20);

    // let mouseOver = false;

    // if (mouseX > 0 && mouseX < WIDTH) {
    //     mouseOver = true;
    // } else {
    //     mouseOver = false;
    // }

    // if (mouseOver) {
    //     let currentAngle = map(mouseX, 0, WIDTH, 180, 360);
    //     circleX = centerX + r * cos(currentAngle);
    //     circleY = centerY + r * sin(currentAngle);
    // }

    // for (let i = 180; i <= 360; i += 18) {
    //     circleX = cos(theta + i) * r + centerX;
    //     circleY = sin(theta + i) * r + centerY;
    //     // point(x, y);
    // }

    // fill(50, 100, 200);
    // noStroke();
    // ellipse(circleX, circleY, 20, 20);

}




// // Canvas 1
// function canvas_1(p) {
//     p.setup = function () {
//         let container = document.getElementById("canvas-1");

//         let canvasWidth = container.offsetWidth;
//         let canvasHeight = container.offsetHeight;

//         let canvas = p.createCanvas(canvasWidth, canvasHeight);
//         canvas.parent('canvas-1');
//     };

//     p.draw = function () {
//         p.background(255);
//         p.stroke(255);

//         p.fill(200, 0, 0);
//         p.circle(p.mouseX, p.mouseY, 30);

//         p.fill(255, 0, 0);
//         p.circle(p.mouseX, p.mouseY, 20);

//         p.redct()
//     };
// }

// new p5(canvas_1, document.getElementById('canvas-1'));

// // Canvas 2
// function canvas_2(p) {
//     p.setup = function () {
//         let container = document.getElementById("canvas-2");

//         let canvasWidth = container.offsetWidth;
//         let canvasHeight = container.offsetHeight;

//         let canvas = p.createCanvas(canvasWidth, canvasHeight);
//         canvas.parent('canvas-2');
//     };

//     p.draw = () => {
//         p.background(255)
//         p.stroke(255);

//         p.fill(0, 200, 0);
//         p.circle(p.mouseX, p.mouseY, 50);

//         p.fill(0, 255, 0);
//         p.circle(p.mouseX, p.mouseY, 40);
//     };
// }

// new p5(canvas_2, document.getElementById('canvas-2'));

// // Canvas 3
// function canvas_3(p) {
//     p.setup = function () {
//         let container = document.getElementById("canvas-3");

//         let canvasWidth = container.offsetWidth;
//         let canvasHeight = container.offsetHeight;

//         let canvas = p.createCanvas(canvasWidth, canvasHeight);
//         canvas.parent('canvas-3');
//     };

//     p.draw = () => {
//         p.background(255)
//         p.stroke(255);

//         p.fill(0, 0, 200);
//         p.circle(p.mouseX, p.mouseY, 100);

//         p.fill(0, 0, 255);
//         p.circle(p.mouseX, p.mouseY, 90);
//     };
// }

// new p5(canvas_3, document.getElementById('canvas-3'));

// // Canvas 4
// function canvas_4(p) {
//     p.setup = function () {
//         let container = document.getElementById("canvas-4");

//         let canvasWidth = container.offsetWidth;
//         let canvasHeight = container.offsetHeight;

//         let canvas = p.createCanvas(canvasWidth, canvasHeight);
//         canvas.parent('canvas-4');
//     };

//     p.draw = () => {
//         p.background(255)
//         p.stroke(255);

//         p.fill(0, 200, 200);
//         p.circle(p.mouseX, p.mouseY, 80);

//         p.fill(0, 255, 255);
//         p.circle(p.mouseX, p.mouseY, 70);
//     };
// }

// new p5(canvas_4, document.getElementById('canvas-4'));