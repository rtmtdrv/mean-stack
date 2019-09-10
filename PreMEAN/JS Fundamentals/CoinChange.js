// Coin Change
// Objectives:
// Write a function that creates and returns an object.
// Given a number of US cents, return the optimal configuration (meaning the largest denominations possible) of coins in an object. Use dollars, quarters, dimes, nickels, and pennies.

// Example: coinChange(312) returns {dollars: 3, dimes: 1, pennies: 2}
// Example: coinChange(78) returns {quarters: 3, pennies: 3}

function coinChange(cents){
    var dollars = 0;
    var quarters = 0;
    var dimes = 0;
    var nickels = 0;
    var pennies = 0;
    pennies = cents % 100;
    dollars = (cents - pennies)/100;
    temp = pennies;
    pennies = pennies % 25;
    quarters = (temp - pennies)/25;
    temp = pennies;
    pennies = pennies % 10;
    dimes = (temp - pennies)/10;
    temp = pennies;
    pennies = pennies % 5;
    nickels = (temp - pennies)/5;
    console.log("Dollars: "+dollars);
    console.log("Quarters: "+quarters);
    console.log("Dimes: "+dimes);
    console.log("Nickels: "+nickels);
    console.log("Pennies: "+pennies);
}

coinChange(312);

"Dollars: 3"
"Quarters: 0"
"Dimes: 1"
"Nickels: 0"
"Pennies: 2"


function coinChange(cents){
    var obj = {
    dollars : '',
    quarters : '',
    dimes : '',
    nickels : '',
    pennies : ''
    }
    pennies = cents % 100;
    dollars = (cents - pennies)/100;
    temp = pennies;
    pennies = pennies % 25;
    quarters = (temp - pennies)/25;
    temp = pennies;
    pennies = pennies % 10;
    dimes = (temp - pennies)/10;
    temp = pennies;
    pennies = pennies % 5;
    nickels = (temp - pennies)/5;
    obj.dollars = dollars;
    obj.quarters = quarters;
    obj.dimes = dimes;
    obj.nickels = nickels;
    obj.pennies = pennies;
    console.log(obj);
}

coinChange(312);

[object Object] {
    dimes: 1,
    dollars: 3,
    nickels: 0,
    pennies: 2,
    quarters: 0
  }

coinChange(78);

[object Object] {
    dimes: 0,
    dollars: 0,
    nickels: 0,
    pennies: 3,
    quarters: 3
  }
