class Voronoi {
    constructor(h, w, n, c, o = 10) {
        this.height = h;
        this.width = w;
        this.nodes = n;
        this.colors = c;
        this.offset = o;
        this.points = [];
        this.delaunay = d3.Delaunay.from(this.nodes)
    }

    init() {
        this.createPoints();
        this.createVoronoi();
    }

    createPoints() {
        const p = [];
        for (let i = 0; i < this.nodes.length; i++) {
            let point = new Point(
                this.nodes[i][0],
                this.nodes[i][1],
                6
            )
            p.push(point)
        }
        this.points = p;
    }

    createVoronoi() {
        this.delaunay = d3.Delaunay.from(this.nodes)

        const bounds = [
            this.offset,
            this.offset,
            this.width - this.offset,
            this.height - this.offset
        ];

        const voronoi = this.delaunay.voronoi(bounds);
        const polygons = [...voronoi.cellPolygons()];

        for (let i = 0; i < polygons.length; i++) {
            beginShape();
            for (let v of polygons[i]) {
                vertex(v[0], v[1])
            }

            stroke("black")
            strokeWeight(1)
            fill(colors[i % 5])
            endShape()
        }

        for (let p of this.points) {
            p.show();
        }

    }

    updatePoints() {
        for (let i = 0; i < nodes.length; i++) {
            this.points[i].drag(mouseX, mouseY)
            this.points[i].show();
            this.nodes[i] = [this.points[i].position.x], this.points[i].position.y
        }
    }

    mousePressedHandler() {
        for (let p of this.points) {
            if (dist(mouseX, mouseY, p.position.x, p.position.y) < 10) {
                p.dragging = true;
            }
        }
    }

    mouseReleasedHandler() {
        for (let p of this.points) {
            p.dragging = false
        }
    }
}