const Coordinate = require("../src/Coordinate");
const SpinLeft = require("../src/SpinLeft");

test('should exec spin left for all directions', () => {
    console.log(new SpinLeft(new Coordinate(0, 0, 'N')).exec())
    expect(new SpinLeft(new Coordinate(0, 0, 'N')).exec()).toEqual(new Coordinate(0, 0, 'W'))
    expect(new SpinLeft(new Coordinate(0, 0, 'W')).exec()).toEqual(new Coordinate(0, 0, 'S'))
    expect(new SpinLeft(new Coordinate(0, 0, 'S')).exec()).toEqual(new Coordinate(0, 0, 'E'))
    expect(new SpinLeft(new Coordinate(0, 0, 'E')).exec()).toEqual(new Coordinate(0, 0, 'N'))
});