/*
 *  Advent of Code 2015
 *
 *	Day 4
 *
 */

'use strict';

var CryptoJS = require('crypto-js/');

function findHashNumber(input) {

	var hash = input.toString(CryptoJS.enc.Hex);

	var x = 0;

	while(x < Number.MAX_VALUE) {

		x++;
		if( ((hash + x).substring(0,6)) === '00000') {
			break;
		}
	}

	console.log(x);


	// for(var i=0; i<Number.MAX_VALUE; i++){

	// 	if( (MD5(input + i.toString()).substring(0,6)) === '00000') {
	// 		console.log(i);
	// 	}
	// 	break;
	// }
}

findHashNumber('abcdef');
