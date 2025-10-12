// const colors = ["red", "green", "blue", "magenta", "cyan"];
// const width = 400;
// const height = 400;

// const nodes = [];
// const offset = 10;
// let voronoi;

// function setup() {
//     createCanvas(width, height);

//     for (let i = 0; i < 4; i++) {
//         nodes.push(
//             [[floor(random(offset * 2, width - offset * 2))],
//             [floor(random(offset * 2, height - offset * 2))]]
//         )
//     }

//     voronoi = new Voronoi(height, width, nodes, colors)
//     voronoi.init();
// }

// function draw() {
//     frameRate(30)
//     voronoi.updatePoints();
//     voronoi.createVoronoi();
// }

// function mousePressed() {
//     voronoi.mousePressedHandler()
// }

// function mouseReleased() {
//     voronoi.mouseReleasedHandler()
// }

function voronoiSketch(p) {
    const colors = ["red", "green", "blue", "magenta", "cyan"];
    const width = 400;
    const height = 400;
    const nodes = [];
    const offset = 10;
    let voronoi;

    p.setup = () => {
        p.createCanvas(400, 400);
        p.background(0);

        for (let i = 0; i < 4; i++) {
            nodes.push(
                [[p.floor(p.random(offset * 2, width - offset * 2))],
                [p.floor(p.random(offset * 2, height - offset * 2))]]
            )
        }

        voronoi = new Voronoi(height, width, nodes, colors)
        voronoi.init();
    }

    p.draw = () => {

        frameRate(30)
        voronoi.updatePoints();
        voronoi.createVoronoi();
    }

    p.mousePressed = () => {
        voronoi.mousePressedHandler()
    }

    p.mouseReleased = () => {
        voronoi.mouseReleasedHandler()
    }
}

new p5(voronoiSketch, document.getElementById("voronoi"));