class Coordinate {
    #allowdDirections = ['N', 'S', 'W', 'E']
    x
    y
    direction

    constructor(x, y, direction) {
        if(typeof x !== 'number' || !Number.isInteger(x)) throw new Error('X must be an integer')
        if(typeof y !== 'number' || !Number.isInteger(y)) throw new Error('Y must be an integer')
        if(typeof direction !== 'string' || !this.#allowdDirections.includes(direction)) throw new Error('Direction must be a allowed string')
        this.x = x
        this.y = y
        this.direction = direction
    }
}

module.exports = Coordinate