class Voronoi {
    // height, width, nodes, colors, offset
    constructor(h, w, n, c, o = 10) {
        this.height = h;
        this.width = w;
        this.nodes = n;
        this.colors = c;
        this.offset = o;
        this.points = [];
        this.delaunay = d3.Delaunay.from(this.nodes)
    }

    createPoints() {
        const p = [];
        for (let i = 0; i < this.nodes.length; i++) {
            let point = new Point(
                this.nodes[i][0],
                this.nodes[i][1],
                4
            )
            p.push(point)
        }
        this.points = p;
    }

    createVornoi() {
        // const delaunay = d3.Delaunay.from(this.nodes)
        this.createPoints();

        // for (let p of this.points) {
        //     print("point: ", p)
        // }

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
            strokeWeight(2)
            fill(colors[i])
            endShape()
        }

        for (let p of this.points) {
            p.show();
        }

    }
}