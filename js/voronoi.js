const colors = ["red", "green", "blue", "magenta", "cyan"];

// function mouseOver(x, y, w, h) {
//     if (x < 0 || y < 0 || x > w || y > h) {
//         return false;
//     }
//     if (x < w && y < h) {
//         return true;
//     }
// }

let width = 0;
let height = 0;
let nodes = [];
let offset = 10;
let points = [];
let bounds = [];
let delaunay = null;
let voronoi = null;
let polygons = [];

function setup() {
    let c = document.getElementById("voronoi");
    width = c.clientWidth;
    height = c.clientHeight;

    // let rect = c.getBoundingClientRect("voronoi");
    // console.log("rect:", rect.width, rect.height, rect.top, rect.left)

    const canvas = createCanvas(width, height);
    canvas.parent('voronoi');

    for (let i = 0; i < 4; i++) {
        nodes.push(
            [[floor(random(offset * 2, width - offset * 2))],
            [floor(random(offset * 2, height - offset * 2))]]
        )
    }

    bounds = [
        offset,
        offset,
        width - offset,
        height - offset
    ];

    // voronoi = new Voronoi(width, height, nodes, colors);
    // voronoi.create();

    generatePoints();
    createVoronoi();
    frameRate(60);
}

function draw() {
    background(255);
    updatePoints();
    updateVoronoi();
}

function mousePressed() {
    // voronoi.mousePressedHandler();
    for (let p of points) {
        if (dist(mouseX, mouseY, p.position.x, p.position.y) < 10) {
            p.dragging = true;
        }
    }
}

function mouseReleased() {
    // voronoi.mouseReleasedHandler();
    for (let p of points) {
        p.dragging = false
    }
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

function createVoronoi() {
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

function updateVoronoi() {
    polygons = [];
    delaunay = d3.Delaunay.from(nodes)
    voronoi = delaunay.voronoi(bounds);

    for (let gon of voronoi.cellPolygons()) {
        polygons.push(gon)
    }

    for (let i = 0; i < polygons.length; i++) {

        let polygon = polygons[i];

        beginShape();
        for (let v of polygon) {
            vertex(v[0], v[1])
        }

        stroke("black")
        strokeWeight(1)
        fill(colors[i % 5])
        endShape()
    }

    for (let p of points) {
        p.show();
    }
}

function updatePoints() {
    for (let i = 0; i < nodes.length; i++) {
        points[i].drag(mouseX, mouseY);
        nodes[i] = [points[i].position.x, points[i].position.y];
        points[i].show();
    }
}

// class Voronoi {
//     constructor(p, w, h, n, c, o = 10) {
//         this.p5 = p;

//         this.width = w;
//         this.height = h;
//         this.nodes = n;
//         this.colors = c;
//         this.offset = o;

//         this.points = [];
//         this.bounds = [
//             this.offset,
//             this.offset,
//             this.width - this.offset,
//             this.height - this.offset
//         ];

//         this.delaunay = d3.Delaunay.from(this.nodes)
//         this.voronoi = null;
//         this.polygons = [];
//     }

//     create() {
//         this.generatePoints();
//         this.createVoronoi();
//     }

//     generatePoints() {
//         this.points = [];

//         for (let i = 0; i < this.nodes.length; i++) {
//             let point = new Point(
//                 this.p5,
//                 this.nodes[i][0],
//                 this.nodes[i][1],
//                 6
//             )
//             this.points.push(point);
//         }
//     }

//     createVoronoi() {
//         this.delaunay = d3.Delaunay.from(this.nodes)
//         this.voronoi = this.delaunay.voronoi(this.bounds);

//         for (let gon of this.voronoi.cellPolygons()) {
//             this.polygons.push(gon);
//         }

//         for (let i = 0; i < this.polygons.length; i++) {
//             let polygon = this.polygons[i];

//             this.p5.beginShape();
//             for (let v of polygon) {
//                 this.p5.vertex(v[0], v[1]);
//             }

//             this.p5.stroke("black");
//             this.p5.strokeWeight(1);
//             this.p5.endShape();
//         }

//         for (let p of this.points) {
//             p.show();
//         }

//     }

//     updateVoronoi() {
//         this.polygons = [];
//         this.delaunay = d3.Delaunay.from(this.nodes)
//         this.voronoi = this.delaunay.voronoi(this.bounds);

//         for (let gon of this.voronoi.cellPolygons()) {
//             this.polygons.push(gon)
//         }

//         for (let i = 0; i < this.polygons.length; i++) {

//             let polygon = this.polygons[i];

//             this.p5.beginShape();
//             for (let v of polygon) {
//                 this.p5.vertex(v[0], v[1])
//             }

//             this.p5.stroke("black")
//             this.p5.strokeWeight(1)
//             this.p5.fill(this.colors[i % 5])
//             this.p5.endShape()
//         }

//         for (let p of this.points) {
//             p.show();
//         }
//     }

//     updatePoints() {
//         for (let i = 0; i < this.nodes.length; i++) {
//             this.points[i].drag(this.p5.mouseX, this.p5.mouseY);
//             this.nodes[i] = [this.points[i].position.x, this.points[i].position.y];
//             this.points[i].show();
//         }
//     }

//     mousePressedHandler() {
//         for (let p of this.points) {
//             if (this.p5.dist(this.p5.mouseX, this.p5.mouseY, p.position.x, p.position.y) < 10) {
//                 p.dragging = true;
//             }
//         }
//     }

//     mouseReleasedHandler() {
//         for (let p of this.points) {
//             p.dragging = false
//         }
//     }
// }

/*
Voronoi Sketch
*/
// function voronoiSketch(p) {

//     let width = 0;
//     let height = 0;
//     let nodes = [];
//     let offset = 10;
//     let voronoi;

//     p.setup = () => {
//         let c = document.getElementById("voronoi");
//         width = c.clientWidth;
//         height = c.clientHeight;

//         // let rect = c.getBoundingClientRect("voronoi");

//         // console.log("rect:", rect.width, rect.height, rect.top, rect.left)

//         const canvas = p.createCanvas(width, height);
//         canvas.parent('voronoi');

//         for (let i = 0; i < 4; i++) {
//             nodes.push(
//                 [[p.floor(p.random(offset * 2, width - offset * 2))],
//                 [p.floor(p.random(offset * 2, height - offset * 2))]]
//             )
//         }

//         voronoi = new Voronoi(p, width, height, nodes, colors);
//         voronoi.create();
//         p.frameRate(60);
//     }

//     p.draw = () => {
//         p.background(255);
//         voronoi.updatePoints();
//         voronoi.updateVoronoi();
//     }

//     p.mousePressed = () => {
//         voronoi.mousePressedHandler();
//     }

//     p.mouseReleased = () => {
//         voronoi.mouseReleasedHandler();
//     }


//     // sliderUpdate = () => {
//     //     let val = slider.value();
//     //     let _nodes = [];

//     //     for (let i = 0; i < val; i++) {
//     //         _nodes.push(
//     //             [[p.floor(p.random(offset * 2, width - offset * 2))],
//     //             [p.floor(p.random(offset * 2, height - offset * 2))]]
//     //         )
//     //     }

//     //     voronoi.nodes = _nodes;
//     //     voronoi.generatePoints();
//     //     voronoi.createVoronoi();
//     // }
// }

// new p5(voronoiSketch, document.getElementById("voronoi"));
