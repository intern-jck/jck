let width = 0;
let height = 0;
let centerX = 0;
let centerY = 0;

let pi = Math.PI;
let tau = 2 * pi;
let modulus = 16;
let multiplier = 2;

let diameter = 0;
let radius = 0;
let center = 0;

function setup() {

    let c = document.getElementById("vortex");
    width = c.clientWidth;
    height = c.clientHeight;
    centerX = width / 2;
    centerY = height / 2;
    radius = width / 2 - 10;
    diameter = radius * 2;
    center = width / 2;

    colorMode(HSL)
    const canvas = createCanvas(width, height, SVG);
    canvas.parent('vortex');

    strokeWeight(2)

    createVortex(center, radius, multiplier, modulus);
}

function draw() {
}


function clearDrawing() {
    let canvas = document.getElementById(vortex);
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function createVortex(c, r, m, n) {
    clear()
    stroke(0)
    ellipse(centerX, centerY, diameter, diameter);
    for (let i = 0; i < n; i++) {
        // Alpha is remainder after division.
        // It is also the digital root for base m
        let alpha = (i * m) % n;
        if (alpha != i) {

            // Get x,y cords for two points along circle.
            // Starting point.
            let x1 = c + r * Math.sin((i * 2 * Math.PI) / n);
            let y1 = c - r * Math.cos((i * 2 * Math.PI) / n);

            // Ending point.
            let x2 = c + r * Math.sin((m * i * 2 * Math.PI) / n);
            let y2 = c - r * Math.cos((m * i * 2 * Math.PI) / n);

            let lineLength = Math.floor(dist(x1, y1, x2, y2))
            let lineColor = Math.floor(remap(lineLength, 0, width, 0, 360))

            stroke(lineColor, 100, 50)
            strokeWeight(1);
            line(x1, y1, x2, y2);
        }
    }
}

function updateModulus(value) {
    modulus = value;
    let modulusNumber = document.getElementById('modulus-number');
    let modulusRange = document.getElementById('modulus-range');
    modulusNumber.value = value;
    modulusRange.value = value;
    createVortex(center, radius, multiplier, modulus);
}

function updateMultiplier(value) {
    multiplier = value;
    let multiplierNumber = document.getElementById('multiplier-number');
    let multiplierRange = document.getElementById('multiplier-range');
    multiplierNumber.value = value;
    multiplierRange.value = value;
    createVortex(center, radius, multiplier, modulus);
}

function remap(val, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (val - low1) / (high1 - low1);
}
