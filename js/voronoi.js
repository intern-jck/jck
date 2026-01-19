const colors = ["red", "green", "blue", "magenta", "cyan", "yellow", "orange", "purple"];

function downloadSvg() {
    console.log("download svg")
    // const container = document.getElementById('voronoi');
    // const containerSVGs = container.querySelectorAll('svg');
    // console.log(containerSVGs)

    save('voronoi.svg');

}

let width = 0;
let height = 0;
let nodeCount = 4;
let nodeMax = 25;
let nodeMin = 1;
let nodes = [];
let offset = 10;
let points = [];
let bounds = [];
let delaunay = null;
let voronoi = null;
let polygons = [];

// let nodeSlider = null;
// let nodeIncreaseButton = null;
// let nodeDecreaseButton = null;
// p5js functions
function setup() {
    let c = document.getElementById("voronoi");
    width = c.clientWidth;
    height = c.clientHeight;

    // const canvas = createCanvas(width, height);
    const canvas = createCanvas(width, height, SVG);
    // const canvas = createSVGWindow()
    canvas.parent('voronoi');

    // create random nodes
    for (let i = 0; i < nodeCount; i++) {
        let x = floor(random(offset * 2, width - offset * 2));
        let y = floor(random(offset * 2, height - offset * 2));
        nodes.push([x, y])
    }


    // create boundes for voronoi
    bounds = [
        offset,
        offset,
        width - offset,
        height - offset
    ];

    createVoronoi();
    createPoints();
    frameRate(60);
}

function draw() {
    // console.log(mouseX, mouseY)
    // background(255);
    // updateVoronoi();
    // updatePoints();
    // createVoronoi();
}

function mousePressed() {
    // console.log(mouseX, mouseY)
    for (let p of points) {
        // console.log(mouseX, mouseY, p.position.x, p.position.y)
        if (dist(mouseX, mouseY, p.x, p.y) < 25) {
            // console.log('move point')
            p.dragging = true;
            // console.log(p)
            // p.drag(mouseX, mouseY);
            // nodes[i] = [p.x, p.y];
            // p.show();
        }
    }
}

function mouseReleased() {
    for (let p of points) {
        p.dragging = false
    }
}


function mouseDragged() {
    background(255);
    createVoronoi();
    for (let i = 0; i < nodes.length; i++) {
        if (mouseX < bounds[0]) {
            mouseX = bounds[0]
        }
        if (mouseX > bounds[2]) {
            mouseX = bounds[2]
        }
        if (mouseY < bounds[1]) {
            mouseY = bounds[1]
        }
        if (mouseY > bounds[3]) {
            mouseY = bounds[3]
        }
        points[i].drag(mouseX, mouseY);
        nodes[i] = [points[i].x, points[i].y];
        // points[i].show();
    }

    // createPoints();
}

// voronoi functions
function createPoints() {
    points = [];
    // create points from nodes
    for (let i = 0; i < nodes.length; i++) {
        let x = nodes[i][0]
        let y = nodes[i][1]
        let p = new Point(x, y, 2)
        points.push(p);
        p.show();
    }
}

function createVoronoi() {
    // console.log(nodes)
    // points = [];
    // for (let i = 0; i < nodes.length; i++) {
    //     let x = nodes[i][0]
    //     let y = nodes[i][1]
    //     console.log('node:', x, y)
    //     // let p = new Point(x[0], y[0], 10)
    //     // points.push(p);
    //     // p.show();
    // }

    delaunay = d3.Delaunay.from(nodes)
    voronoi = delaunay.voronoi(bounds);
    polygons = []
    for (let gon of voronoi.cellPolygons()) {
        polygons.push(gon);
    }

    strokeWeight(2);
    // stroke("black");

    for (let i = 0; i < polygons.length; i++) {
        let polygon = polygons[i];

        fill(colors[i % colors.length])
        beginShape();
        for (let v of polygon) {
            vertex(v[0], v[1]);
        }
        endShape(CLOSE);
    }

    // for (let p of points) {
    //     p.show();
    // }

}

