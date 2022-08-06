const Coordinate = require("../src/domain/Coordinate");
const SpinLeft = require("../src/domain/SpinLeft");
let grid = [5, 5]
test('should exec spin left for all directions', () => {
    expect(new SpinLeft(new Coordinate(0, 0, 'N', grid)).exec()).toEqual(new Coordinate(0, 0, 'W', grid))
    expect(new SpinLeft(new Coordinate(0, 0, 'W', grid)).exec()).toEqual(new Coordinate(0, 0, 'S', grid))
    expect(new SpinLeft(new Coordinate(0, 0, 'S', grid)).exec()).toEqual(new Coordinate(0, 0, 'E', grid))
    expect(new SpinLeft(new Coordinate(0, 0, 'E', grid)).exec()).toEqual(new Coordinate(0, 0, 'N', grid))
});

test('should create a spin left with invalid input', () => {
    expect(() => new SpinLeft(1)).toThrowError('coordinates input must be instance of Coordinate')
});