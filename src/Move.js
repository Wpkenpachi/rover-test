const Command = require("./Command");
const Coordinate = require("./Coordinate");

class Move extends Command {
    #coordinates
    constructor(coordinates) {
        super(coordinates)
        this.#coordinates = coordinates
    }

    exec() {
        const { x, y, direction } = this.#coordinates
        switch (direction) {
            case 'N':
                return new Coordinate(x, y + 1, direction)
            
            case 'E':
                return new Coordinate(x + 1, y, direction)

            case 'S':
                return new Coordinate(x, y - 1, direction)
        
            case 'W':
                return new Coordinate(x - 1, y, direction)
        }
    }
}

module.exports = Move