function increaseNodes() {

    // let count = nodeSlider.value();
    nodes = []
    nodeCount += 1;
    if (nodeCount > nodeMax) {
        nodeCount = nodeMax;
    }

    for (let i = 0; i < nodeCount; i++) {
        // nodes.push(
        //     [[floor(random(offset * 2, width - offset * 2))],
        //     [floor(random(offset * 2, height - offset * 2))]]
        // )

        let x = floor(random(offset * 2, width - offset * 2));
        let y = floor(random(offset * 2, height - offset * 2));
        nodes.push([x, y])
    }

    // generatePoints();
    // updateVoronoi();
    // updateNodeCount();
    createVoronoi();
    createPoints();

    updateNodeCount();
}

function decreaseNodes() {

    // let count = nodeSlider.value();
    nodes = []
    nodeCount -= 1;
    if (nodeCount < nodeMin) {
        nodeCount = nodeMin;
    }

    for (let i = 0; i < nodeCount; i++) {
        // nodes.push(
        //     [[floor(random(offset * 2, width - offset * 2))],
        //     [floor(random(offset * 2, height - offset * 2))]]
        // )

        let x = floor(random(offset * 2, width - offset * 2));
        let y = floor(random(offset * 2, height - offset * 2));
        nodes.push([x, y])
    }

    // generatePoints();
    // updateVoronoi();
    // updateNodeCount();

    createVoronoi();
    createPoints();
    updateNodeCount();
}

function updateNodeCount() {
    let p = document.getElementById("node-count");
    p.innerText = nodeCount;
}

/**
 Junkyard

function updatePoints() {
    for (let i = 0; i < nodes.length; i++) {
        points[i].drag(mouseX, mouseY);
        nodes[i] = [points[i].position.x, points[i].position.y];
        points[i].show();
    }
}
function updateVoronoi() {
    points = [];
    for (let i = 0; i < nodes.length; i++) {
        let point = new Point(
            nodes[i][0],
            nodes[i][1],
            6
        )
        points.push(point);
    }
    polygons = [];
    delaunay = d3.Delaunay.from(nodes)
    voronoi = delaunay.voronoi(bounds);

    for (let gon of voronoi.cellPolygons()) {
        polygons.push(gon)
    }

    stroke("black")
    strokeWeight(2)

    for (let i = 0; i < polygons.length; i++) {

        let polygon = polygons[i];

        fill(colors[i % 5])
        beginShape();
        for (let v of polygon) {
            vertex(v[0], v[1])
        }

        endShape()
    }

    for (let p of points) {
        p.show();
    }
}
    // nodeSlider = createSlider(nodeMin, nodeMax, 4, 1);
    // // nodeSlider.position(10, 10);
    // // nodeSlider.size(100);
    // nodeSlider.parent('voronoi');
    // nodeSlider.addClass('node-slider');
    // nodeSlider.input(updateNodes)

    // nodeIncreaseButton = createButton("+");
    // nodeIncreaseButton.parent('voronoi');
    // nodeIncreaseButton.mousePressed(updateNodes)

    // nodeDecreaseButton = createButton("-");
    // nodeDecreaseButton.parent('voronoi');
    // nodeDecreaseButton.mousePressed(updateNodes)
function updateNodes() {
    nodeCount = nodeSlider.value();
    nodes = []

    for (let i = 0; i < nodeCount; i++) {
        nodes.push(
            [[floor(random(offset * 2, width - offset * 2))],
            [floor(random(offset * 2, height - offset * 2))]]
        )
    }

    // generatePoints();
    updateVoronoi();
    updateNodeCount();
}
function generatePoints() {
    points = [];
    for (let i = 0; i < nodes.length; i++) {
        let point = new Point(
            nodes[i][0],
            nodes[i][1],
            6
        )
        points.push(point);
    }
}

function createPoints() {
    delaunay = d3.Delaunay.from(nodes)
    voronoi = delaunay.voronoi(bounds);

    for (let gon of voronoi.cellPolygons()) {
        polygons.push(gon);
    }

    for (let i = 0; i < polygons.length; i++) {
        let polygon = polygons[i];

        beginShape();
        for (let v of polygon) {
            vertex(v[0], v[1]);
        }

        stroke("black");
        strokeWeight(1);
        endShape();
    }

    for (let p of points) {
        p.show();
    }
}

 */