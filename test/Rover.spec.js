const Coordinate = require("../src/domain/Coordinate");
const Rover = require("../src/domain/Rover");
const SpinLeft = require("../src/domain/SpinLeft");
const SpinRight = require("../src/domain/SpinRight");
let grid = [5, 5]

test('should create a rover', () => {
    const coord = new Coordinate(0, 0, 'N', grid)
    new Rover(coord)
});

test('should create a rover with invalid input', () => {
    expect(() => new Rover(1)).toThrowError('Invalid coordinate input')
});

test('should create a rover and run commands', () => {
    const coord = new Coordinate(0, 0, 'N', grid)
    const rover = new Rover(coord)
    rover.runCommands([
        SpinRight,
        SpinRight
    ])
    expect(rover.coordinates).toEqual(new Coordinate(0, 0, 'S', grid))
});