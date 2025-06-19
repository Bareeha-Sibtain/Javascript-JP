// ------------- Chapter 35-38 -------------------

// Task 1
document.writeln("<h3>Today's Date</h3>")
var today = new Date()
document.writeln(today+"<br>")


// Task 2
document.writeln("<h3>Full Name</h3>")
function fullname (f_name,l_name)
{
    document.writeln("Hello "+f_name+" "+l_name+"<br>")
}

var f_name = prompt("Enter your first name:")
var l_name = prompt("Enter your last name:")
fullname(f_name,l_name)


// Task 3
document.writeln("<h3>Adding 2 nos.</h3>")
function addition (no1,no2)
{
    var result = no1+no2
    return result
}

var no1 = +prompt("Enter first number:")
var no2 = +prompt("Enter second number:")
var ans = addition(no1,no2)
document.writeln("Addition: "+ans+"<br>")


// Task 4
document.writeln("<h3>Calculator</h3>")
var result
function Calculator (num1,num2,op)
{
    if (op == "+")
    {
        result = num1+num2
    }
    else if (op == "-")
    {
        result = num1-num2
    }
    else if (op == "*")
    {
        result = num1*num2
    }
    else if (op == "/")
    {
        result = num1/num2
    }
    else if (op == "%")
    {
        result = num1%num2
    }
    return result
}

var num1 = +prompt("Enter first number:")
var num2 = +prompt("Enter second number:")
var op = prompt("Enter operator (+,-,*,/,%):")
var r = Calculator(num1,num2,op)
document.writeln(num1+" "+op+" "+num2+" "+"="+" "+r)


// Task 5
document.writeln("<h3>Square of no.</h3>")
function Square(num)
{
    var sq = num*num
    return sq
}

var num = +prompt("Enter a number:")
var result = Square(num)
document.writeln("Square of "+num+" is: "+result+"<br>")


// Task 6
document.writeln("<h3>Factorial of no.</h3>")
function Factorial(num)
{
    var fact = 1
    for (var i=1; i<=num; i++)
    {
        fact = fact * i
    }

    return fact
}

var num = +prompt("Enter a number:")
var result = Factorial(num)
document.writeln("Factorial of "+num+" is: "+result+"<br>")


// Task 7
document.writeln("<h3>Counting</h3>")
function counting (start,end)
{
    for (var i=start; i<=end; i++)
    {
        document.writeln(i+"<br>")
    }
}

var start = +prompt("Enter starting num:")
var end = +prompt("Enter ending num:")
counting(start,end)


// Task 8
document.writeln("<h3>Hypotenuse of Right Angle Triangle</h3>")
function calculateHypotenuse(base,perp)
{
    function calculateSquare(value)
    {
        return value*value
    }

    var base_sq = calculateSquare(base)
    var perp_sq = calculateSquare(perp)
    var hyp = Math.sqrt(base_sq+perp_sq)
    
    return hyp
}

var base = +prompt("Enter base value:")
var perp = +prompt("Enter perpendicular value:")

var result = calculateHypotenuse(base,perp)
document.writeln("Hypotense of right angle triangle is: "+result.toFixed(3)+"<br>")


// Task 9 (i) - Arguments as Value
document.writeln("<h3>Area of Rectangle (i)</h3>")
function area_rectangle (width,height)
{
    var area = width*height
    return area
}

var result = area_rectangle(2.3,4)
document.writeln("Area of Rectangle: "+result+"<br>")


// Task 9 (ii) - Arguments as Variable
document.writeln("<h3>Area of Rectangle (ii)</h3>")
function area_rectangle (width,height)
{
    var area = width*height
    return area
}

var width = +prompt("Enter width of rectangle:")
var height = +prompt("Enter height of rectangle:")
var result = area_rectangle(width,height)
document.writeln("Area of Rectangle: "+result+"<br>")


// Task 10
document.writeln("<h3>Palindrome</h3>")
function Palindrome(word)
{
    var reversed = ""
    for (var i = word.length-1; i>=0; i--)
    {
        reversed = reversed + word.slice(i, i+1)
    }

    if (word === reversed)
    {
        document.writeln(word+" is a palindrome.")
    }
    else {
        document.writeln(word+" is not a Palindrome.")
    }
}

var word = prompt("Enter a word:")
word = word.toLowerCase()
Palindrome(word)


// Task 11
document.writeln("<h3>Capitalize each inital in sentence</h3>")
function titlecase (input)
{
    var words = input.toLowerCase().split(" ")
    var tc_words = []

    for (var i=0; i<words.length; i++)
    {
    var words_arr = words[i]
    var capitalized = words_arr.charAt(0).toUpperCase() + words_arr.slice(1)
    tc_words.push(capitalized)
    }
    var titlecase = tc_words.join(" ")
    document.writeln("Title Case: "+titlecase+"<br>")
}

var input = prompt("Enter a word/sentence:")
document.writeln("User Input: "+input+"<br>")
titlecase(input)


// Task 12
document.writeln("<h3>Find longest word in string</h3>")
function longest_word (str) 
{
    var long_arr = []
    var longest = ""
    var arr = str.toLowerCase().split(" ")
    for (i=0; i<arr.length; i++)
    {
        if (arr[i].length > longest.length)
        {
            longest = arr[i+1]
        }
    }

    document.writeln("Longest String: "+longest+"<br>")
}

var str = prompt("Enter a word/sentence:")
document.writeln("String: "+str+"<br>")
longest_word(str)


// Task 13
document.writeln("<h3>Occrences of letter in string</h3>")
function occurences(str,letter)
{
    var count = 0
    str = str.toLowerCase()
    letter = letter.toLowerCase()
    for (var i=0; i<str.length; i++)
    {
        if (str[i] === letter)
        {
            count = count+1
        }
    }

    document.writeln("Letter "+letter+" occured "+count+" times in the string. <br>")
}

var str = prompt("Enter a string:")
var letter = prompt("Enter the letter to check it's occurences:")
document.writeln("String: "+str+"<br>")
occurences(str,letter)


// Task 14
document.writeln("<h3>The Geometrizer</h3>")
function calcCircumference (radius)
{
    var coc = 2*Math.PI*radius
    document.writeln("The circumference is "+coc.toFixed(3)+"<br>")
}

function calcArea (radius)
{
    var aoc = Math.PI*(radius^2)
    document.writeln("The area is "+aoc.toFixed(3)+"<br>")
}

var radius = +prompt("Enter radius of circle:")
calcCircumference(radius)
calcArea(radius)