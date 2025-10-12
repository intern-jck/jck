class Rectangle {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.offsetX = 0;
    this.offsetY = 0;
    this.color = color(0, 0, 200);
    this.dragging = false;
    this.over = false;
    this.active = false;
  }

  show() {
    strokeWeight(4)
    fill(this.color)
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
  }

  pressed() {
    if(this.over) {
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
