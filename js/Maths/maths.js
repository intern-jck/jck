const colors = ["red", "green", "blue", "magenta", "cyan"];
const nodes = [];
const offset = 10;
const width = 400;
const height = 400;

function setup() {
    createCanvas(height, width);

    for (let i = 0; i < 4; i++) {
        nodes.push(
            [[floor(random(offset * 2, width - offset * 2))],
            [floor(random(offset * 2, height - offset * 2))]]
        )
    }

    const voronoi = new Voronoi(height, width, nodes, colors)
    voronoi.createVornoi();
}

function draw() {
    frameRate(30)
}
