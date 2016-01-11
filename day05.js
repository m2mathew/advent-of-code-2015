/*
 *  Advent of Code 2015
 *
 *	Day 5
 *
 */


function findNaughtyOrNice (str) {

	// var oneLine = str.split('\n');
	// var nice = 0;
	// var naughty = 0;

	// });

	var vowels = str.match( /[aeiou]{3,}/g );
	var doubles = str.match( /([a-z])\1/ );
	var notAllowed = str.match( /ab|cd|pq|xy/ );

	if ( (doubles != undefined && doubles.length > 0) ) {
		console.log(str);
	}
	else {
		console.log('Naughty');
	}

	console.log(vowels);

	if ( (vowels != undefined && vowels.length > 1) ) {
		console.log(str);
	}
	else {
		console.log('Naughty');
	}

	// if ( (vowels != undefined && vowels.length > 2) && (doubles != undefined && doubles.length > 0) && (notAllowed == undefined || notAllowed.length == 0) ) {
	// 	console.log(str);
	// }
	// else {
	// 	console.log('nope');
	// }
}

// taken from advent-of-code website
var input = 'urrvucyrzzzooxhx';



findNaughtyOrNice(input);

