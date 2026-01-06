// Canvas 1
function canvas_1(p) {
    p.setup = function () {
        let container = document.getElementById("canvas-1");

        let canvasWidth = container.offsetWidth;
        let canvasHeight = container.offsetHeight;

        let canvas = p.createCanvas(canvasWidth, canvasHeight);
        canvas.parent('canvas-1');
    };

    p.draw = function () {
        p.background(255);
        p.stroke(255);

        p.fill(200, 0, 0);
        p.circle(p.mouseX, p.mouseY, 30);

        p.fill(255, 0, 0);
        p.circle(p.mouseX, p.mouseY, 20);

        p.redct()
    };
}

new p5(canvas_1, document.getElementById('canvas-1'));

// Canvas 2
function canvas_2(p) {
    p.setup = function () {
        let container = document.getElementById("canvas-2");

        let canvasWidth = container.offsetWidth;
        let canvasHeight = container.offsetHeight;

        let canvas = p.createCanvas(canvasWidth, canvasHeight);
        canvas.parent('canvas-2');
    };

    p.draw = () => {
        p.background(255)
        p.stroke(255);

        p.fill(0, 200, 0);
        p.circle(p.mouseX, p.mouseY, 50);

        p.fill(0, 255, 0);
        p.circle(p.mouseX, p.mouseY, 40);
    };
}

new p5(canvas_2, document.getElementById('canvas-2'));

// Canvas 3
function canvas_3(p) {
    p.setup = function () {
        let container = document.getElementById("canvas-3");

        let canvasWidth = container.offsetWidth;
        let canvasHeight = container.offsetHeight;

        let canvas = p.createCanvas(canvasWidth, canvasHeight);
        canvas.parent('canvas-3');
    };

    p.draw = () => {
        p.background(255)
        p.stroke(255);

        p.fill(0, 0, 200);
        p.circle(p.mouseX, p.mouseY, 100);

        p.fill(0, 0, 255);
        p.circle(p.mouseX, p.mouseY, 90);
    };
}

new p5(canvas_3, document.getElementById('canvas-3'));

// Canvas 4
function canvas_4(p) {
    p.setup = function () {
        let container = document.getElementById("canvas-4");

        let canvasWidth = container.offsetWidth;
        let canvasHeight = container.offsetHeight;

        let canvas = p.createCanvas(canvasWidth, canvasHeight);
        canvas.parent('canvas-4');
    };

    p.draw = () => {
        p.background(255)
        p.stroke(255);

        p.fill(0, 200, 200);
        p.circle(p.mouseX, p.mouseY, 80);

        p.fill(0, 255, 255);
        p.circle(p.mouseX, p.mouseY, 70);
    };
}

new p5(canvas_4, document.getElementById('canvas-4'));