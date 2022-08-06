const fs = require('fs');
const main = require('../src/index')
const filepath = './cmd.txt';

test('should test file v1', () => {
    fs.writeFileSync(filepath, "2 2\n2 2 N\nMMM")
    main(filepath)
});

test('should test file v2', () => {
    fs.writeFileSync(filepath, "5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM")
    main(filepath)
});

test('should test file v3', () => {
    fs.writeFileSync(filepath, "6 6\n1 2 N\n\n3 3 E\nMMRMMRMRRM")
    main(filepath)
});

afterAll(() => {
    fs.unlinkSync(filepath)
});