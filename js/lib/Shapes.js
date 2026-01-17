class PointInstance {
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

class Point {
    constructor(x, y, w, s = "black") {
        // this.p5 = p;
        this.weight = w;
        this.stroke = s;
        this.dragging = false;
        this.position = createVector(x, y);
    }

    show() {
        stroke(this.stroke);
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

}





class Rectangle {
    constructor(p, x, y, w, h) {
        this.p5 = p;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.offsetX = 0;
        this.offsetY = 0;
        this.color = p.color(0, 0, 200);
        this.dragging = false;
        this.over = false;
        this.active = false;
    }

    show() {
        this.p5.strokeWeight(4)
        this.p5.fill(this.color)
        this.p5.rect(this.x, this.y, this.w, this.h);
    }

    hover() {
        if (this.p5.mouseX > this.x && this.p5.mouseX < this.x + this.w &&
            this.p5.mouseY > this.y && this.p5.mouseY < this.y + this.h
        ) {
            this.over = true;
        } else {
            this.over = false;
        }
    }

    update() {
        if (this.dragging) {
            this.x = this.p5.mouseX + this.offsetX;
            this.y = this.p5.mouseY + this.offsetY;
        }
    }

    pressed() {
        if (this.over) {
            this.color = this.p5.color(0, 200, 0)
            this.active = true;
            this.dragging = true;

            this.offsetX = this.x - this.p5.mouseX;
            this.offsetY = this.y - this.p5.mouseY;
        }
    }

    released() {
        this.color = this.p5.color(0, 0, 200)
        this.active = false;
        this.dragging = false;
    }
}
