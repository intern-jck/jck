class Block {
    constructor(m, x, y, c) {
        this.mass = m;
        this.position = createVector(x, y);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
        this.color = c;
    }

    // Apply force according to Newton's 2nd law: F = M * A
    // or A = F / M
    applyForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);
    }

    update() {
        // Change the velocity by the acceleration
        this.velocity.add(this.acceleration);

        // Change the position by the velocity
        this.position.add(this.velocity);

        // Clear the acceleration each frame
        this.acceleration.mult(0);
    }

    display() {
        stroke(0);
        strokeWeight(2);
        fill(this.color);
        ellipse(this.position.x, this.position.y, this.mass * 16, this.mass * 16);
    }

    // Make the balls bounce at the bottom
    checkEdges() {
        if (this.position.y > height - this.mass * 8) {
            // A little dampening when hitting the bottom
            this.velocity.y *= -0.9;
            this.position.y = height - this.mass * 8;
        }
    }
}