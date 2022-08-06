const Coordinate = require("../src/domain/Coordinate");
const SpinLeft = require("../src/domain/SpinLeft");

test('should exec spin left for all directions', () => {
    expect(new SpinLeft(new Coordinate(0, 0, 'N')).exec()).toEqual(new Coordinate(0, 0, 'W'))
    expect(new SpinLeft(new Coordinate(0, 0, 'W')).exec()).toEqual(new Coordinate(0, 0, 'S'))
    expect(new SpinLeft(new Coordinate(0, 0, 'S')).exec()).toEqual(new Coordinate(0, 0, 'E'))
    expect(new SpinLeft(new Coordinate(0, 0, 'E')).exec()).toEqual(new Coordinate(0, 0, 'N'))
});

test('should create a spin left with invalid input', () => {
    expect(() => new SpinLeft(1)).toThrowError('coordinates input must be instance of Coordinate')
});