
/*
The Lifetime Supply Calculator
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
*/

var currentAge = 27;
var maximumAge = 94;
var amountPerDay = 5;
var calculateSupply=function(currentAge, amountPerday){
  var maximumAge= 94;
  var yearsremaininf=maximumAge-currentAge;
}
var yearsRemaining = maximumAge - currentAge;
var amountPerYear = amountPerDay * 365.25;

var totalRequired = yearsRemaining * amountPerYear;

console.log("You will need " + totalRequired + " to last you until the ripe old age of " + maximumAge);
