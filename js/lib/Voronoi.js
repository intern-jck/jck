class Voronoi {
    constructor(p, w, h, n, c, o = 10) {
        this.p5 = p;
        this.width = w;
        this.height = h;
        this.nodes = n;
        this.colors = c;
        this.offset = o;

        this.points = [];
        this.bounds = [
            this.offset,
            this.offset,
            this.width - this.offset,
            this.height - this.offset
        ];

        this.delaunay = d3.Delaunay.from(this.nodes)
        this.voronoi = null;
        this.polygons = [];
    }

    create() {
        this.generatePoints();
        this.createVoronoi();
    }

    generatePoints() {
        this.points = [];

        for (let i = 0; i < this.nodes.length; i++) {
            let point = new Point(
                this.p5,
                this.nodes[i][0],
                this.nodes[i][1],
                6
            )
            this.points.push(point);
        }
    }

    createVoronoi() {
        this.delaunay = d3.Delaunay.from(this.nodes)
        this.voronoi = this.delaunay.voronoi(this.bounds);

        for (let gon of this.voronoi.cellPolygons()) {
            this.polygons.push(gon);
        }

        for (let i = 0; i < this.polygons.length; i++) {
            let polygon = this.polygons[i];

            this.p5.beginShape();
            for (let v of polygon) {
                this.p5.vertex(v[0], v[1]);
            }

            this.p5.stroke("black");
            this.p5.strokeWeight(1);
            this.p5.endShape();
        }

        for (let p of this.points) {
            p.show();
        }

    }

    updateVoronoi() {
        this.polygons = [];
        this.delaunay = d3.Delaunay.from(this.nodes)
        this.voronoi = this.delaunay.voronoi(this.bounds);

        for (let gon of this.voronoi.cellPolygons()) {
            this.polygons.push(gon)
        }

        for (let i = 0; i < this.polygons.length; i++) {

            let polygon = this.polygons[i];

            this.p5.beginShape();
            for (let v of polygon) {
                this.p5.vertex(v[0], v[1])
            }

            this.p5.stroke("black")
            this.p5.strokeWeight(1)
            this.p5.fill(this.colors[i % 5])
            this.p5.endShape()
        }

        for (let p of this.points) {
            p.show();
        }
    }

    updatePoints() {
        for (let i = 0; i < this.nodes.length; i++) {
            this.points[i].drag(this.p5.mouseX, this.p5.mouseY);
            this.nodes[i] = [this.points[i].position.x, this.points[i].position.y];
            this.points[i].show();
        }
    }

    mousePressedHandler() {
        for (let p of this.points) {
            if (this.p5.dist(this.p5.mouseX, this.p5.mouseY, p.position.x, p.position.y) < 10) {
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