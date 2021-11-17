const Manager = require ('../lib/Manager');
const Employee = require ('../lib/Employee');



// Test manager
test('get()return "Manager"', () => {
    const testValue = 'Manager';
    const m = new Manager('test', 1,'email@email.com', 50);
    expect(m.getRole()).toBe(testValue);
});


// Test office number
test('get office number from getOffice()', () => {
    const testValue = 50;
    const m = new Manager("test", 1, "email@email.com", testValue);
    expect(m.getOfficeNumber()).toBe(testValue);
  });
