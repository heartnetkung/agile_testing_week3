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

console.log(new Rectangle(0, 0, 5, 5).getArea())