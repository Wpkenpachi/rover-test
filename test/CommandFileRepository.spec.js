const CommandFileRepository = require("../src/infra/CommandFileRepository");

const fs = require('fs');
const filepath = './cmd1.txt';
beforeAll(() => {
    fs.writeFileSync(filepath, "5 5\n1 2 N\nLLL\n3 3 E\nRRR");
})

test('should create a command file repository', () => {
    const cmdRepository = new CommandFileRepository(filepath)
    expect(cmdRepository.getGridCoordinates()).toEqual([5, 5])
    expect(cmdRepository.getRoverPositions()).toEqual([[1, 2, 'N'], [3, 3, 'E']].sort())
    expect(cmdRepository.getRoverCommands()).toEqual([['L', 'L', 'L'], ['R', 'R', 'R']])
});

test('should create a command file repository with a non-existent file', () => {
    expect(() => new CommandFileRepository('./dslapodkakos.txt')).toThrowError('File does not exists')
});

afterAll(() => {
    fs.unlinkSync(filepath)
});