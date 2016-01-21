"use strict";

var PrimeNumberHelper = {

	isPrime : function(number) {

		if (number < 2) return false;
		
		var sqrt = Math.floor(Math.sqrt(number));
	    
	    for (var i = 2; i <= sqrt; i++) {
	        if (number % i == 0) return false;
	    }
	    return true;
	},

	getNthPrimeNumber : function (nth) {
		
		var number = 2;
		var prime_numbers = [];
		var last_prime_number = null;

		while(prime_numbers.length < nth) {
			
			if (this.isPrime(number)) {
				prime_numbers.push(number);
				last_prime_number = number
			}
			number++;
		}
		return last_prime_number;
	}
};