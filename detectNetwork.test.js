/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';

let cases = function(begin, digits) {
      /* Generates an array of strings, representing all possible Maestro
    cases.  Not all card numbers, but all combinations of starts and lengths.
    */
    let beginnings = begin;
    let numLengths = digits;
  let output = [];
  for (let i = 0; i < beginnings.length; i++){
    let tempRay = [];
    for (let j = 0; j < numLengths.length; j++){
      let tempNum = beginnings[i].split("");
      let stop = numLengths[j];
      while (tempNum.length < stop){
        tempNum.push('1');
      }
      tempRay.push(tempNum.join(""));
    }
    output = output.concat(tempRay);
  }
  return output; 
}

let maestroCases = cases(['5018', '5020', '5038', '6304'], [12, 13, 14, 15, 16, 17, 18, 19]);
console.log(maestroCases);
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 
  /*
  it('Throws an error so it fails', function() {
    throw new Error('Delete me!');
  });
  */
  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num/2 === 0;
    }

    if(even(9) === true) {
      throw new Error('10 should be even!');
    }
  });
});

describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() { 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });
  // This has a length of 13.  Changing the test number.
  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
 
  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  var should = chai.should();
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  });
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  it('has a prefix of 6011 and a length of 16', function(){
    detectNetwork('6011123432123432').should.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function(){
    detectNetwork('6011567890123456789').should.equal('Discover');
  });
});


// generate an array with all cases of Maestro numbers



describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  // Maestro: 12-19, 50, 56–58, 6.
  // 
  
  it ('has a prefix of 50, 56-58, 6 and a length of 12-19', function(){
    for (let dummyIdx = 0; dummyIdx < maestroCases.length; dummyIdx++){
      detectNetwork(maestroCases[dummyIdx]).should.equal('Maestro');
    }
  })
});

//China Union Pay
describe('China UnionPay', function(){
  it('has a prefix of 62 and a length of 16-19', function(){
    detectNetwork('6211111111111111').should.equal('China UnionPay');
  })

// Switch 4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759, length : 16, 18, 19
let switchLengths = [16, 18, 19];
let switchPre = ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'];

let switchCases = cases(switchPre, switchLengths);
describe('Switch', function(){
  it ('has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, 19'), function(){
    for (let dummyIdx = 0; dummyIdx < switchCases.length; dummyIdx++){
    detectNetwork(switchCases[dummyIdx]).should.equal('Switch');
  }}
  });

});












