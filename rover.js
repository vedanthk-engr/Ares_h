class Rover {
    constructor(x, y, z, scaleX, scaleY, scaleZ, texture){
        this.pos = createVector(x, y, z);
        this.scale = createVector(scaleX, scaleY, scaleZ);
        this.texture = texture;
    }

    move(dx, dz) {
        this.pos.x += dx;
        this.pos.z += dz;
    }
    
    display() {
        push();
        translate(this.pos.x, this.pos.y, this.pos.z);
        this.scale(0.65);
        noStroke();
        texture(this.texture);
        plane(this.width, this.height);
        pop();
    }

    checkCollision(obstacles) {
        for (let obst of obstacles) {
            const d = dist(this.pos.x, this.pos.y, obst.pos.x, obst.pos.z);
            if (d < 3) return true;
        }
        return false;
    }
}