const fs = require('fs');
const path = require('path');

class FileHandler {
    #file
    #lines = []
    constructor(filepath) {
        const fileExists = fs.existsSync(path.resolve(process.cwd(), filepath))
        if (!fileExists) throw new Error('File does not exists')
        this.#file = fs.readFileSync(path.resolve(process.cwd(), filepath), 'utf-8')
        this.#lines = this.#file.split(/\n/)
    }

    getLines() {
        return this.#lines
    }
}

module.exports = FileHandler