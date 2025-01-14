 const todoService = require("./todo.service")

test('adds 1 + 2 to equal 3', () => {
    expect(todoService.sum(1, 2)).toBe(3);
});