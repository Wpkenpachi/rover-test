const Coordinate = require("../src/Coordinate");
const Rover = require("../src/Rover");
const SpinLeft = require("../src/SpinLeft");
const SpinRight = require("../src/SpinRight");

test('should create a rover', () => {
    const coord = new Coordinate(0, 0, 'N')
    new Rover(coord)
});

test('should create a rover with invalid input', () => {
    expect(() => new Rover(1)).toThrowError('Invalid coordinate input')
});

test('should create a rover and run commands', () => {
    const coord = new Coordinate(0, 0, 'N')
    const rover = new Rover(coord)
    rover.runCommands([
        SpinRight,
        SpinRight
    ])
    expect(rover.coordinates).toEqual(new Coordinate(0, 0, 'S'))
});