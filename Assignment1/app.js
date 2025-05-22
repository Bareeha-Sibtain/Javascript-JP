
// -------------Chapter 01 -------------
// Task 1
alert("Hello World");

// Task 2
alert("Error! Please enter a valid password.")

// Task 3
alert("Welcome to JS Land...\nHappy Coding!")

// Task 4
alert("Welcome to JS Land...")
alert("Happy Coding!")

// Task 5
alert("Hello...I can run JS through my web browser's console")

// -------------Chapter 02 --------------
// Task 1
var username;

// Task 2
var myName;
myName = "Bareeha Sibtain";

// Task 3
var message;
message = "Hello World";
alert(message);

// Task 4
var stdName = "Jhone Doe";
alert(stdName);
var age = 15;
var msg = " years old"
alert(age+msg);
var course = "Certified Mobile Application Development";
alert(course);

// Task 5
var word = "PIZZA";
var result = "";
for (var i = word.length; i>0; i--)
{
    result += word.slice(0,i) + "\n";
}
alert(result);

// Task 6
var email = "bareeha.sibtain@gmail.co+m";
var msg = "My email address is ";
alert(msg+email);

// Task 7
var book = "A smarter way to learn JavaScript."
alert("I am trying to learn from the Book " + book);

// Task 8
document.write("Yah! I can write HTML content through Javascript")

// Task 9
var msg = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
document.write("<br>" + msg);
alert(msg);

// ----------Chapter 03 ------------
// Task 1
var age = 23;
alert("I am "+ age + " years old")

// Task 2
var n = 14;
alert("You have visited this site " + n + " times");

// Task 3
var birthYear = 2001;
document.write("My birth year is " + birthYear + "<br>")
var datatype = typeof birthYear;
document.write("Data type of my declared variable is " + datatype);

// Task 4
var visitorName = "John Doe";
var productTitle = "T-shirts";
var qty = 5;
document.write("<br>" + visitorName + " ordered " + qty + " " + productTitle + "(s) on XYZ Clothing store.")


// ------------Chapter 04 ---------------

// Task 1
var name="Bareeha" , age="23" , title="IT Analyst";

// Task 2
// Legal
var legal , legal_1 , $typeWriter , _legally , Item;
// Illegal
// var @illegal , 1illegal , var , my-name , typeof;

// Task 3
var a="numbers" , b="$", c="_" , d="letter" , e="sensitive" , f="keywords";
document.write("<h2>Rules for naming JS variables</h2>");
document.write("<br>");
document.write("Variables can only contain, " + a + " , " + b + " and " +  c + ". For example : $my_1stVariable <br>");
document.write("  Variables must begin with a " +  d + ", " + b + " or " + c +". For example : $name, _name or name <br>");
document.write(" Variable names are case " + e +". <br>");
document.write(" Variable names should not be JS " + f);

// ---------------Chapter 05 ----------------------

// Task 1
var num1 = 67;
var num2 = 40;
var ans = num1+num2;
document.write("Sum of " + num1 + " and " +  num2  + " is " + ans + "<br>");

// Task 2
var num1 = 49;
var num2 = 7;
var sub = num1-num2;
var mul = num1*num2;
var div = num1/num2;
var mod = num1%num2;
document.write(num1 + " subtracted by " +  num2  + " is " + sub + "<br>");
document.write(num1 + " multiplied by " +  num2  + " is " + mul + "<br>");
document.write(num1 + " divided by " +  num2  + " is " + div + "<br>");
document.write(num1 + " modulus " +  num2  + " is " + mod + "<br>");

// Task 3
var a ;
document.write("<br> Value after variable declaration is: " + a + "<br>");
a = 5;
document.write("Initial value: " + a + "<br>") ;
a = ++a;
document.write("Value after increment is: " + a + "<br>");
a = a+7;
document.write("Value after addition is: " + a + "<br>");
a = --a;
document.write("Value after decrement is: " + a + "<br>");
a = a%3;
document.write("The remainder is: " + a + "<br>")

// Task 4
var ticket = 600;
var ticket_5 = 5*ticket;
document.write("<br> Total cost to buy 5 tickets to a movie is " + ticket_5 + "PKR.<br>")

// Task 5
var num = 4;
document.write("<br> Table of " + num + "<br>");
for (var i = 1; i<11; i++)
{
    document.write(num +" x "+ i + " = " + num*i + "<br>");
}

// Task 6
var celcius=25;
var f = (celcius * 9/5)+32;
document.write("<br>"+celcius+"C is "+ f+ "F<br>");
var faren = 70;
var c = (faren-32)*5/9;
document.write(faren+"F is "+ c+ "C<br>");

// Task 7
var pi1=650;
var pi2=100;
var qty1=3;
var qty2=7;
var shipping=100;
totalCost = (pi1*qty1)+(pi2*qty2);
document.write("<br> Price of Item 1 is " + pi1 + "<br>");
document.write("Qantity of Item 1 is " + qty1 + "<br>");
document.write("Price of Item 2 is " + pi2 + "<br>");
document.write("Qantity of Item 2 is " + qty2 + "<br>");
document.write("Shipping Charges " + shipping + "<br>");
document.write("<br><br>Total cost of your order is " + totalCost + "<br>");

