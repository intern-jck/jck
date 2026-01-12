let width = 0;
let height = 0;
let centerX = 0;
let centerY = 0;
let radius = 0;
let theta = 0;

// let x, y = 0
// let circleX;
// let circleY;
// let rect;

const CANVAS_ID = "home-canvas";



function setup() {

    // Get container div dimensions
    let c = document.getElementById(CANVAS_ID);
    let cWidth = c.clientWidth;
    let cHeight = c.clientHeight;
    // let cWidth = c.offsetWidth;
    // let cHeight = c.offsetHeight;

    console.log("c div: ", c, cWidth, cHeight);

    width = cWidth;
    height = cHeight;
    centerX = cWidth / 2;
    centerY = cHeight / 2;

    const canvas = createCanvas(width, height);
    canvas.parent('home-canvas');

    frameRate(60);
    angleMode(DEGREES);
}

function draw() {
    background(240);

    // Draw Sun
    fill(255, 165, 0);
    ellipse(centerX, centerY, 50, 50);

    // Draw Mercury orbit
    let mercuryR = 75;
    noFill();
    stroke(0);
    strokeWeight(2);
    arc(centerX, centerY, mercuryR * 2, mercuryR * 2, 0, 360);

    // Draw Mercury planet
    let mercuryX = cos(frameCount * 0.25) * mercuryR + centerX;
    let mercuryY = sin(frameCount * 0.25) * mercuryR + centerY;
    fill(200, 10, 10);
    noStroke();
    ellipse(mercuryX, mercuryY, 25, 25);

    // Draw Venus orbit
    let venusR = 125;
    noFill();
    stroke(0);
    strokeWeight(2);
    arc(centerX, centerY, venusR * 2, venusR * 2, 0, 360);

    // Draw Venus planet
    let venusX = cos(frameCount * 0.25) * venusR + centerX;
    let venusY = sin(frameCount * 0.25) * venusR + centerY;
    fill(10, 200, 10);
    noStroke();
    ellipse(venusX, venusY, 30, 30);

    // Draw Earth orbit
    let earthR = 175;
    noFill();
    stroke(0);
    strokeWeight(2);
    arc(centerX, centerY, earthR * 2, earthR * 2, 0, 360);

    // Draw Earth planet
    let earthX = cos(frameCount * 0.25) * earthR + centerX;
    let earthY = sin(frameCount * 0.25) * earthR + centerY;
    fill(10, 10, 200);
    noStroke();
    ellipse(earthX, earthY, 30, 30);

    // Draw Moon orbit
    let moonR = 40;
    noFill();
    stroke(0);
    strokeWeight(2);
    arc(earthX, earthY, moonR * 2, moonR * 2, 0, 360);

    // Draw Moon planet
    let moonX = cos(frameCount * 2) * moonR + earthX;
    let moonY = sin(frameCount * 2) * moonR + earthY;
    fill(100, 100, 100);
    noStroke();
    ellipse(moonX, moonY, 15, 15);
}
