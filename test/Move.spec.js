const Coordinate = require("../src/domain/Coordinate");
const Move = require("../src/domain/Move");

test('should create a move command for all directions', () => {
    expect(new Move(new Coordinate(0, 0, 'N')).exec()).toEqual(new Coordinate(0, 1, 'N'))
    expect(new Move(new Coordinate(0, 0, 'N')).exec()).toEqual(new Coordinate(0, 1, 'N'))
    expect(new Move(new Coordinate(0, 0, 'E')).exec()).toEqual(new Coordinate(1, 0, 'E'))
    expect(new Move(new Coordinate(0, 1, 'S')).exec()).toEqual(new Coordinate(0, 0, 'S'))
    expect(new Move(new Coordinate(1, 0, 'W')).exec()).toEqual(new Coordinate(0, 0, 'W'))
});

test('should create a move command with invalid input', () => {
    expect(() => new Move(1)).toThrowError('coordinates input must be instance of Coordinate')
});