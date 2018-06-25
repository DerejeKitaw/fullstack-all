const sum = require('../src/sum');
const { expect } = require('chai');

describe('sum', function() {
  it('takes two numbers and returns the sum', function() {
    const mySum = sum(3, 4);
    expect(mySum).to.equal(7);
  })

  it('throws and error if the arguments are not both numbes', () => {
    expect(() => sum('1', 1)).to.throw();
  })
})
