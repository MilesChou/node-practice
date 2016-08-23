'use strict';

var assert = require('assert');
var Algorithm = require('..');

describe('Combination', function() {
  var combination = new Algorithm.Combination();

  describe('#run()', function() {
    it('should return 1 element array and result is a, b, c, d when input a, b, c, d and select 4 elements', function() {
      // Arrange
      var set = ['a', 'b', 'c', 'd'];
      var selection = 4;
      var exceptedLength = 1;
      var exceptedElement = 'a,b,c,d';

      // Act
      var actual = combination.run(set, selection);

      // Assert
      assert.equal(exceptedLength, actual.length);
      assert.equal(exceptedElement, actual.pop());
    });
  });
});

describe('Operator', function() {
  var operator = new Algorithm.Operator();

  describe('#add()', function() {
    it('should return 4 when input 1 and 3', function() {
      assert.equal(4, operator.add(1, 3));
    });
  });

  describe('#sub()', function() {
    it('should return 4 when input 7 and 3', function() {
      assert.equal(4, operator.sub(7, 3));
    });
  });

  describe('#mux()', function() {
    it('should return 4 when input 1 and 4', function() {
      assert.equal(4, operator.mux(1, 4));
    });
  });

  describe('#div()', function() {
    it('should return 4 when input 12 and 3', function() {
      assert.equal(4, operator.div(12, 3));
    });
  });
});
