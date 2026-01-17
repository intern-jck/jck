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

/**
 * Vortex Graph Sketch
 */
function vortexGraphSketch(p) {
    let width = 0;
    let height = 0;
    let vortex = null;

    p.setup = () => {

        let c = document.getElementById("voronoi");
        width = c.clientWidth;
        height = c.clientHeight;

        const canvas = p.createCanvas(width, height);
        canvas.parent('vortex');
        p.background(255);

        vortex = new Vortex(p, width, height);
        vortex.init();
        p.frameRate(30);

        // let modulusSlider = p.createSlider(2, 100);
        // modulusSlider.addClass("vortex-slider");
        // modulusSlider.input(modulusSliderUpdate);
        // modulusSlider.size(400);

        // let multiplierSlider = p.createSlider(2, 10);
        // multiplierSlider.addClass("vortex-slider");
        // multiplierSlider.input(multiplierSliderUpdate);
        // multiplierSlider.size(400);
    }

    p.draw = () => {
    }

    // modulusSliderUpdate = () => {
    //     let val = modulusSlider.value();
    //     console.log("vortex", val);
    //     vortex.modulus = val;

    //     vortex.createVortex()
    // }

    // multiplierSliderUpdate = () => {
    //     let val1 = multiplierSlider.value();
    //     console.log("vortex", val1);
    //     vortex.multiplier = val1;

    //     vortex.createVortex()
    // }
}

new p5(vortexGraphSketch, document.getElementById("vortex"));

/**
 * Blocks Sketch
 */
function blocksSketch(p) {
    let shape1 = new Rectangle(p, 25, 25, 25, 25);
    let shape2 = new Rectangle(p, 50, 50, 50, 50);

    let width = 0;
    let height = 0;

    p.setup = () => {
        let c = document.getElementById("blocks");
        width = c.clientWidth;
        height = c.clientHeight;

        const canvas = p.createCanvas(width, height);
        canvas.parent('shapes');
        p.frameRate(30);
    }

    p.draw = () => {
        p.background(255);
        shape1.show();
        shape2.show();
        shape1.hover();
        shape2.hover();
        shape1.update();
        shape2.update();
    }

    p.mousePressed = () => {
        // console.log("shapes mouse down")
        // console.log(p.mouseX, p.mouseY)
        shape1.pressed();
        shape2.pressed();
    }

    p.mouseReleased = () => {
        // console.log("shapes mouse up")
        shape1.released();
        shape2.released();
    }

}

new p5(blocksSketch, document.getElementById("blocks"));
