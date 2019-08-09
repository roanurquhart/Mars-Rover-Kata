import Coordinate from './Location';

describe('Location Tests', function () {
    it('Can Be Initialized With No Arguments', () => {
        let location = new Coordinate();

        expect(location.X).toBe(0);
        expect(location.Y).toBe(0);
    })
    it('Can Take Arguments For Coordinates', () => {
        let location = new Coordinate(1, 2);

        expect(location.X).toBe(1);
        expect(location.Y).toBe(2);
    })
    it('Can Handle Undefined Values', () => {
        let location = new Coordinate(undefined, undefined);

        expect(location.X).toBe(0);
        expect(location.Y).toBe(0);
    })
    it('Throws Error When Passed Only One Argument', () => {
        expect(() => {
             new Coordinate(1)
            }).toThrowError('Only one argument was supplied');
    })
})