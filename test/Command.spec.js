const Command = require("../src/Command");
const Coordinate = require("../src/Coordinate");

test('should create a command', () => {
    expect(() => new Command(new Coordinate(0, 0, 'S'))).toThrowError('Abstract Class cannot create instances')
});