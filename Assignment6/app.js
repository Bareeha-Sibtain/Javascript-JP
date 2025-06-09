// ----------- Chapter 26-30 ----------------

// Task 1
document.writeln("<h3>Math methods on Positive No.</h3>")

var num = +prompt("Enter a number")
if (num<=0)
{
    alert("Please enter a valid positive number")
}
else {
    document.writeln("number: "+num+"<br>")
    document.writeln("round off value: "+Math.round(num)+"<br>")
    document.writeln("floor value: "+Math.floor(num)+"<br>")
    document.writeln("ceil value: "+Math.ceil(num)+"<br>")
}

// Task 2
document.writeln("<h3>Math methods on Negative No.</h3>")

var num = +prompt("Enter a number")
if (num>=0)
{
    alert("Please enter a valid negative number")
}
else {
    document.writeln("number: "+num+"<br>")
    document.writeln("round off value: "+Math.round(num)+"<br>")
    document.writeln("floor value: "+Math.floor(num)+"<br>")
    document.writeln("ceil value: "+Math.ceil(num)+"<br>")
}

// Task 3
document.writeln("<h3>Absolute value of No.</h3>")

var number = +prompt("Enter a number")
document.writeln("The absolute value of "+number+" is "+Math.abs(number)+"<br>")

// Task 4
document.writeln("<h3>Dice Simulation</h3>")

var n = +prompt("Enter the number of times to roll dice:")
for (var i=1 ; i<=n ; i++)
{
    var big_val = Math.random()
    var dice_val = (big_val * 6) + 1
    var diceRoll = Math.floor(dice_val)
    document.writeln("random dice value: "+diceRoll+"<br>")
}

// Task 5
document.writeln("<h3>Coin Simulation</h3>")

var n = +prompt("Enter the number of times to toss a coin:")
for (var i=1 ; i<=n ; i++)
{
    var big_val = Math.random()
    var coin_val = (big_val * 2) + 1
    var coinToss = Math.floor(coin_val)
    document.writeln(coinToss+"<br>")
    if (coinToss===1)
    {
        document.writeln("random coin value: Tails<br>")
    }
    else if (coinToss===2){
        document.writeln("random coin value: Heads<br>")
    } 
}

// Task 6
document.writeln("<h3>Random No. b/w 1 & 100</h3>")

var n = +prompt("Enter the number of times to generate random no.:")
for (var i=1 ; i<=n ; i++)
{
    var big_val = Math.random()
    var ran_val = (big_val * 100) + 1
    var value = Math.floor(ran_val)
    document.writeln("random number between 1 and 100: "+value+"<br>")
}

// Task 7
var input = prompt("Enter your weight in kilograms:")
var weight  = parseFloat(input)
document.writeln("The weight of user is "+weight+" kilograms<br>")

// Task 8
document.writeln("<h3>User guesses Random No. b/w 1 & 10</h3>")

var big_val = Math.random()
var ran_num = (big_val * 10) + 1
var secretNumber = Math.floor(ran_num)

var user_guess = +prompt("Guess the number:")

if (user_guess === secretNumber)
{
    alert("Congratulations! You guessed the right number")
}
else {
    alert("Try Again! The secret number was "+secretNumber)
}