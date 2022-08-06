class Command {
    constructor() {
        if(new.target === Command) throw new Error('Abstract Class cannot create instances')
    }
}

module.exports = Command