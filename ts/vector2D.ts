class Vector2D {

    public x: number;
    public y: number;
    
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public plus(other: Vector2D): Vector2D {
        return new Vector2D(this.x + other.x, this.y + other.y);
    }

    public times(factor: number): Vector2D {
        return new Vector2D(this.x * factor, this.y * factor);
    }
}