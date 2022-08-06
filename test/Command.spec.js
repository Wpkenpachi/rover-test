const Command = require("../src/Command");

test('should create a command', () => {
    expect(() => new Command()).toThrowError('Abstract Class cannot create instances')
});