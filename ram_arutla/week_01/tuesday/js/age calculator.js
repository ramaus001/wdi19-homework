/*
The Age Calculator

Forgot how old someone is? Calculate it!

Store the current year in a variable. Store their birth year in a variable. Calculate their 2 possible ages based on the stored values. Output them to the screen like so: "They are either NN or NN", substituting the values.
*/

var currentYear = 2016;
var birthYear = 1970;

var ageAfterBirthday = currentYear - birthYear;
var ageBeforeBirthday = ageAfterBirthday - 1;

console.log("They are either " + ageBeforeBirthday + ' or ' + ageAfterBirthday);
