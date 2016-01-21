"use strict";

var LETTERS_MAP = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
	NUMBERS_MAP = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];

/**
 * Shuffle (Encode or Decode) a char give a key position (int in a range [1, 26]) to shuffle 
 */

var ShuffleCharsHelper = {
	
	decode: function(encoded_string, key) {
	
		var decoded_letters = [];

		encoded_string = encoded_string.split('');
		encoded_string.forEach(function(letter_key) {
			var letter = letter_key;
			var index = LETTERS_MAP.indexOf(letter_key);
			if (index !== -1) {
				var code = NUMBERS_MAP[index] - key;
				if (code < 1) code = 26 + code;
				index = NUMBERS_MAP.indexOf(code);
				letter = LETTERS_MAP[index];
			}
			decoded_letters.push(letter); 
		});
		return decoded_letters.join('');
	},

	encode: function(string_to_encode, key) {

		var encoded_letters = [];
		string_to_encode = string_to_encode.split('');
		string_to_encode.forEach(function(letter_key) {
			var letter = letter_key;
			var index = LETTERS_MAP.indexOf(letter_key);
			if (index !== -1) {
				var code = NUMBERS_MAP[index] + key;
				if (code > 26) code -= 26;
				index = NUMBERS_MAP.indexOf(code);
				letter = LETTERS_MAP[index];
			}
			encoded_letters.push(letter); 
		});
		
		return encoded_letters.join('');
	},

	getKeyFromSum: function(num1, num2) {
		var key = num1 + num2 + '';
		key = key.split('');
		key = key[5] + key[4];
		return parseInt(key);
	}
};
