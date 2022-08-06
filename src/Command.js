const Coordinate = require("./Coordinate");

class Command {
    constructor(coordinates) {
        if(!(coordinates instanceof Coordinate)) throw new Error('coordinates input must be instance of Coordinate')
        if(new.target === Command) throw new Error('Abstract Class cannot create instances')
    }
}

module.exports = Command