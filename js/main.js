// Function for first canvas
function sketch1(p) {
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

// Run first p5 instance
new p5(sketch1, document.getElementById('sketch-1'));

// let myp5 = new p5(s, document.getElementById('p5sketch'));

// Function for second canvas
function sketch2(p) {
    p.setup = function () {
        p.createCanvas(400, 200);
        // p.background(255);
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

// Run second p5 instance
new p5(sketch2, document.getElementById('sketch-2'));