const Coordinate = require("./Coordinate");

class Command {
    static #storedCommands = []
    constructor(coordinates) {
        if(!(coordinates instanceof Coordinate)) throw new Error('coordinates input must be instance of Coordinate')
        if(new.target === Command) throw new Error('Abstract Class cannot create instances')
    }

    static registerCommand(cmd, reference) {
        Command.#storedCommands.push({
            id: cmd,
            ref: reference
        })
    }

    static find(cmdId) {
        const command = Command.#storedCommands.find(stdCmd => stdCmd.id === cmdId)
        return command.ref
    }
}

module.exports = Command