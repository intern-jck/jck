const colors = ["red", "green", "blue", "magenta", "cyan"];
const nodes = [];
const offset = 10;
const width = 400;
const height = 400;
let voronoi;
function setup() {
    createCanvas(width, height);

    for (let i = 0; i < 4; i++) {
        nodes.push(
            [[floor(random(offset * 2, width - offset * 2))],
            [floor(random(offset * 2, height - offset * 2))]]
        )
    }

    voronoi = new Voronoi(height, width, nodes, colors)
    voronoi.init();
}

function draw() {
    frameRate(30)
    voronoi.updatePoints();
    voronoi.createVoronoi();
}

function mousePressed() {
    voronoi.mousePressedHandler()
}

function mouseReleased() {
    voronoi.mouseReleasedHandler()
}
