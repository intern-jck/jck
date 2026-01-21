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

class RectangleInstance {
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

class Point {
    constructor(x, y, w, s = "black") {
        this.weight = w;
        this.stroke = s;
        this.dragging = false;
        this.x = x;
        this.y = y;
    }

    show() {
        stroke(this.stroke);
        strokeWeight(this.weight);
        fill(0)
        ellipse(this.x, this.y, 10, 10)
    }

    drag(x, y) {
        if (this.dragging) {
            this.x = x;
            this.y = y;
        }
        this.show()
    }
}


let gravity = 9.8;

class Rectangle {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.offsetX = 0;
        this.offsetY = 0;
        this.dragging = false;
        this.over = false;
        this.active = false;
        this.ySpeed = 0;
        this.acceleration = 0;
        this.velocity = 0;
        this.mass = 0;
    }

    show() {
        strokeWeight(4)
        fill(0)
        rect(this.x, this.y, this.w, this.h);
    }

    hover() {
        if (mouseX > this.x && mouseX < this.x + this.w &&
            mouseY > this.y && mouseY < this.y + this.h
        ) {
            this.over = true;
        } else {
            this.over = false;
        }
    }

    update() {
        if (this.dragging) {
            this.x = mouseX + this.offsetX;
            this.y = mouseY + this.offsetY;
        }
        // this.acceleration = this.acceleration + gravity;
        this.velocity = this.velocity + this.gravity;
        this.y = this.y + this.velocity;
        if (this.x + this.h / 2 > height) {

        }
    }

    pressed() {
        if (this.over) {
            this.color = color(0, 200, 0)
            this.active = true;
            this.dragging = true;

            this.offsetX = this.x - mouseX;
            this.offsetY = this.y - mouseY;
        }
    }

    released() {
        this.color = color(0, 0, 200)
        this.active = false;
        this.dragging = false;
    }
}
