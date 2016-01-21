"use strict";

describe("PrimeNumberHelper", function() {

	describe("#isPrime",function() {	
  		
  		it("should confirm that 2 is a prime number", function() {
    		expect(PrimeNumberHelper.isPrime(2)).toBe(true);
  		});

  		it("should confirm that 1 is not a prime number", function() {
    		expect(PrimeNumberHelper.isPrime(1)).toBe(false);
  		});
	});

	describe("#getNthPrimeNumber",function() {	

		it("should return 2 as the first prime number", function() {
			expect(PrimeNumberHelper.getNthPrimeNumber(1)).toBe(2);
		});

		it("should return 3 as the second prime number", function() {
			expect(PrimeNumberHelper.getNthPrimeNumber(2)).toBe(3);
		});
	});
});