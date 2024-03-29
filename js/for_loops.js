"use strict";
// Create a function named showMultiplicationTable that
// accepts a number and console.logs the multiplication
// table for that number (just multiply by the numbers
// 1 through 10)

function showMultiplicationTable(number) {
    for(var i = 1; i <= 10; i++) {
        console.log(i + " x " + number + " = " + (i*number));
    }
}

showMultiplicationTable(10);


// use a for loop and this snippet of code:
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
// to generate ten random numbers between 20 and 200 and
// output to the console whether each number is odd or even.

for(var a = 1; a <=10; a++) {
    var randomNumber = getRandomInt(20, 200);
    if (randomNumber % 2 === 0) {
        console.log("the " + randomNumber + " is even");
    } else {
        console.log("the " + randomNumber + " is odd");
    }
}

// Create a for loop that uses console.log to create
// the output shown below:
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

//the first for loop intializes the count 1 -9;
//in order to create a number with multiples of its own value we have to save each out put of the loop in a string.
// and  a loop inside of the first loop that is less then or equal to the first loops value
// each loop will be logged to the output and then console.log.


for(var b = 1; b <= 9; b++) {
    var output = " "
    for (var c = 1; c <= b; c++) {
        output += b;
    }
    console.log(output);
}


// Create a for loop that uses console.log to create
// the output shown below:
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

for(var d = 100; d >=0; d-=5) {
    console.log(d)
}






