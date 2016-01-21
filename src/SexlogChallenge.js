"use strict";

(function SexlogChallenge() {
	
	var prime_number = PrimeNumberHelper.getNthPrimeNumber(10001);
	var url_step_2 = 'http://sexlog.com/prova_' + prime_number;
	document.querySelector('.prime-number').innerText = prime_number;
	
	var el_step_2 = document.querySelector('.step-2');
	el_step_2.href = url_step_2;
	el_step_2.innerText = url_step_2;
	
	var sum_of_fibonacci_series  = FibonacciHelper.getSumOfSeries(50);
	var url_step_3 = 'http://sexlog.com/prova_' + sum_of_fibonacci_series;
	document.querySelector('.fibonacci-sum').innerText = sum_of_fibonacci_series;

	var el_step_3 = document.querySelector('.step-3');
	el_step_3.href = url_step_3;
	el_step_3.innerText = url_step_3;

	var encoded_string = 'b3rdcigpi4pv0gp@htmadv.rdb';
	var key = ShuffleCharsHelper.getKeyFromSum(prime_number, sum_of_fibonacci_series);
	var decoded_string = ShuffleCharsHelper.decode(encoded_string, key);

	document.querySelector('.encoded-string').innerText = encoded_string;
	document.querySelector('.key').innerText = key;
	document.querySelector('.decoded-string').innerText = decoded_string;
	
})();



