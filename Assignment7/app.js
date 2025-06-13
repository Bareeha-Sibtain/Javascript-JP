//------------------- Chapter 31-34 ----------------------

// Task 1
document.writeln("<h3>Current Date & Time</h3>")
var today = new Date()
document.writeln(today+"<br>")


// Task 2
document.writeln("<h3>Current Month in Words</h3>")
var m = new Date()
var arr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"
    , "November", "December"]
console.log(m);
var month = m.getMonth();
document.writeln("Current Month: "+arr[month]+"<br>");


// Task 3
document.writeln("<h3>Current Day in Words</h3>")
var d = new Date()
var arr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
console.log(d);
var day = d.getDay();
document.writeln("Today is "+arr[day]+"<br>");


// Task 4
document.writeln("<h3>Fun Day or no</h3>")
var d = new Date()
var arr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
console.log(d);
var day = d.getDay();
var day_today = arr[day]
if (day_today === arr[0] || day_today === arr[6])
{
    document.writeln("It's Fun Day <br>")
}
else {
    document.writeln(arr[day]+"<br>")
}


// Task 5
document.writeln("<h3>Date less then 16th of month</h3>")
var currentDate = new Date()
var dayofMonth = currentDate.getDate()
if (dayofMonth < 16)
{
    document.writeln("First fifteen days of the month <br>")
}
else {
    document.writeln("Last days of the month <br>")
}


// Task 6
document.writeln("<h3>Mins since midnight Jan 1,1970</h3>")
var today = new Date()
document.writeln("Current Date: "+today+"<br>")
var ms = today.getTime()
document.writeln("Elapsed milliseconds since January 1,1970: "+ms+"<br>")
var mins = today.getTime()/(1000*60)
document.writeln("Elapsed minutes since January 1,1970: "+mins+"<br>")


// Task 7
document.writeln("<h3>AM or PM</h3>")
var today = new Date()
var time = today.getHours()
if (time<12){
    document.writeln("It's AM <br>")
}
else
{
    document.writeln("It's PM <br>")
}


// Task 8
document.writeln("<h3>Specific Date Object</h3>")
var laterDate = new Date("December 31,2020")
document.writeln("Later date: "+laterDate+"<br>")


// Task 9
document.writeln("<h3>Days past since Ramadan</h3>")
var lastRmd = new Date("June 18,2015")
var today = new Date()
var lr_time = lastRmd.getTime()
var tt = today.getTime()
// document.writeln("last ramadan: "+lastRmd+"<br>");
// document.writeln("today date: "+today+"<br>");
// document.writeln("LR Time: "+lr_time+"<br>");
// document.writeln("today Time: "+tt+"<br>");
var time_past = tt - lr_time
// document.writeln("past Time: "+time_past+"<br>");
var daysPassed = time_past/(1000*60*60*24)
document.writeln(Math.round(daysPassed)+" days have passed since 1st Ramadan,2015 <br>")


// Task 10
document.writeln("<h3>Seconds elapsed b/w ref Date & beginning of 2015</h3>")
var refDate = new Date("December 5,2015 22:50:16")
// document.writeln(refDate+"<br>")
var beginning2015 = new Date("January 1,2015 00:00:00")
// document.writeln(beginning2015+"<br>")
var diffinMS = refDate - beginning2015
var seconds = diffinMS/1000
document.writeln("On reference date "+refDate+", "+seconds+" seconds had passed since beginning of 2015 <br>")


// Task 11
document.writeln("<h3>Time 1hr ahead</h3>")
var currDate = new Date()
var hrAgo = new Date(currDate)
hrAgo.setHours(hrAgo.getHours()-1)
document.writeln("Current Date: "+currDate+"<br>"+"1 hour ago, it was "+hrAgo+"<br>")


// Task 12
document.writeln("<h3>Date 100 yrs back</h3>")
document.writeln("alert box <br>")
var currentDate = new Date()
var yrsBack = new Date(currDate)
yrsBack.setFullYear(yrsBack.getFullYear()-100)
alert("Current Date: "+currentDate+" 100 years back, it was "+yrsBack+"<br>")


// Task 13
document.writeln("<h3>Birth Yr Calculator using User Input</h3>");
var today = new Date().getFullYear()
var age = prompt ("Enter your age")
var birthyr = today - age
document.writeln("Your age is "+age+"<br>")
document.writeln("Your birth year is "+birthyr+"<br>")


// Task 14
document.writeln("<h3>K-Electric Bill</h3>")
var grossAmount;
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"
    , "November", "December"]
var custName = "Bareeha Sibtain"
var today = new Date()
var m = new Date().getMonth()
var currMonth = months[m]
var units = +prompt("Enter number of units in your house:")
var chargesPU = 16
var latePS = 350

// setting due date as 10th of current month
var dueDate = new Date(today.getFullYear(), today.getMonth(), 10)

// calclate net amount
var netAmount = units * chargesPU

// check if late payment charges are applicable or no
if (today > dueDate)
{
    grossAmount = netAmount + latePS 
}
else {
    grossAmount = netAmount
    latePS = 0
}

// rounding to 2 decimal places
netAmount = netAmount.toFixed(2)
grossAmount = grossAmount.toFixed(2)
chargesPU = chargesPU.toFixed(2)
latePS = latePS.toFixed(2)

// display
document.writeln("Customer Name: "+custName+"<br>")
document.writeln("Month: "+currMonth+"<br>")
document.writeln("No. of Units: "+units+"<br>")
document.writeln("Charges per Unit: "+chargesPU+"<br>")
document.writeln("<br>")
document.writeln("Net Amount Payable (within due date): "+netAmount+"<br>")
document.writeln("Late Payment Srcharge: "+latePS+"<br>")
document.writeln("Gross Amount Payable (after due date): "+grossAmount+"<br>")
