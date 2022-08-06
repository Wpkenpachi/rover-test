const Command = require("./Command");
const Coordinate = require("./Coordinate");

class Move extends Command {
    #coordinates
    constructor(coordinates) {
        super(coordinates)
        this.#coordinates = coordinates
    }

    exec() {
        try {
            const { x, y, direction } = this.#coordinates
            switch (direction) {
                case 'N':
                    return new Coordinate(x, y + 1, direction, this.#coordinates.grid)
                
                case 'E':
                    return new Coordinate(x + 1, y, direction, this.#coordinates.grid)
    
                case 'S':
                    return new Coordinate(x, y - 1, direction, this.#coordinates.grid)
            
                case 'W':
                    return new Coordinate(x - 1, y, direction, this.#coordinates.grid)
            }
        } catch (error) {
            return this.#coordinates
        }
    }
}

module.exports = Move