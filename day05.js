/*
 *  Advent of Code 2015
 *
 *	Day 5
 *
 */


function findNaughtyOrNice (str) {

	// var oneLine = str.split('\n');
	// var vowels = ['a','e','i','o','u'];
	// var doubles = ['aa','bb','cc','dd','ee','ff','gg','hh','ii','jj','kk','ll','mm','nn','oo','pp','qq','rr','ss','tt','uu','vv','ww','xx','yy','zz'];
	// var notAllowed = ['ab','cd','pq','xy'];

	// var nice = 0;
	// var naughty = 0;

	// oneLine.forEach(function() {


	// });

	var vowels = str.match( /[aeiou]{3}/g );
	var doubles = str.match( /([a-z])\1/ );
	var notAllowed = str.match( /ab|cd|pq|xy/ );

	if ( (vowels != undefined && vowels.length > 2) && (doubles != undefined && doubles.length > 0) && (notAllowed == undefined || notAllowed.length > 0) ) {
		console.log(str);
	}
	else {
		console.log('nope');
	}
}

// taken from advent-of-code website
var input = 'aaa';



findNaughtyOrNice(input);

