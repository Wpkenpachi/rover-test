const Coordinate = require("../src/Coordinate");
const Move = require("../src/Move");

test('should create a move command for all directions', () => {
    expect(new Move(new Coordinate(0, 0, 'N')).exec()).toEqual(new Coordinate(0, 1, 'N'))
    expect(new Move(new Coordinate(0, 0, 'N')).exec()).toEqual(new Coordinate(0, 1, 'N'))
    expect(new Move(new Coordinate(0, 0, 'E')).exec()).toEqual(new Coordinate(1, 0, 'E'))
    expect(new Move(new Coordinate(0, 1, 'S')).exec()).toEqual(new Coordinate(0, 0, 'S'))
    expect(new Move(new Coordinate(1, 0, 'W')).exec()).toEqual(new Coordinate(0, 0, 'W'))
});