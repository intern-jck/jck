const colors = ["red", "green", "blue", "magenta", "cyan"];
function mouseOver(x, y, w, h) {
    if (x < 0 || y < 0 || x > w || y > h) {
        return false;
    }

    if (x < w && y < h) {
        return true;
    }
}

/**
 * Blocks Sketch
 */
function blocksSketch(p) {
    let shape1 = new Rectangle(p, 25, 25, 25, 25);
    let shape2 = new Rectangle(p, 50, 50, 50, 50);

    let width = 0;
    let height = 0;

    p.setup = () => {
        let c = document.getElementById("blocks");
        width = c.clientWidth;
        height = c.clientHeight;

        const canvas = p.createCanvas(width, height);
        canvas.parent('blocks');
        p.frameRate(30);
    }

    p.draw = () => {
        p.background(255);
        shape1.show();
        shape2.show();
        shape1.hover();
        shape2.hover();
        shape1.update();
        shape2.update();
    }

    p.mousePressed = () => {
        // console.log("shapes mouse down")
        // console.log(p.mouseX, p.mouseY)
        shape1.pressed();
        shape2.pressed();
    }

    p.mouseReleased = () => {
        // console.log("shapes mouse up")
        shape1.released();
        shape2.released();
    }

}

new p5(blocksSketch, document.getElementById("blocks"));
