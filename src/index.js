const RunCommands = require('./application/RunCommands')
const SpinLeft = require('./domain/SpinLeft')
const SpinRight = require('./domain/SpinRight')
const Move = require('./domain/Move')
const Command = require("./domain/Command")
const path = require('path')

if (process.argv.length === 3 && process.argv[2].match(/.*\.txt/)) {
    const [_, __, fileArg] = process.argv;
    try {
        const filepath = path.resolve(process.cwd(), fileArg)
        main(filepath)
    } catch (error) {
        throw error
    }
}

function main(filename) {
    Command.registerCommand('L', SpinLeft)
    Command.registerCommand('R', SpinRight)
    Command.registerCommand('M', Move)
    const runner = new RunCommands(filename)
    const response = runner.run()
    response.forEach(item => console.log(item.join(', ')))
    return response
}

module.exports = { main }