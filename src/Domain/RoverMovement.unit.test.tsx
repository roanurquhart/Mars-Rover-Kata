import Coordinate from './Location'
import Direction from './Direction'
import React from 'react';
import each from 'jest-each'
import Rover from './Rover'


describe('Rover Movement Tests', function () {

    //Forward Tests
    each([[Direction.East, 1, 0],[Direction.South, 0, -1],[Direction.West, -1, 0],[Direction.North, 0, 1]]).
    it('Moves Forward To The Correct Location', 
    (direction, x, y) => {
        var rover = new Rover(direction, new Coordinate());

        rover.moveForward();

        expect(rover.location.X).toBe(x);
        expect(rover.location.Y).toBe(y);
    })

    each([[Direction.East, Direction.East],[Direction.South, Direction.South],[Direction.West, Direction.West],[Direction.North, Direction.North]]).
    it('Moves Forward And Maintains Direction', 
    (initialDirection, expectedDirection) => {
        var rover = new Rover(initialDirection, new Coordinate());

        rover.moveForward();

        expect(rover.direction).toBe(expectedDirection);
    }) 

    //Backward Tests
    each([[Direction.East, -1, 0],[Direction.South, 0, 1],[Direction.West, 1, 0],[Direction.North, 0, -1]]).
    it('Moves Backward To The Correct Location', 
    (direction, x, y) => {
        var rover = new Rover(direction, new Coordinate());

        rover.moveBackward();

        expect(rover.location.X).toBe(x);
        expect(rover.location.Y).toBe(y);
    })

    each([[Direction.East, Direction.East],[Direction.South, Direction.South],[Direction.West, Direction.West],[Direction.North, Direction.North]]).
    it('Moves Backward And Maintains Direction', 
    (initialDirection, expectedDirection) => {
        var rover = new Rover(initialDirection, new Coordinate());

        rover.moveBackward();

        expect(rover.direction).toBe(expectedDirection);
    }) 
})

