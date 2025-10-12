class Point {
    constructor(x, y, w) {
        this.weight = w;

        this.color = color(0, 0, 0);
        this.boundsX = [-1, -1];
        this.boundsY = [-1, -1];
        this.dragging = false;
        this.mouseOffset = createVector(0, 0)

        // physics stuff
        this.position = createVector(x, y);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
    }

    show() {
        stroke(this.color);
        strokeWeight(this.weight);
        point(this.position.x, this.position.y);
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

    setVelocity(v) {
        this.velocity.set(v);
    }

    color(r, g, b) {
        this.color = color(r, g, b);
    }

}
