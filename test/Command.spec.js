const Command = require("../src/domain/Command");
const Coordinate = require("../src/domain/Coordinate");

test('should create a command', () => {
    expect(() => new Command(new Coordinate(0, 0, 'S'))).toThrowError('Abstract Class cannot create instances')
});