// Task 8
var tot_marks = 980;
var obt_marks = 804;
var percentage = (obt_marks/tot_marks)*100;
document.write("<br> <h1>Marks Sheet</h1> <br><br>");
document.write("Total Marks: " + tot_marks + "<br>");
document.write("Marks obtained: " + obt_marks + "<br>");
document.write("Percentage: " + percentage + "<br>");

// Task 9
var usd=10;
var sau=25;
var pkr=(usd * 104.80) + (sau * 28);
document.write("<br> <h1>Currency in PKR</h1> <br><br>");
document.write("Total currency in PKR: " + pkr + "<br>");

// Task 10
var a = 5;
a = a+5*10/2;
document.write("<br>Result of task 10: " + a + "<br>")

// Task 11
var curr_yr = 2016;
var birth_yr = 1992;
var age = curr_yr-birth_yr;
document.write("<br> <h1>Age Calculator</h1> <br><br>");
document.write("Current Year: " + curr_yr + "<br>");
document.write("Birth Year: " + birth_yr + "<br>");
document.write("Your Age is: " + age + "<br>");

// Task 12
var radius = 20;
var pi = 3.142;
var coc = 2*pi*radius;
var area = pi*(radius)^2;
document.write("<br> <h1>The Geometrizer</h1> <br><br>");
document.write("Radius of circle: " + radius + "<br>");
document.write("The circumference is: " + coc + "<br>");
document.write("The area is: " + area + "<br>");

// Task 13
var fsnack = "chocolate chip";
var curr_age = 15;
var max_age = 65;
var amount = 3;
var lifeSnack = (max_age - curr_age)  * amount;
document.write("<br> <h1>The Lifetime Supply Calculator</h1> <br>");
document.write("You will need " + lifeSnack +" "+ fsnack + " to last you until the ripe old age of "+ max_age +"<br>");


// -----------Chapter 06-09-----------

// Task 1
var a = 10;
document.write("Result:<br>");
document.write("<br> Value of a is: " + a + "<br>");
document.write("----------------------------------<br><br>")
document.write("The value of ++a is " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a++ is " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of --a is " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a-- is " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Task 2
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("<h3>Task 2 Step-by-step breakdown:</h3><br><br>");
document.write("Initial values: a = 2, b = 1<br><br>");
document.write("--a = " + (--a) + " (a becomes 1)<br>");
document.write("--b = " + (--b) + " (b becomes 0)<br>");
document.write("++b = " + (++b) + " (b becomes 1)<br>");
document.write("b-- = " + (b--) + " (uses 1, then b becomes 0)<br><br>");
document.write("Final values:<br>");
document.write("a is " + a + "<br>");
document.write("b is " + b + "<br>");
document.write("result is " + result + "<br>");

// Task 3
var name = prompt("Enter name ");
alert("Hello " + name);

// Task 5
var n = Number(prompt("Enter number: "));
document.write("<br> Table of " + n + "<br>");
if (n) {
    for (var i = 1; i < 11; i++) {
        document.write(n + " x " + i + " = " + n * i + "<br>");
    }
}
else {
    n = 5;
    document.write("<br> Table of " + n + "<br>");
    for (var i = 1; i < 11; i++) {
        document.write(n + " x " + i + " = " + n * i + "<br>");
    }
}

// Task 6
var sub1 = prompt("Enter subject 1: ");
var sub2 = prompt("Enter subject 2: ");
var sub3 = prompt("Enter subject 3: ");
var maxMarks = 100;
var tot = 100*3;
var obt1 = Number(prompt("Enter obtained marks in " + sub1));
var obt2 = Number(prompt("Enter obtained marks in " + sub2));
var obt3 = Number(prompt("Enter obtained marks in " + sub3));
var totalobt = obt1 + obt2 + obt3;
var per = totalobt/tot * 100;

document.write("<br><br><h1>Marksheet</h1>")
document.write("<br><br><table><br><br>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");

document.write("<tr><td>" + sub1 + "</td><td>" + maxMarks + "</td><td>" + obt1 + "</td><td>" + Math.round((obt1 / maxMarks) * 100) + "%</td></tr>");
document.write("<tr><td>" + sub2 + "</td><td>" + maxMarks + "</td><td>" + obt2 + "</td><td>" + Math.round((obt2 / maxMarks) * 100) + "%</td></tr>");
document.write("<tr><td>" + sub3 + "</td><td>" + maxMarks + "</td><td>" + obt3 + "</td><td>" + Math.round((obt3 / maxMarks) * 100) + "%</td></tr>");

document.write("<tr><th></th><th>" + tot + "</th><th>" + totalobt + "</th><th>" + Math.round(per) + "%</th></tr>");
document.write("</table>");