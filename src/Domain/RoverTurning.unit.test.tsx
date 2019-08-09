import Coordinate from './Location'
import Direction from './Direction'
import React from 'react';
import each from 'jest-each'
import Rover from './Rover'

describe('Rover Turning Tests', function () {

    each([[Direction.East, Direction.South],[Direction.South, Direction.West],[Direction.West, Direction.North],[Direction.North, Direction.East]]).
    it('Turns Right And Faces Correct Direction',
    (initialDirection, expectedDirection) => {
        var rover = new Rover(initialDirection, new Coordinate());

        rover.turnRight();

        expect(rover.direction).toBe(expectedDirection);
    }) 

    each([Direction.East, Direction.South, Direction.West, Direction.North]).
    it('Turns Right And Location Does Not Change',
    (initialDirection) => {
        var rover = new Rover(initialDirection, new Coordinate());
        var initialX = rover.location.X;
        var initialY = rover.location.Y;

        rover.turnRight();

        expect(rover.location.X).toBe(initialX);
        expect(rover.location.Y).toBe(initialY);
    }) 

    each([[Direction.East, Direction.North],[Direction.South, Direction.East],[Direction.West, Direction.South],[Direction.North, Direction.West]]).
    it('Turns Left And Faces Correct Direction',
    (initialDirection, expectedDirection) => {
        var rover = new Rover(initialDirection, new Coordinate());

        rover.turnLeft();

        expect(rover.direction).toBe(expectedDirection);
    }) 

    each([Direction.East, Direction.South, Direction.West, Direction.North]).
    it('Turns Left And Location Does Not Change',
    (initialDirection) => {
        var rover = new Rover(initialDirection, new Coordinate());
        var initialX = rover.location.X;
        var initialY = rover.location.Y;

        rover.turnLeft();

        expect(rover.location.X).toBe(initialX);
        expect(rover.location.Y).toBe(initialY);
    }) 
})