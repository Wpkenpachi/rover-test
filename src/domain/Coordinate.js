class Coordinate {
    #allowdDirections = ['N', 'S', 'W', 'E']
    grid
    x
    y
    direction

    constructor(x, y, direction, grid) {
        if(typeof x !== 'number' || !Number.isInteger(x)) throw new Error('X must be an integer')
        if(typeof y !== 'number' || !Number.isInteger(y)) throw new Error('Y must be an integer')
        if(typeof direction !== 'string' || !this.#allowdDirections.includes(direction)) throw new Error('Direction must be a allowed string')
        if(typeof grid !== 'object' || grid.length !== 2) throw new Error('Grid must be an array of 2 integers')
        this.x = x
        this.y = y
        this.direction = direction
        this.grid = grid
        this.#isValidCoordinate()
    }

    #isValidCoordinate() {
        if(this.x > this.grid[0] || this.x < 0) throw new Error('X must be inside max grid range')
        if(this.y > this.grid[1] || this.y < 0) throw new Error('Y must be inside max grid range')
    }
}

module.exports = Coordinate