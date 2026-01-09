class Point {
    constructor(p, x, y, w, s = "black") {
        this.p5 = p;
        this.weight = w;
        this.stroke = s;
        this.dragging = false;
        this.position = this.p5.createVector(x, y);
    }

    show() {
        this.p5.stroke(this.stroke);
        this.p5.strokeWeight(this.weight);
        this.p5.point(this.position.x, this.position.y);
    }

    move(v) {
        this.position.add(v)
    }

    drag(x, y) {
        if (this.dragging) {
            this.position.x = x;
            this.position.y = y;
        }
    }

}