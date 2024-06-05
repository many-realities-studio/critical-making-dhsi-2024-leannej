let circles = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 12; i++) {
    circles.push(new Circle(random(width), random(height)));
  }
}

function draw() {
  background(255);

  for (let i = 0; i < circles.length; i++) {
    circles[i].update();
    circles[i].display();
    circles[i].checkCollision();
  }
}

class Circle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(2);
    this.radius = 20;
  }

  update() {
    this.pos.add(this.vel);
    if (this.pos.x < 0 || this.pos.x > width) {
      this.vel.x *= -1;
    }
    if (this.pos.y < 0 || this.pos.y > height) {
      this.vel.y *= -1;
    }
  }

  display() {
    fill(255, 192, 203);
    ellipse(this.pos.x, this.pos.y, this.radius * 2);
  }

  checkCollision() {
    for (let other of circles) {
      if (other !== this) {
        let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
        if (d < this.radius + other.radius) {
          let normal = p5.Vector.sub(other.pos, this.pos).normalize();
          let mtd = normal.copy().mult((this.radius + other.radius) - d);
          this.pos.sub(mtd.copy().mult(0.5));
          other.pos.add(mtd.copy().mult(0.5));
          let normalUnit = normal.copy().normalize();
          let v = p5.Vector.sub(other.vel, this.vel);
          let vn = v.dot(normalUnit);
          if (vn > 0) return;
          let restitution = 9;
          let impulse = normalUnit.mult(-(1 + restitution) * vn);
          this.vel.sub(impulse);
          other.vel.add(impulse);
        }
      }
    }
  }
}