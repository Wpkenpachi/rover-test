const Coordinate = require("../src/domain/Coordinate");
const SpinRight = require("../src/domain/SpinRight");

test('should exec spin right for all directions', () => {
    expect(new SpinRight(new Coordinate(0, 0, 'N')).exec()).toEqual(new Coordinate(0, 0, 'E'))
    expect(new SpinRight(new Coordinate(0, 0, 'E')).exec()).toEqual(new Coordinate(0, 0, 'S'))
    expect(new SpinRight(new Coordinate(0, 0, 'S')).exec()).toEqual(new Coordinate(0, 0, 'W'))
    expect(new SpinRight(new Coordinate(0, 0, 'W')).exec()).toEqual(new Coordinate(0, 0, 'N'))
});

test('should create a spin right with invalid input', () => {
    expect(() => new SpinRight(1)).toThrowError('coordinates input must be instance of Coordinate')
});