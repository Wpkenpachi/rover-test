const Command = require("../src/domain/Command");
const Coordinate = require("../src/domain/Coordinate");
const Move = require("../src/domain/Move");
const SpinLeft = require("../src/domain/SpinLeft");
const SpinRight = require("../src/domain/SpinRight");
const fs = require('fs');
const RunCommands = require("../src/application/RunCommands");
const filepath = './cmd2.txt';
let grid = [5, 5]

beforeAll(() => {
    fs.writeFileSync(filepath, "5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM");
    Command.registerCommand('L', SpinLeft)
    Command.registerCommand('R', SpinRight)
    Command.registerCommand('M', Move)
});

test('should run commands passing text file path', () => {
    const runner = new RunCommands(filepath)
    const rovers = runner.run()
    const rover0 = new Coordinate(1, 3, 'N', grid)
    const rover1 = new Coordinate(5, 1, 'E', grid)
    expect(rovers[0]).toEqual([rover0.x, rover0.y, rover0.direction])
    expect(rovers[1]).toEqual([rover1.x, rover1.y, rover1.direction])
});

afterAll(() => {
    fs.unlinkSync(filepath)
});