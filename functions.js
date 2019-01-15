// Bruce Turner, IT 328, Winter 2019
// Professor Tina Ostrander, Green River Community College
// January 14 2019
// file functions.js
var person;
// 
// functions by alphabetical listing
//		countBs()
//      countChars()
//------------------------------------------------------------------------
//								countBs()
// Credit where due
// John Harding
// Writing a "Bean Counter" for Eloquent JavaScript Task
// https://stackoverflow.com/questions/30240528/writing-a-bean-counter-for-eloquent-javascript-task
// Answer number 5
function countBs(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === "B") {
            count++;

        }
    }
        return (count); // return outside of for loop
}


//------------------------------------------------------------------------
//                              countChar()
function countChar(str, char) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) { 
            // use the variable char instead of  the string "char"
            count++;
        }
    }
            return (count); // return outside of the for loop
}
//------------------------------------------------------------------------