let p;
let vel;
let mouseVector;

function setup() {
    createCanvas(400, 400);
    background(255, 255, 255);
    p = new Point(25, 25, 10);
    vel = createVector(0, 9.8)
}

function draw() {
    background(255, 255, 255);
    p.drag(mouseX, mouseY)
    p.show();
}

function mousePressed() {
    if (dist(mouseX, mouseY, p.position.x, p.position.y) < 25) {
        p.dragging = true;
    }
}

function mouseReleased() {
    p.dragging = false
}