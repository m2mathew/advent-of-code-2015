/*
 *  Advent of Code 2015
 *
 *	Day 5
 *
 */

var CryptoJS = require('crypto-js');

// iwrupvqb
var pw = "iwrupvqb";

var p = pw;
var hash = CryptoJS.MD5(p);

var i = 0;

while (hash.toString().substring(0, 6) != "000000") {
		p = pw + i;
		hash = CryptoJS.MD5(p);
		i++;
}

console.log(p);

console.log(hash.toString());

// 9958219
// 00000094434e1914548b3a1af245fb27

// Answer is 346386 for the first part - solved in 4.5s
// I did not understand the "hash" business, so the subreddit was HELPFUL

// Answer is 9958218 for the second part - solved in 137.4s
