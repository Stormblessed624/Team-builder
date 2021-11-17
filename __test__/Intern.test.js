const { TestWatcher } = require('jest');
const Intern = require ('../lib/Intern');

// Test intern role
test ('getRole() return \'intern\'', () => {
    const testValue = "Intern";
    const i = new Intern('test', 1, 'email@email.com', 'BYU');
    expect(i.getRole()).toBe(testValue);
});
// Test school
test('Can get school from getSchool()', () => {
    const testValue = 'BYU';
    const i = new Intern('test', 1, 'email@email.com', testValue);
    expect(i.getSchool()).toBe(testValue);
})
