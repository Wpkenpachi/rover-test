const FileHandler = require("./FileHandler");

class CommandFileRepository extends FileHandler {
    constructor(filepath) {
        super(filepath)
    }

    getGridCoordinates() {
        const [gridLine] = this.getLines()
        return gridLine.split(' ').map(cmd => parseInt(cmd))
    }

    getRoverPositions() {
        const positions = []
        this.getLines().forEach((line, index) => {
            if(index !== 0 && index % 2 === 1) {
                const splittedPosition = line.trim().split(/\s+/)
                const parsedPosition = splittedPosition.map(position => {
                    if (isNaN(parseInt(position))) return position
                    return parseInt(position)
                })
                positions.push(parsedPosition)
            }
        })
        return positions
    }

    getRoverCommands() {
        const commands = []
        this.getLines().forEach((line, index) => {
            if(index !== 0 && index % 2 === 0) {
                const splittedCommand = line.split('')
                const parsedCommand = splittedCommand.map(cmd => {
                    if (!isNaN(parseInt(cmd))) return parseInt(cmd)
                    return cmd
                })
                commands.push(parsedCommand)
            }
        })
        return commands
    }
}

module.exports = CommandFileRepository