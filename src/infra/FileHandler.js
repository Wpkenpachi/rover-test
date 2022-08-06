const fs = require('fs');
const readline = require('readline');

class FileHandler {
    #file
    #lines = []
    constructor(filepath) {
        if (!fs.existsSync(filepath)) throw new Error('File does not exists')
        this.#file = fs.readFileSync(filepath, 'utf-8')
        this.#lines = this.#file.split(/\n/)
    }

    getLines() {
        return this.#lines
    }
}

module.exports = FileHandler