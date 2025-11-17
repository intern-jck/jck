// Canvas 1
function canvas_1(p) {
    p.setup = function () {
        p.createCanvas(400, 200);
    };

    p.draw = function () {
        p.background(100);
        p.stroke(255);

        p.fill(100);
        p.circle(p.mouseX, p.mouseY, 60);

        p.fill(255);
        p.circle(p.mouseX, p.mouseY, 50);
    };
}

new p5(canvas_1, document.getElementById('canvas-1'));

// Canvas 2
function canvas_2(p) {
    p.setup = function () {
        p.createCanvas(400, 200);
    };

    p.draw = () => {
        p.background(255)
        p.stroke(255);

        p.fill(100);
        p.circle(p.mouseX, p.mouseY, 60);

        p.fill(0);
        p.circle(p.mouseX, p.mouseY, 50);
    };
}

new p5(canvas_2, document.getElementById('canvas-2'));