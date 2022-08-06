const Command = require("../domain/Command");
const Coordinate = require("../domain/Coordinate");
const Rover = require("../domain/Rover");
const CommandFileRepository = require("../infra/CommandFileRepository");

class RunCommands {
    #filepath
    constructor(filepath) {
        this.#filepath = filepath
    }

    run() {
        const cmdRepository = new CommandFileRepository(this.#filepath)
        const grid = cmdRepository.getGridCoordinates()
        const positions = cmdRepository.getRoverPositions()
        const commands = cmdRepository.getRoverCommands()
        const rovers = positions.map((position, posIdx) => {
            const rover = new Rover(new Coordinate(position[0], position[1], position[2], grid))
            const cmds = commands[posIdx].map(cmd => Command.find(cmd))
            rover.runCommands(cmds)
            return rover
        })

        return rovers.map(rover => {
            const {x, y, direction} = rover.coordinates
            return [x, y, direction]
        })
    }
}

module.exports = RunCommands