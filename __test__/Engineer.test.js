const Engineer = require('../lib/Engineer');

// Test engineer role
test('getRole() return \'Engineer\'', () => {
    const testValue = 'Engineer';
    const e = new Engineer('test', 1, 'email@email.com', 'GitHubUser');
    expect(e.getRole()).toBe(testValue);
  });


// Test github

test('get GitHub username from getGithub()', () => {
    const testValue = 'GitHubUser';
    const e = new Engineer('test', 1, 'email@email.com', testValue);
    expect(e.getGithub()).toBe(testValue);
  });
