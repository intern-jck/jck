/*
Voronoi Diagrams
*/

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

        voronoi = new Voronoi(p, height, width, nodes, colors)
        voronoi.init();
    }

    p.draw = () => {
        p.frameRate(30)
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

/*
Vortex Graph
*/

