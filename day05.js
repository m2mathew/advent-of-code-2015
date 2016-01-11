/*
 *  Advent of Code 2015
 *
 *	Day 5
 *
 */

var input = document.querySelector('pre').textContent.trim().split('\n');

function findNaughtyOrNice (str) {

	var nice = 0;
	var naughty = 0;

	str.forEach(function(oneString){
		var vowels = oneString.match( /[aeiou]/g );
		var doubles = oneString.match( /([a-z])\1/ );
		var notAllowed = oneString.match( /ab|cd|pq|xy/ );

		if ( (vowels != undefined && vowels.length > 2) && (doubles != undefined && doubles.length > 0) && (notAllowed == undefined || notAllowed.length == 0) ) {
			console.log(oneString + ' is NICE');
			nice++;
		}
		else {
			naughty++;
		}
	});

	console.log('Nice: ' + nice + '\nNaughty: ' + naughty);
}

findNaughtyOrNice(input);

// PART 1 - Nice: 238, Naughty: 762

// PART 2 -
