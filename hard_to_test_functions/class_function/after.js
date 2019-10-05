class Rectangle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}

console.log(Rectangle.prototype.getArea.apply({ width: 5, height: 5 }));