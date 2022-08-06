const RunCommands = require('./application/RunCommands')
const SpinLeft = require('./domain/SpinLeft')
const SpinRight = require('./domain/SpinRight')
const Move = require('./domain/Move')
const Command = require("./domain/Command")

function main(filename) {
    Command.registerCommand('L', SpinLeft)
    Command.registerCommand('R', SpinRight)
    Command.registerCommand('M', Move)
    const runner = new RunCommands(filename)
    runner.run().forEach(rover => console.log(...rover))
}

module.exports = main