"use strict";

var FibonacciHelper = {

	getNthFibonacciSeries : function (nth) {

	  if (nth < 1) throw "Position should be greater than zero"; 
	  
	  if (nth == 1) return [0];
	  
	  if (nth == 2) return [0, 1];

	  if (nth!==1) {
	    var s = this.getNthFibonacciSeries(nth - 1);
	    s.push(s[s.length - 1] + s[s.length - 2]);
	    return s;
	  }
	},

	getSumOfSeries: function(nth){
		var fib_series = this.getNthFibonacciSeries(nth), sum = 0; 
		fib_series.forEach(function(num){ sum += num; });
		return sum;		
	}
};