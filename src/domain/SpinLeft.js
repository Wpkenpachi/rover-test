const Command = require("./Command");
const Coordinate = require("./Coordinate");

class SpinLeft extends Command {
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
                    return new Coordinate(x, y, 'W', this.#coordinates.grid)
                
                case 'W':
                    return new Coordinate(x, y, 'S', this.#coordinates.grid)
    
                case 'S':
                    return new Coordinate(x, y, 'E', this.#coordinates.grid)
            
                case 'E':
                    return new Coordinate(x, y, 'N', this.#coordinates.grid)
            }
        } catch (error) {
            return this.#coordinates
        }
    }
}

module.exports = SpinLeft