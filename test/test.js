var main = require('../index');
var assert = require('assert');
describe('Regular fibonacci value', function() {
    it('should return 5 for Fib(5)', function() {
        assert.strictEqual(main.fibonacci(5), 5);
      });
});

describe('First two terms', function() {
  it('should return 0 and 1 for first two terms', function() {
      assert.strictEqual(main.fibonacci(0), 0);
      assert.strictEqual(main.fibonacci(1), 1);
    });
});

describe('Negative Numbers', function() {
    it('should return undefined', function() {
        assert.strictEqual(main.factorial(-1), undefined);
    });
});

describe('Zero', function() {
    it('should return one', function() {
        assert.strictEqual(main.factorial(0), 1);
    });
});

describe('Regular Number', function() {
    it('should return 120', function() {
        assert.strictEqual(main.factorial(5), 120);
    });
});