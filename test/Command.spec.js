const Command = require("../src/domain/Command");
const Coordinate = require("../src/domain/Coordinate");

let grid = [5, 5]

test('should create a command', () => {
    expect(() => new Command(new Coordinate(0, 0, 'S', grid))).toThrowError('Abstract Class cannot create instances')
});