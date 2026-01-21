const colors = ["red", "green", "blue", "magenta", "cyan"];

let offset = 5;

class Block {
    constructor(x, y, w, h, c) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;

        this.speed = 0;
        this.gravity = 0.1;
        this.offsetX = 0;
        this.offsetY = 0;
        this.dragging = false;
        this.over = false;
        this.active = false;
        this.currentColor = this.c
    }

    show() {
        fill(this.currentColor)
        stroke(0)
        strokeWeight(2)
        rect(this.x, this.y, this.w, this.h);
    }

    update() {

        if (this.dragging) {
            this.x = mouseX + this.offsetX;
            this.y = mouseY + this.offsetY;
        }

        this.y = this.y + this.speed;
        this.speed = this.speed + this.gravity;

        if (this.atEdge()) {
            this.speed = this.speed * 0;
        }
    }

    checkCollision(block) {
        if (this.y + this.h > block.y) {
            this.currentColor = "purple"
        } else {
            this.currentColor = this.c
        }
    }

    atEdge() {
        if (this.y > height - this.h - offset) {
            return true
        }

        return false
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

let block = null;
let block2 = null;

function setup() {
    let c = document.getElementById("blocks");
    width = c.clientWidth;
    height = c.clientHeight;

    const canvas = createCanvas(width, height, SVG);
    canvas.parent('blocks');
    frameRate(60);

    block = new Block(50, 50, 50, 50, "blue")
    block.show();

    block2 = new Block(150, 65, 50, 50, "green")
    block2.show();
}

function draw() {
    background(255);
    block.show();
    block.update();
    block.hover();
    block.checkCollision(block2);

    block2.show();
    block2.update();
    block2.hover();
    block2.checkCollision(block);
}

function mousePressed() {
    block.pressed();
    block2.pressed();
}

function mouseReleased() {
    block.released();
    block2.released();
}

