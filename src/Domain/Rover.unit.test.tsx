import Direction from './Direction'
import Rover from './Rover'

describe('Rover Tests', function () {

    it('Has A Default Direction of North', () => {
        expect(new Rover().direction).toBe(Direction.North);
    })
    it('Has A Default Location of 00', () => {
        var rover = new Rover();

        expect(rover.location.X).toBe(0);
        expect(rover.location.Y).toBe(0);
    })
    it('Throws Exception When Only Passed One Argument', () => {
        expect(() => {
            new Rover(Direction.North)
        }).toThrow();
    })
    
})