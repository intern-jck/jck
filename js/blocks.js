const colors = ["red", "green", "blue", "magenta", "cyan"];

function setup() {
    let c = document.getElementById("blocks");
    width = c.clientWidth;
    height = c.clientHeight;

    const canvas = createCanvas(width, height, SVG);
    canvas.parent('blocks');
    frameRate(60);
}

function draw() {
    background(255);
}

function mousePressed() {
}

function mouseReleased() {
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