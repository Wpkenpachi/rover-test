const Coordinate = require("../src/domain/Coordinate");

let grid = [5, 5]

test('should create a coordinate', () => {
    const coordinate = new Coordinate(0, 0, 'N', grid)
    expect(coordinate.x).toBe(0)
    expect(coordinate.y).toBe(0)
    expect(coordinate.direction).toBe('N')
});

test('should create a coordinate', () => {
    const coordinate = new Coordinate(0, 0, 'N', grid)
    expect(coordinate.x).toBe(0)
    expect(coordinate.y).toBe(0)
    expect(coordinate.direction).toBe('N')
});

test('should create a coordinate with invalid inputs', () => {
    expect(() => new Coordinate('1')).toThrowError('X must be an integer')
    expect(() => new Coordinate(1, 0.1)).toThrowError('Y must be an integer')
    expect(() => new Coordinate(0, 0, 'Y')).toThrowError('Direction must be a allowed string')
    expect(() => new Coordinate(0, 0, 'S')).toThrowError('Grid must be an array')
});

test('should create a coordinate with x and y overflowing the grid', () => {
    expect(() => new Coordinate(10, 0, 'S', grid)).toThrowError('X must be inside max grid range')
    expect(() => new Coordinate(-10, 0, 'S', grid)).toThrowError('X must be inside max grid range')
    expect(() => new Coordinate(0, 10, 'S', grid)).toThrowError('Y must be inside max grid range')
    expect(() => new Coordinate(0, -10, 'S', grid)).toThrowError('Y must be inside max grid range')
});