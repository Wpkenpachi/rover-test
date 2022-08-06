const fs = require('fs');
const main = require('../src/index')
const filepath = './cmd.txt';

test('should test file v1', () => {
    fs.writeFileSync(filepath, "2 2\n2 2 N\nMMMR")
    const response = main(filepath)
    expect(response[0]).toEqual([2 , 2, 'E'])
});

test('should test file v2', () => {
    fs.writeFileSync(filepath, "5 5\n1 2 N\nLM\n3 3 E\nMM")
    const response= main(filepath)
    expect(response[0]).toEqual([0, 2, 'W'])
    expect(response[1]).toEqual([5, 3, 'E'])
});

test('should test file v3', () => {
    fs.writeFileSync(filepath, "6 6\n1 2 N\n\n3 3 E\nMMRMMR")
    const response = main(filepath)
    expect(response[0]).toEqual([1, 2, 'N'])
    expect(response[1]).toEqual([5, 1, 'W'])
});

afterAll(() => {
    fs.unlinkSync(filepath)
});