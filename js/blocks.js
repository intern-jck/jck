const colors = ["red", "green", "blue", "magenta", "cyan"];
let offset = 5;

class Block {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.speed = 0;
        this.gravity = 0.1;
        this.offsetX = 0;
        this.offsetY = 0;
        this.dragging = false;
        this.over = false;
        this.active = false;
    }

    show() {
        fill(200)
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

    checkCollision() {
        if (this.atEdge) {
            this.y = height;
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

function setup() {
    let c = document.getElementById("blocks");
    width = c.clientWidth;
    height = c.clientHeight;

    const canvas = createCanvas(width, height, SVG);
    canvas.parent('blocks');
    frameRate(60);

    block = new Block(50, 50, 50, 50)
    block.show();
}

function draw() {
    background(255);
    block.show();
    block.update();
    block.hover();
}

function mousePressed() {
    block.pressed();
}

function mouseReleased() {
    block.released();
}



/**
 Junkyard



    // let xSpacing = width / 9;

    // for (let i = 0; i < 9; i += 1) {
    //     let mass = random(0.5, 3);
    //     let xPosition = xSpacing * i + xSpacing / 2;
    //     blocks[i] = new Block(mass, xPosition, 0, color(i, 100, 100));
    // }

    // for (let block of blocks) {

    //     // Gravitational force is proportional to the mass
    //     // let gravity = createVector(0, 0.1 * block.mass);
    //     // let normalForce = createVector(0, 0)
    //     // // Apply gravitational force
    //     // if (block.atEdge()) {
    //     //     block.applyForce(normalForce);
    //     // } else {
    //     //     block.applyForce(gravity);
    //     // }

    //     // Update and display
    //     block.update();
    //     block.display();
    //     block.checkEdges();
    // }


    // shape1.show();
    // shape2.show();
    // shape1.hover();
    // shape2.hover();
    // shape1.update();
    // shape2.update();

 
let shape1 = new Rectangle(25, 25, 25, 25);
let shape2 = new Rectangle(50, 50, 50, 50);

let width = 0;
let height = 0;
let blocks = [];
class Block {
    constructor(m, x, y, c) {
        this.mass = 1;
        // this.position = createVector(x, y);
        // this.velocity = createVector(0, 0);
        // this.acceleration = createVector(0, 0);
        this.color = c;
        this.x = x;
        this.y = y;
        this.w = 25;
        this.h = 25;
        // this.f = createVector(0, 0);
    }

    // Apply force according to Newton's 2nd law: F = M * A
    // or A = F / M
    // applyForce(force) {
    //     this.f = p5.Vector.div(force, this.mass);
    //     this.acceleration.add(this.f);
    // }

    update() {
        // Change the velocity by the acceleration
        // this.velocity.add(this.acceleration);

        // // Change the position by the velocity
        // this.position.add(this.velocity);

        // // Clear the acceleration each frame
        // this.acceleration.mult(0);
        this.y += 1;
    }

    display() {
        stroke(0);
        strokeWeight(2);
        fill(this.color);
        ellipse(this.x, this.y, this.w, this.h);
    }

    // Make the balls bounce at the bottom
    // checkEdges() {
    //     // if (this.position.y > height - this.h) {
    //     //     // A little dampening when hitting the bottom
    //     //     // this.velocity.y *= -0.1;
    //     //     this.position.y = height - this.h;
    //     //     // this.
    //     // }
    //     if (this.atEdge) {
    //         console.log("edge!")
    //         this.y = height;
    //     }
    // }

    // atEdge() {
    //     if (this.position.y > height - this.h) {
    //         return true
    //     }

    //     return false
    // }
}
 */