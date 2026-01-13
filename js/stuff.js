const colors = ["red", "green", "blue", "magenta", "cyan"];

/*
Voronoi Sketch
*/
function voronoiSketch(p) {
    // const colors = ["red", "green", "blue", "magenta", "cyan"];


    let width = 0;
    let height = 0;
    let nodes = [];
    let offset = 10;
    let voronoi;
    let slider;
    // let canvas;

    p.setup = () => {

        let c = document.getElementById("voronoi");
        let cWidth = c.clientWidth;
        let cHeight = c.clientHeight;

        // console.log("c div: ", c, cWidth, cHeight);

        width = cWidth;
        height = cHeight;
        // centerX = cWidth / 2;
        // centerY = cHeight / 2;

        const canvas = p.createCanvas(width, height);
        canvas.parent('voronoi');

        p.frameRate(60);
        // canvas = p.createCanvas(400, 400);
        // p.background(255);

        for (let i = 0; i < 4; i++) {
            nodes.push(
                [[p.floor(p.random(offset * 2, width - offset * 2))],
                [p.floor(p.random(offset * 2, height - offset * 2))]]
            )
        }

        voronoi = new Voronoi(p, height, width, nodes, colors);
        voronoi.init();
        // slider = p.createSlider(2, 100);
        // slider.addClass("voronoi-count");
        // slider.input(sliderUpdate);
        // slider.size(width);
    }

    p.draw = () => {
        // p.frameRate(30)

        voronoi.updatePoints();
        voronoi.createVoronoi();
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

    let modulusSlider;
    let multiplierSlider;
    let width = 0;
    let height = 0;

    p.setup = () => {

        let c = document.getElementById("voronoi");
        let cWidth = c.clientWidth;
        let cHeight = c.clientHeight;
        width = cWidth;
        height = cHeight;
        // centerX = cWidth / 2;
        // centerY = cHeight / 2;

        const canvas = p.createCanvas(width, height);
        canvas.parent('vortex');

        // p.createCanvas(400, 400);
        p.background(255);
        vortex = new Vortex(p, width, height);
        vortex.init();

        // modulusSlider = p.createSlider(2, 100);
        // modulusSlider.addClass("vortex-slider");
        // modulusSlider.input(modulusSliderUpdate);
        // modulusSlider.size(400);

        // multiplierSlider = p.createSlider(2, 10);
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
 * Shapes Sketch
 */
function shapesSketch(p) {

    let shape1, shape2;
    p.setup = () => {

        let c = document.getElementById("shapes");
        let cWidth = c.clientWidth;
        let cHeight = c.clientHeight;
        width = cWidth;
        height = cHeight;

        const canvas = p.createCanvas(width, height);
        canvas.parent('shapes');
        p.background(200);

        shape1 = new Rectangle(p, 25, 25, 25, 25)
        shape2 = new Rectangle(p, 50, 50, 50, 50)


    }

    p.draw = () => {
        p.background(255, 255, 255);
        shape1.show();
        shape2.show();
        shape1.hover();
        shape2.hover();
        shape1.update();
        shape2.update();

    }

    //     let red, green, blue;
    // let shape1, shape2;

    // function setup() {
    //   createCanvas(400, 400);
    //   red = color(200, 0, 0)
    //   green = color(0, 200, 0)
    //   blue = color(0, 0, 200)

    //   shape1 = new Rectangle(25, 25, 25, 25)
    //   shape2 = new Rectangle(50, 50, 50, 50)
    // }

    // function draw() {
    //   background(255, 255, 255);
    //   shape1.show();
    //   shape2.show();
    //   shape1.hover();
    //   shape2.hover();
    //   shape1.update();
    //   shape2.update();
    // }

    p.mousePressed = () => {
        shape1.pressed();
        shape2.pressed();
    }

    p.mouseReleased = () => {
        shape1.released();
        shape2.released();
    }

}

new p5(shapesSketch, document.getElementById("shapes"));
