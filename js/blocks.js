const colors = ["red", "green", "blue", "magenta", "cyan"];
function mouseOver(x, y, w, h) {
    if (x < 0 || y < 0 || x > w || y > h) {
        return false;
    }

    if (x < w && y < h) {
        return true;
    }
}

/**
 * Blocks Sketch
 */
let shape1 = new Rectangle(25, 25, 25, 25);
let shape2 = new Rectangle(50, 50, 50, 50);

let width = 0;
let height = 0;

function setup() {
    let c = document.getElementById("blocks");
    width = c.clientWidth;
    height = c.clientHeight;

    const canvas = createCanvas(width, height, SVG);
    canvas.parent('blocks');
    frameRate(30);
}

function draw() {
    background(255);
    shape1.show();
    shape2.show();
    shape1.hover();
    shape2.hover();
    shape1.update();
    shape2.update();
}

function mousePressed() {
    // console.log("shapes mouse down")
    // console.log(mouseX, mouseY)
    shape1.pressed();
    shape2.pressed();
}

function mouseReleased() {
    // console.log("shapes mouse up")
    shape1.released();
    shape2.released();
}

