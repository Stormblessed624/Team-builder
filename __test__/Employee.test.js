const Employee = require('../lib/Employee');

// Test name
test('Can set name from constructor ', () => {
    const name = 'Jim';
    const e = new Employee(name);
    expect(e.name).toBe(name);
  });
// Test ID
test('Can set id via constructor argument', () => {
    const testValue = 50;
    const e = new Employee('test', testValue);
    expect(e.id).toBe(testValue);
  });
// Test email
test('Can set email via constructor argument', () => {
    const testValue = 'email@email.com';
    const e = new Employee('test', 1, testValue);
    expect(e.email).toBe(testValue);
  });
