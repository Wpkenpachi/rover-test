const fs = require('fs');
const {main} = require('../src/index')

/* v1
2 2
2 2 N
MMMR
*/
test('should test file v1', () => {
    const filepath = `${process.cwd()}/${Math.floor(Math.random() * 1000)}_e2e.txt`
    fs.writeFileSync(filepath, "2 2\n2 2 N\nMMMR")
    const response = main(filepath)
    expect(response[0]).toEqual([2 , 2, 'E'])
    fs.unlinkSync(filepath)
});

/* v2
5 5
1 2 N
LM
3 3 E
MM
*/
test('should test file v2', () => {
    const filepath = `${process.cwd()}/${Math.floor(Math.random() * 1000)}_e2e.txt`
    fs.writeFileSync(filepath, "5 5\n1 2 N\nLM\n3 3 E\nMM")
    const response= main(filepath)
    expect(response[0]).toEqual([0, 2, 'W'])
    expect(response[1]).toEqual([5, 3, 'E'])
    fs.unlinkSync(filepath)
});

/* v3
6 6
1 2 N

3 3 E
MMRMMR
*/
test('should test file v3', () => {
    const filepath = `${process.cwd()}/${Math.floor(Math.random() * 1000)}_e2e.txt`
    fs.writeFileSync(filepath, "6 6\n1 2 N\n\n3 3 E\nMMRMMR")
    const response = main(filepath)
    expect(response[0]).toEqual([1, 2, 'N'])
    expect(response[1]).toEqual([5, 1, 'W'])
    fs.unlinkSync(filepath)
});