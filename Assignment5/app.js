// ------------Chapter 21-25 --------------------

// Task 1
document.writeln("<h4>Full Name w/o method</h4>")
var f_name = prompt("Enter your first name:")
var l_name = prompt("Enter your last name:")
var fullName = f_name+l_name
alert("Hello "+fullName)

// Task 2
document.writeln("<h4>Mobile Model</h4>")
var mobile = prompt("Enter your favorite mobile phone model:")
var length_str = mobile.length
document.writeln("My favorite phone is: "+mobile+"<br>")
document.writeln("Length of string: "+length_str+"<br>")

// Task 3
document.writeln("<h4>Index Finding</h4>")
var string = "Pakistani"
document.writeln("String: "+string+"<br>")
document.writeln("Index of 'n': "+string.indexOf("n")+"<br>")

// Task 4
document.writeln("<h4>Last Index Finding</h4>")
var string = "Hello World"
document.writeln("String: "+string+"<br>")
document.writeln("Index of 'n': "+string.lastIndexOf("l")+"<br>")

// Task 5
document.writeln("<h4>Character Finding</h4>")
var string = "Pakistani"
document.writeln("String: "+string+"<br>")
document.writeln("Character at index 3: "+string.charAt(3)+"<br>")

// Task 6
document.writeln("<h4>Full Name with method</h4>")
var f_name = prompt("Enter your first name:")
var l_name = prompt("Enter your last name:")
var fullName = f_name.concat(" ",l_name)
alert("Hello "+fullName)

// Task 7
document.writeln("<h4>Replacing Word</h4>")
var city = "Hyderabad"
document.writeln("City: "+city+"<br>")
var city_new = city.replace("Hyder" , "Islam")
document.writeln("After replacement: "+city_new+"<br>")

// Task 8
document.writeln("<h4>Replacing Multiple Occurences</h4>")
var message = "Ali and Sami are best friends. They play cricket and football together."
document.writeln("<b>Message: </b>"+message+"<br>")
document.writeln("<b>Message After replacement: </b>"+message.replaceAll("and" , "&")+"<br>")

// Task 9
document.writeln("<h4>String to Integer</h4>")
var str = "472"
document.writeln("Value: " + str + "<br>")
document.writeln("Value: " + typeof(str) + "<br>")
var int = parseInt(str)
document.writeln("Value: " + int + "<br>")
document.writeln("Value: " + typeof(int) + "<br>")

// Task 10
document.writeln("<h4>UpperCase Conversion</h4>")
var input = prompt("Enter a word:")
document.writeln("User Input: "+input+"<br>")
document.writeln("Upper Case: "+input.toUpperCase()+"<br>")

// Task 11
document.writeln("<h4>TitleCase Conversion</h4>")

var input = prompt("Enter a word/sentence:")
document.writeln("User Input: "+input+"<br>")
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

// Task 12
document.writeln("<h4>Num to Str</h4>")
var num = 35.36
document.writeln("Number: "+num+"<br>")
var str = num.toString()
var new_str = str.replace(".","")
document.writeln("Result: "+new_str+"<br>")

// Task 13
document.writeln("<h4>Check Special Characters in Name</h4>")
var username = prompt("Enter your name")
var invalid = false
for (var i=0 ; i<username.length ; i++)
{
    var charCode = username.charCodeAt(i)
    if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64)
    {
       invalid = true
       break
    }
}
if (invalid)
{
    alert("Please enter a valid username")
}

// Task 14
document.writeln("<h4>Search by user input</h4>")
var a = ["cake", "apple pie", "cookie", "chips", "patties"]
var input = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")
for (let i=0 ; i<a.length ; i++ )
{
    if (a.includes(input.toLowerCase()))
    {
        document.writeln(input.toLowerCase()+" is <b>available</b> at index "+i+" in our bakery.<br>")
        break;
    }
    else {
        document.writeln("We are sorry. "+input.toLowerCase()+" is <b>not available</b> in our bakery.<br>")
        break;
    }
}

// Task 15
document.writeln("<h4>Password Validity</h4>")
var password = prompt("Enter your password:")
for (var i=0; i<password.length; i++)
{
    var code = password.charCodeAt(i) 
    if ((code>=48 && code<=57) || (code>=65 && code<=90) || (code>=97 && code<=122))
    {
        if (!(password.charCodeAt(0)>=48 && password.charCodeAt(0)<=57))
        {
           if (password.length>=6)
           {
                document.writeln("Entered Password: "+password+"<br>")
                document.writeln("Valid Password <br>")
                break
           }
           else {
            document.writeln("Entered Password: "+password+"<br>")
            document.writeln("Password should be atleast 6 characters long <br>")
            document.writeln("Please enter a valid Password <br>")
            break
           }
        }
        else {
            document.writeln("Entered Password: "+password+"<br>")
            document.writeln("Password can not begin with a number <br>")
            document.writeln("Please enter a valid Password <br>")
            break
        }
    }
    else {
        document.writeln("Please enter a valid Password <br>")
        break
    }
}

// Task 16
document.writeln("<h4>String to Array using split()</h4>")
var university = "University of Karachi"
var arr = university.split("")
for (var i=0; i<arr.length; i++)
{
    document.writeln(arr[i]+"\n<br>")
}

// Task 17
document.writeln("<h4>Last character</h4>")
var input = prompt("Enter word or sentence")
document.writeln("User input: "+input+"<br>")
document.writeln("Last character of input: "+input.charAt(input.length-1)+"<br>")

// Task 18
document.writeln("<h4>Word Occurences</h4>")
var text = "The quick brown fox jumps over the lazy dog"
var lower_text = text.toLowerCase()
var arr = lower_text.split(" ")
var count = 0
for (var i=0 ; i<arr.length ; i++)
{
    if (arr[i] === "the")
    {
        count++
}
}
document.writeln("Text: "+text+"<br>")
document.writeln("There are "+count+" occurences of word 'the'<br>")
