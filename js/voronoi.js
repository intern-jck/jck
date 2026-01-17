const colors = ["red", "green", "blue", "magenta", "cyan"];
function mouseOver(x, y, w, h) {
    if (x < 0 || y < 0 || x > w || y > h) {
        return false;
    }

    if (x < w && y < h) {
        return true;
    }
}

/*
Voronoi Sketch
*/
function voronoiSketch(p) {

    let width = 0;
    let height = 0;
    let nodes = [];
    let offset = 10;
    let voronoi;

    p.setup = () => {
        let c = document.getElementById("voronoi");
        width = c.clientWidth;
        height = c.clientHeight;

        // let rect = c.getBoundingClientRect("voronoi");

        // console.log("rect:", rect.width, rect.height, rect.top, rect.left)

        const canvas = p.createCanvas(width, height);
        canvas.parent('voronoi');

        for (let i = 0; i < 4; i++) {
            nodes.push(
                [[p.floor(p.random(offset * 2, width - offset * 2))],
                [p.floor(p.random(offset * 2, height - offset * 2))]]
            )
        }

        voronoi = new Voronoi(p, width, height, nodes, colors);
        voronoi.create();
        p.frameRate(60);
    }

    p.draw = () => {
        p.background(255);
        voronoi.updatePoints();
        voronoi.updateVoronoi();
    }

    p.mousePressed = () => {
        voronoi.mousePressedHandler();
    }

    p.mouseReleased = () => {
        voronoi.mouseReleasedHandler();
    }


    // sliderUpdate = () => {
    //     let val = slider.value();
    //     let _nodes = [];

    //     for (let i = 0; i < val; i++) {
    //         _nodes.push(
    //             [[p.floor(p.random(offset * 2, width - offset * 2))],
    //             [p.floor(p.random(offset * 2, height - offset * 2))]]
    //         )
    //     }

    //     voronoi.nodes = _nodes;
    //     voronoi.generatePoints();
    //     voronoi.createVoronoi();
    // }
}

new p5(voronoiSketch, document.getElementById("voronoi"));
