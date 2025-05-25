// --------- Chapter 09-11 ---------

// Task 1
var city = prompt("Enter city name: ")
if (city == "Karachi") {
    alert("Welcome to city of Lights")
}

// Task 2
var gender = prompt ("Enter gender" , "Male or Female")
if (gender == "Male") {
    document.write("Good Morning Sir <br>")
}
else if (gender == "Female <br>")
{
    document.write("Good Morning Ma'am <br>")
}

// Task 3
var color = prompt("Enter traffic light color")
if (color === "Red") {
    document.write("Must Stop <br>")
}
else if (color === "Yellow") {
    document.write("Ready to move <br>")
}
else if (color === "Green") {
    document.write("Move Now <br>")
}

// Task 4
var fuel = +prompt("Enter fuel remaining in car in litres")
if (fuel < 0.25) {
    document.write("Please refill the fuel in your car <br>")
}

// Task 5
// a
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
// Output: Message displayed

// b
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
// Output: Message not displayed

// c
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
// Output: Message displayed

// d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
// Output: Message displayed

// e
if (true){
alert("True");
}
if (false){
alert("False");
}
// Output: Message Displayed

// f
if("car" < "cat"){
alert("car is smaller than cat");
}
// Output: Message Displayed

// Task 6
var grade , remarks;
var obt1 = +prompt("Enter marks in Subject 1: ")
var obt2 = +prompt("Enter marks in Subject 2: ")
var obt3 = +prompt("Enter marks in Subject 3: ")
var totalMarks = +prompt("Enter max marks in each subject:")
var total_obt = obt1+obt2+obt3
var maxMarks = totalMarks*3
var percentage = (total_obt/maxMarks)*100

if (percentage >= 80) {
    grade = "A-1"
    remarks = "Excellent"    
}
else if (percentage >= 70) {
    grade = "A"
    remarks = "Good"
}
else if (percentage >= 60) {
     grade = "B"
    remarks = "You need to improve"   
}
else {
     grade = "Fail"
    remarks = "Sorry"
}
document.write("<br><br><h1>Marks Sheet</h1><br>")
document.write("Total Marks: "+ maxMarks +"<br>")
document.write("Marks Obtained: "+ total_obt +"<br>")
document.write("Percentage: "+ percentage +"%<br>")
document.write("Grade: "+ grade +"<br>")
document.write("Remarks: "+ remarks +"<br>")
document.write("<br>")

// Task 7
var sec_num = 7
var user_num = +prompt("Enter number b/w 1 to 10: ")
if (user_num === sec_num){
    document.write("Bingo! Correct answer. <br>")
}
else if (user_num+1 === sec_num) {
    document.write("Close enough to the correct answer. <br>")
}

// Task 8
var num = +prompt("Enter a number:")
if (num%3 == 0) {
    document.write(num + " is divisible by 3 <br>")
}
else {
    document.write(num + " is not divisible by 3 <br>")
}

// Task 9
var number = +prompt("Enter a number:")
if (number%2 == 0){
    document.write("<br>"+number+" is Even")
}
else {
    document.write("<br>"+number+" is Odd")
}

// Task 10
var temp = +prompt("Enter temperature:")
if (temp > 40) {
    document.write("<br>It is too hot outside.<br>")
}
else if (temp > 30) {
     document.write("<br>The weather today is Normal.<br>")
}
else if (temp > 20) {
    document.write("<br>Today's weaather is cool.<br>")
}
else if (temp >10) {
    document.write("<br>OMG! Today's weather is so Cool.<br>")
}

// Task 11
var num1 = +prompt("Enter first number:")
var num2 = +prompt("Enter second number:")
var opr = prompt("Enter operation to perform (+,-,*,/,%):")
if (opr == "+") {
    result = num1 + num2
    document.write("<br>"+ num1 + opr + num2 + " = " + result)
}
else if (opr == "-") {
    result = num1 - num2
    document.write("<br>"+ num1 + opr + num2 + " = " + result)
}
else if (opr == "*") {
    result = num1 * num2
    document.write("<br>"+ num1 + opr + num2 + " = " + result)
}
else if (opr == "/") {
    result = num1/num2
    document.write("<br>"+ num1 + opr + num2 + " = " + result)
}
else if (opr == "%") {
    result = num1%num2
    document.write("<br>"+ num1 + opr + num2 + " = " + result)
}
else {
    alert("Enter valid operator")
}


// ----------------- Chapter 12-13 ----------------------

// Task 1
var character = prompt("Enter a number or string:")
if (character.length !== 1) {
    alert("Please enter only one character")
}
else {
    var charCode = character.charCodeAt(0)
    if (charCode >= 48 && charCode <= 57) {
        alert("You entered a number.")
    }
    else if (charCode >= 65 && charCode <= 90) {
        alert("You entered an uppercase letter.")
    }
    else if (charCode >= 97 && charCode <= 122) {
        alert("You entered a lowercase letter.")
    }
    else {
        alert("You entered a special character or symbol.")
    }
}

// Task 2
var num_1 = +prompt("Enter first number:")
var num_2 = +prompt("Enter second number:")
if (num_1>num_2) {
    document.write("<br>"+num_1+" (number 1) is larger.")
}
else if (num_1<num_2) {
    document.write("<br>"+num_2+" (number 2) is larger.")
}
else if (num_1 === num_2) {
    document.write("<br>Both numbers are equal")
}

// Task 3
var inp_num = +prompt("Enter a number:")
if (inp_num > 0) {
    document.write("<br>The number is Positive.")
}
else if (inp_num < 0) {
    document.write("<br>The number is Negative.")
}
else if (inp_num === 0){
    document.write("<br>The number is 0.")
}

// Task 4
var input = prompt("Enter a character:")
if (input.length !== 1) {
    alert("Enter character of length 1.")
}
else if (input === "a" || input === "e" || input === "i" || input === "o" || input === "u"
    || input==="A" || input==="E" || input ==="I" || input==="O" || input==="U"){
    document.write("<br>True")
}
else {
    document.write("<br>False")
}

// Task 5
var password = "Javascript"
var user_pass = prompt("Enter your password:")
if (user_pass === "") {
    alert("Please enter your Password.")
}
else if (user_pass === password) {
    alert("Correct! The password you entered matches the original password.")
}
else {
    alert("Incorrect Password.")
}

// Task 6
var greeting;
var hour = 13;
if (hour < 18){
    greeting = "Good day"
}
else {
    greeting  = "Good evening"
}

// Task 7
var time = prompt("Enter time in 24-hour format (HHMM):" , "Like: 1900=7pm")
time = parseInt(time)
if (time >= 0 && time < 1200) {
    alert("Good morning!")
}
else if (time >= 1200 && time < 1700) {
    alert("Good afternoon!")
}
else if (time >= 1700 && time < 2100) {
    alert("Good evening!")
}
else if (time >= 2100 && time <= 2359) {
    alert("Good night!")
}