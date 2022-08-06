const Coordinate = require("../src/domain/Coordinate");
const Move = require("../src/domain/Move");
let grid = [5, 5]

test('should create a move command for all directions', () => {
    expect(new Move(new Coordinate(0, 0, 'N', grid)).exec()).toEqual(new Coordinate(0, 1, 'N', grid))
    expect(new Move(new Coordinate(0, 0, 'N', grid)).exec()).toEqual(new Coordinate(0, 1, 'N', grid))
    expect(new Move(new Coordinate(0, 0, 'E', grid)).exec()).toEqual(new Coordinate(1, 0, 'E', grid))
    expect(new Move(new Coordinate(0, 1, 'S', grid)).exec()).toEqual(new Coordinate(0, 0, 'S', grid))
    expect(new Move(new Coordinate(1, 0, 'W', grid)).exec()).toEqual(new Coordinate(0, 0, 'W', grid))
});

test('should create a move command with invalid input', () => {
    expect(() => new Move(1)).toThrowError('coordinates input must be instance of Coordinate')
});