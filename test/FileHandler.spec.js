const fs = require('fs');
const FileHandler = require("../src/infra/FileHandler");
const filepath = './cmd.txt';

beforeAll(() => {
    fs.writeFileSync(filepath, "5 5\n1 2 N\nLLL\n3 3 E\nRRR");
})

test('should create a filehander', () => {
    const filehandler = new FileHandler(filepath)
    expect(filehandler.getLines()).toHaveLength(5)
})

test('should create a filehandler with a non-existent file', () => {
    expect(() => new FileHandler('./dlsapkdsaldpsldad.txt')).toThrowError('File does not exists')
});

afterAll(() => {
    fs.unlinkSync(filepath)
});