const height = 800;
const width = 800;
const offset = 0;

// const colors = ["red", "green", "blue", "magenta", "cyan"];
// const points = [];

const colors = ["red", "green", "blue", "magenta", "cyan"];
const points = [];

function setup() {
    createCanvas(width, height);

    for (let i = 0; i < 16; i++) {
        points.push(new Point(
            floor(random(offset * 2, width - offset * 2)),
            floor(random(offset * 2, height - offset * 2)),
            8))
    }

    drawVoronoi()
}

function draw() {
    frameRate(30)
    drawVoronoi()

    for (let p of points) {
        p.drag(mouseX, mouseY)
        p.show();
    }

}

function drawVoronoi() {
    const delaunay = d3.Delaunay.from(getPointsPos());
    const bounds = [offset, offset, width - offset, height - offset];
    const voronoi = delaunay.voronoi(bounds);

    const polygons = [...voronoi.cellPolygons()];

    for (let i = 0; i < polygons.length; i++) {
        beginShape();
        for (let v of polygons[i]) {
            vertex(v[0], v[1]);
        }

        stroke("black")
        strokeWeight(3)
        fill(colors[i % colors.length])
        endShape();
    }

}

function getPointsPos() {
    let pos = [];
    for (let p of points) {
        pos.push([p.position.x, p.position.y])
    }
    return pos
}

function mousePressed() {
    for (let p of points) {
        if (dist(mouseX, mouseY, p.position.x, p.position.y) < 10) {
            p.dragging = true;
        }
    }
}

function mouseReleased() {
    for (let p of points) {
        p.dragging = false
    }
}
