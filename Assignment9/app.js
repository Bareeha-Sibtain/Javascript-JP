// ------------- Chapter 38-42 -----------------

// Task 1
document.writeln("<h3>Power Function</h3>")
function Power(a,b)
{
    return a**b
}

var a = +prompt("Enter a:")
var b = +prompt("Enter b:")
var pow = Power(a,b)
document.writeln(a+"^"+b+"="+pow+"<br>")


// Task 2
document.writeln("<h3>Leap Year</h3>")
function leap_yr(yr)
{
    if ((yr % 4 === 0) && (yr % 100 !== 0) || (yr % 400 === 0))
    {
        alert(yr + " is a leap year")
    }
    else {
        alert(yr + " is not a leap year")
    }
}

var yr = +prompt("Enter a yr to check whether it's leap yr or not:")
leap_yr(yr)


// Task 3
document.writeln("<h3>Area of Triangle</h3>")
function aot (a,b,c)
{
    var s = calculateS(a,b,c)
    var area = s * (s-a) * (s-b) * (s-c)
    return area
}

function calculateS (a,b,c)
{
    return (a+b+c) / 2;
}

var a = +prompt("Enter value of a:")
var b = +prompt("Enter value of b:")
var c = +prompt("Enter value of c:")
var area = aot(a,b,c)
document.writeln("Area of Triangle = "+area+"<br>")


// Task 4
document.writeln("<h3>Marksheet</h3>")
function mainFunction (sub1,sub2,sub3,max)
{
    document.writeln("Subject 1: "+sub1+"<br>")
    document.writeln("Subject 2: "+sub2+"<br>")
    document.writeln("Subject 3: "+sub3+"<br>")
    var avg = calcAvg(sub1,sub2,sub3,max)
    var per = calcPercentage(sub1,sub2,sub3,max)
    document.writeln("Average: "+avg.toFixed(4)+"<br>")
    document.writeln("Percentage: "+per.toFixed(2)+"%<br>")
}

function calcAvg (sub1,sub2,sub3,max)
{
    return (sub1+sub2+sub3) / (max*3)
}

function calcPercentage (sub1,sub2,sub3,max)
{
    var a = calcAvg(sub1,sub2,sub3,max)
    return a*100
}

var max = 100
var sub1 = +prompt("Enter marks in subject 1:")
var sub2 = +prompt("Enter marks in subject 2:")
var sub3 = +prompt("Enter marks in subject 3:")
mainFunction(sub1,sub2,sub3,max)


// Task 5
document.writeln("<h3>Custom IndexOf</h3>")
function customIndexOf (str, char)
{
    for (var i=0; i<str.length; i++)
    {
        if (str[i] === char)
        {
            return i
        }
    }

    return -1
}

var str = prompt("Enter a string:")
var char = prompt("Enter a character to search")
var index = customIndexOf(str, char)

if (index !== -1)
{
    document.writeln("Character "+char+" found at index: "+index+"<br>")
}
else {
    document.writeln("Character not found. <br>")
}


// Task 6
document.writeln("<h3>Delete Vowels from Sentence</h3>")
function deleteVowels (sentence)
{
    var result = ""
    var vowels = "aeiouAEIOU"

    for (var i=0; i < sentence.length; i++)
    {
        if (!vowels.includes(sentence[i]))
        {
            result = result+sentence[i]
        }
    }

    return result
}

var input = prompt("Enter a sentence (max 25 chars):")
if (input.length <= 25)
{
    var output = deleteVowels(input)
    document.writeln("Sentence without vowels: "+output+"<br>")
}
else  {
    document.writeln("Input exceeds 25 characters.<br>")
}


// Task 7
document.writeln("<h3>Successive Vowels</h3>")
function countSuccessiveVowels (input)
{
    var count = 0
    for (var i=0; i<input.length - 1; i++)
    {
        var first = input[i].toLowerCase()
        var second = input[i+1].toLowerCase()

        switch (first)
        {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                switch (second)
                {
                     case 'a':
                    case 'e':
                    case 'i':
                    case 'o':
                    case 'u':
                        count++
                        break
                }
                break
        }
    }
    return count
}

var input = prompt("Enter a sentence:")
var result = countSuccessiveVowels(input)
document.writeln("Number of successive vowel pairs: "+result+"<br>")


// Task 8
document.writeln("<h3>Distance Conversion</h3>")
function meters (distance)
{
    return distance * 1000
}

function feet (distance)
{
    return distance * 3280.84
}

function inches (distance)
{
    return distance * 39370.1
}

function centimeters (distance)
{
    return distance * 100000
}

var distance = +prompt("Enter distance b/w two cities (in km):")
document.writeln("Distance in Kilometers: "+distance+" km <br>")
document.writeln("Distance in Meters: "+meters(distance)+" m <br>")
document.writeln("Distance in Feet: "+feet(distance)+" ft <br>")
document.writeln("Distance in Inches: "+inches(distance)+" in <br>")
document.writeln("Distance in Centimeters: "+centimeters(distance)+" cm <br>")


// Task 9
document.writeln("<h3>OverTime Pay</h3>")
function calcOvertimePay (hours)
{
    var overtimeRate = 12
    var stdHrs = 40

    if (hours > stdHrs)
    {
        var overtimeHrs = hours - stdHrs
        var overtimePay = overtimeHrs * overtimeRate
        return overtimePay
    }
    else {
        return 0
    }
}

var hours = +prompt("Enter total hours worked by employee:")
var pay = calcOvertimePay(hours)

if (pay > 0)
{
    document.writeln("Overtime pay is: Rs. "+pay+"<br>")
}
else {
    document.writeln("No Overtime worked. Overtime pay is: Rs. 0 <br>")
}


// Task 10
document.writeln("<h3>Currency Withdrawal</h3>")
var amount = +prompt("Enter amount to withdraw:")
var hundreds = Math.floor(amount/100)
var remaining = amount % 100
var fifties = Math.floor(remaining/50)
remaining = remaining % 50
var tens = Math.floor(remaining/10)
document.writeln("You will have "+hundreds+" hundred notes, "+fifties+" fifty notes, and "+tens+" ten notes. <br>")