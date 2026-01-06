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
    let slider;
    let canvas;

    p.setup = () => {
        canvas = p.createCanvas(400, 400);
        p.background(255);

        for (let i = 0; i < 4; i++) {
            nodes.push(
                [[p.floor(p.random(offset * 2, width - offset * 2))],
                [p.floor(p.random(offset * 2, height - offset * 2))]]
            )
        }

        voronoi = new Voronoi(p, height, width, nodes, colors);
        voronoi.init();
        slider = p.createSlider(2, 100);
        slider.addClass("voronoi-count");
        slider.input(sliderUpdate);
        slider.size(width);
    }

    p.draw = () => {
        p.frameRate(30)

        voronoi.updatePoints();
        voronoi.createVoronoi();
    }

    p.mousePressed = () => {
        voronoi.mousePressedHandler();
    }

    p.mouseReleased = () => {
        voronoi.mouseReleasedHandler();
    }

    sliderUpdate = () => {
        let val = slider.value();
        let _nodes = [];

        for (let i = 0; i < val; i++) {
            _nodes.push(
                [[p.floor(p.random(offset * 2, width - offset * 2))],
                [p.floor(p.random(offset * 2, height - offset * 2))]]
            )
        }

        voronoi.nodes = _nodes;
        voronoi.generatePoints();
        voronoi.createVoronoi();
    }
}

new p5(voronoiSketch, document.getElementById("voronoi"));

/*
Vortex Graph
*/
function vortexGraphSketch(p) {

    let modulusSlider;
    let multiplierSlider;

    p.setup = () => {
        p.createCanvas(400, 400);
        p.background(255);
        vortex = new Vortex(p, 400, 400);
        vortex.init();

        modulusSlider = p.createSlider(2, 100);
        modulusSlider.addClass("vortex-slider");
        modulusSlider.input(modulusSliderUpdate);
        modulusSlider.size(400);

        multiplierSlider = p.createSlider(2, 10);
        multiplierSlider.addClass("vortex-slider");
        multiplierSlider.input(multiplierSliderUpdate);
        multiplierSlider.size(400);
    }

    p.draw = () => {
    }

    modulusSliderUpdate = () => {
        let val = modulusSlider.value();
        console.log("vortex", val);
        vortex.modulus = val;

        vortex.createVortex()
    }

    multiplierSliderUpdate = () => {
        let val1 = multiplierSlider.value();
        console.log("vortex", val1);
        vortex.multiplier = val1;

        vortex.createVortex()
    }
}

new p5(vortexGraphSketch, document.getElementById("vortex"));

