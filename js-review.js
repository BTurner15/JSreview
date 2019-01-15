// Bruce Turner, IT 328, Winter 2018
// Professor Tina Ostrander, Green River Community College
// January 14 2019
// file js-review.js
// 
var silent = true;  // for debugging
console.log("Introduction to JavaScript");
// credit where credit is due
//Twenty Ways to FizzBuzz: An exercise in Javascript
//https://www.reddit.com/r/javascript/comments/3j2zgz/twenty_ways_to_fizzbuzz_an_exercise_in_javascript/
//lachlanhunt

for (var i = 1; i <= 100; i++) {
    var n = (i % 3 === 0) ? "Fizz" : "";
    n +=    (i % 5 === 0) ? "Buzz" : "";
    console.log(n ? n : i); //OR console.log(n || i);
}

// for Step 3
console.log(countBs("BBBBBBBBa"));
//
// for step 5
console.log(countChar("kakkerlak", "k"));