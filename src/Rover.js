const Coordinate = require("./Coordinate")

class Rover {
    #coordinate
    constructor(coordinate) {
        if(!(coordinate instanceof Coordinate)) throw new Error('Invalid coordinate input')
        this.#coordinate = coordinate
    }

    runCommands(commands) {
        commands.forEach(action => {
            this.#coordinate = new action(this.#coordinate).exec()
        })
    }

    get coordinates() { return this.#coordinate }
}

module.exports = Rover