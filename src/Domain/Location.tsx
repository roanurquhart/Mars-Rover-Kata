import React from 'react';
class Coordinate {
    X: number;
    Y: number;

    constructor(x?: number, y?: number) {
        if (x != undefined && y == undefined) {
            throw new Error('Only one argument was supplied');
        }

        this.X = x || 0;
        this.Y = y || 0;
    }

    toString() {
        return "Location: (" + this.X + "," + this.Y + ")";
    }

}
export default Coordinate;