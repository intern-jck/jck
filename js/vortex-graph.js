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
 * Vortex Graph Sketch
 */
function vortexGraphSketch(p) {
    let width = 0;
    let height = 0;
    let vortex = null;

    p.setup = () => {

        let c = document.getElementById("vortex");
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
