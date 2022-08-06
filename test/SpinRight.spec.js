const Coordinate = require("../src/domain/Coordinate");
const SpinRight = require("../src/domain/SpinRight");
let grid = [5, 5]
test('should exec spin right for all directions', () => {
    expect(new SpinRight(new Coordinate(0, 0, 'N', grid)).exec()).toEqual(new Coordinate(0, 0, 'E', grid))
    expect(new SpinRight(new Coordinate(0, 0, 'E', grid)).exec()).toEqual(new Coordinate(0, 0, 'S', grid))
    expect(new SpinRight(new Coordinate(0, 0, 'S', grid)).exec()).toEqual(new Coordinate(0, 0, 'W', grid))
    expect(new SpinRight(new Coordinate(0, 0, 'W', grid)).exec()).toEqual(new Coordinate(0, 0, 'N', grid))
});

test('should create a spin right with invalid input', () => {
    expect(() => new SpinRight(1)).toThrowError('coordinates input must be instance of Coordinate')
});