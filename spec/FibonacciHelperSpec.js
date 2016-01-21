"use strict";

describe("FibonacciHelper", function() {

  describe("#getNthFibonacciSeries", function() {
    
    it("should return [0] as series if nth be 1", function() {
      expect(FibonacciHelper.getNthFibonacciSeries(1)).toEqual([0]);
    });

    it("should return [0, 1, 1] for first three fibonacci series", function() {
      expect(FibonacciHelper.getNthFibonacciSeries(3)).toEqual([0, 1, 1]);
    });

    it("should return first ten numbers of fibonacci series", function() {
      expect(FibonacciHelper.getNthFibonacciSeries(10)).toEqual([ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });

    it("should throws exception if nth less than zero", function() {
      expect(function() {
        FibonacciHelper.getNthFibonacciSeries(-1);
      })
      .toThrow('Position should be greater than zero');
    });

  });

  describe("#getSumOfSeries", function() {
  
    it("should return zero as total if is a sum of fibonnaci series with just first number", function() {
      expect(FibonacciHelper.getSumOfSeries(1)).toEqual(0);
    });
    
    it("should return 1 as total of sum of 2 first fibonacci series numbers", function() {
      expect(FibonacciHelper.getSumOfSeries(2)).toEqual(1);
    });

    it("should return 7 as total of sum of first five fibonacci numbers", function() {
      expect(FibonacciHelper.getSumOfSeries(5)).toEqual(7);
    });

  });

});
