// ---------------- Chapter 17-20 -----------------------

// Task 1
var arr = [[1,2,3],
            [5,6,7],
            [8,9,10]]

// Task 2
var md_arr = [[0,1,2,3],
              [1,0,1,2],
              [2,1,0,1]]
document.writeln("<h3>Matrix</h3>")
document.writeln(md_arr[[0]]+"<br>")
document.writeln(md_arr[[1]]+"<br>")
document.writeln(md_arr[[2]]+"<br>")

// Task 3
document.writeln("<h3>Counting</h3>")
for (let i=1; i<=10 ; i++)
{
    document.writeln(i+"<br>")
}

// Task 4
document.writeln("<h3>Multiplication Table</h3>")
var num = +prompt("Enter a number to show its multiplication table:")
var len = +prompt("Enter length of multiplication table:")
document.writeln("<b>Multiplication table of "+num+"<br> Length "+len+"</b><br>")
for (let i=1 ; i<=len ; i++)
{
    var result = num * i
    document.writeln(num + " x " + i + " = " + result + "<br>")
}

// Task 5
document.writeln("<h3>Fruits</h3>")
var fruits = ["apple", "banana", "mango", "orange","strawberry"]
for (let i=0 ; i<fruits.length ; i++)
{
    document.writeln(fruits[i]+"<br>")
}
document.writeln("<br>")
var l = fruits.length
for (let x=0 ; x<l ; x++)
{
    document.writeln("Element at index "+x+" is "+fruits[x]+"<br>")
}

// Task 6
document.writeln("<h3>Series Generation</h3>")
// a
document.writeln("<b>Counting: </b>")
for (let i=1; i<=15 ; i++)
{
    document.writeln(i+", ")
}
// b
document.writeln("<br><b>Reverse Counting: </b>")
for (let i=10; i>=1 ; i--)
{
    document.writeln(i+", ")
}
// c
document.writeln("<br><b>Even: </b>")
for (let i=0; i<=20 ; i++)
{
    if (i%2==0)
    {
        document.writeln(i+", ")
    }
}
// d
document.writeln("<br><b>Odd: </b>")
for (let i=0; i<=20 ; i++)
{
    if (i%2!==0)
    {
        document.writeln(i+", ")
    }
}
// e
document.writeln("<br><b>Series: </b>")
for (let i=1; i<=20 ; i++)
{
    if (i%2==0)
    {
        document.writeln(i+"k, ")
    }
}

// Task 7
document.writeln("<h3>Search by User input</h3>")
var a = ["cake", "apple pie", "cookie", "chips", "patties"]
var input = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")
for (let i=0 ; i<a.length ; i++ )
{
    if (a.includes(input))
    {
        var availability = "available"
        document.writeln(input+" is <b>available</b> at index "+i+" in our bakery.<br>")
        break;
    }
    else {
        document.writeln("We are sorry. "+input+" is <b>not available</b> in our bakery.<br>")
        break;
    }
}

// Task 8
document.writeln("<h3>Identify largest No.</h3>")
var A = [24, 53, 78, 91, 12]
document.writeln("<b>Array items: </b>"+A+"<br>")
var largest = A[0]
for (let i=0 ; i<A.length ; i++)
{
    if (A[i] > largest)
    {
        largest = A[i]
    }
}
document.writeln("<b>The smallest number is </b>"+largest+"<br>")

// Task 9
document.writeln("<h3>Identify smallest No.</h3>")
var arr_A = [24, 53, 78, 91, 12]
document.writeln("<b>Array items: </b>"+arr_A+"<br>")
var smallest = arr_A[0]
for (let i=0 ; i<arr_A.length ; i++)
{
    if (arr_A[i] < smallest)
    {
        smallest = arr_A[i]
    }
}
document.writeln("<b>The smallest number is </b>"+smallest+"<br>")

// Task 10
document.writeln("<h3>Multiples of 5</h3>")
var multiples_5 = []
for (let i=1 ; i<=100 ; i++)
{
    if (i%5==0)
    {
        multiples_5.push(i)
    }
}
document.writeln(multiples_5)
