const Command = require("./Command");
const Coordinate = require("./Coordinate");

class SpinLeft extends Command {
    #coordinates
    constructor(coordinates) {
        super()
        this.#coordinates = coordinates
    }

    exec() {
        const { x, y, direction } = this.#coordinates
        switch (direction) {
            case 'N':
                return new Coordinate(x, y, 'W')
            
            case 'W':
                return new Coordinate(x, y, 'S')

            case 'S':
                return new Coordinate(x, y, 'E')
        
            case 'E':
                return new Coordinate(x, y, 'N')
            
            default:
                return new Coordinate(x, y, direction)
        }
    }
}

module.exports = SpinLeft