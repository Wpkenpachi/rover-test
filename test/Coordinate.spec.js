const Coordinate = require("../src/Coordinate");

test('should create a coordinate', () => {
    const coordinate = new Coordinate(0, 0, 'N')
    expect(coordinate.x).toBe(0)
    expect(coordinate.y).toBe(0)
    expect(coordinate.direction).toBe('N')
});

test('should create a coordinate with invalid inputs', () => {
    expect(() => new Coordinate('1')).toThrowError('X must be an integer')
    expect(() => new Coordinate(1, 0.1)).toThrowError('Y must be an integer')
    expect(() => new Coordinate(0, 0, 'Y')).toThrowError('Direction must be a allowed string')
});