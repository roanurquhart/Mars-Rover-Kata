import React from 'react';
import Direction from './Direction';
import Coordinate from './Location'

class Rover {
    
    direction!: Direction;
    location!: Coordinate;

    constructor(direction?: Direction, location?: Coordinate) {
        if (direction != undefined && location == undefined) {
            throw new Error('Only one argument was supplied');
        }

        this.direction = direction || Direction.North;
        this.location = location || new Coordinate();
    }
    
    moveForward() {
        switch(this.direction) {
            case Direction.North:
                this.location.Y++;
                return new Rover(this.direction, this.location);
            case Direction.East:
                this.location.X++;
                return new Rover(this.direction, this.location);
            case Direction.South:
                this.location.Y--;
                return new Rover(this.direction, this.location);
            case Direction.West:
                this.location.X--;
                return new Rover(this.direction, this.location);
        }
        return this;
    }

    moveBackward() {
        switch(this.direction) {
            case Direction.North:
                this.location.Y--;
                return new Rover(this.direction, this.location);
            case Direction.East:
                this.location.X--;
                return new Rover(this.direction, this.location);
            case Direction.South:
                this.location.Y++;
                return new Rover(this.direction, this.location);
            case Direction.West:
                this.location.X++;
                return new Rover(this.direction, this.location);
        }
        return this;
    }

    turnRight() {
        switch (this.direction) {
            case Direction.North:
                this.direction = Direction.East;
                return new Rover(this.direction, this.location);
            case Direction.East:
                this.direction = Direction.South;
                return new Rover(this.direction, this.location);
            case Direction.South:
                this.direction = Direction.West;
                return new Rover(this.direction, this.location);
            case Direction.West:
                this.direction = Direction.North;
                return new Rover(this.direction, this.location);
        }
        return this;
    }

    turnLeft() {
        switch (this.direction) {
            case Direction.North:
                this.direction = Direction.West;
                return new Rover(this.direction, this.location);
            case Direction.East:
                this.direction = Direction.North;
                return new Rover(this.direction, this.location);
            case Direction.South:
                this.direction = Direction.East;
                return new Rover(this.direction, this.location);
            case Direction.West:
                this.direction = Direction.South;
                return new Rover(this.direction, this.location);
        }
        return this;
    }
}

export default Rover;