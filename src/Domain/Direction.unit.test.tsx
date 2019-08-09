import Direction from './Direction';

describe('Direction Tests', function () {
    it('Has North Direction', () => {
        let direction = Direction.North;
        expect(direction).toBe("NORTH");
    })
    it('Has South Direction', () => {
        let direction = Direction.South;
        expect(direction).toBe("SOUTH");
    })
    it('Has West Direction', () => {
        let direction = Direction.West;
        expect(direction).toBe("WEST");
    })
    it('Has East Direction', () => {
        let direction = Direction.East;
        expect(direction).toBe("EAST");
    })
});
