// ----------------- Chapter 14-16 -------------------

// Task 1
var std_names = []

// Task 2
var stds = new Array()

// Task 3
var strings = ["Bareeha" , "Sibtain" , "Hello"]

// Task 4
var numbers = [1 , 2 , 3 , 4]

// Task 5
var bool_array = [false , true]

// Task 6
var mix_array = ["Hello" , 1 , true]

// Task 7
var edu_qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"]
document.writeln ("<h1>Qualifications</h1><br>")
document.writeln("1) "+edu_qualification[0]+"<br>")
document.writeln("2) "+edu_qualification[1]+"<br>")
document.writeln("3) "+edu_qualification[2]+"<br>")
document.writeln("4) "+edu_qualification[3]+"<br>")
document.writeln("5) "+edu_qualification[4]+"<br>")
document.writeln("6) "+edu_qualification[5]+"<br>")
document.writeln("7) "+edu_qualification[6]+"<br>")
document.writeln("8) "+edu_qualification[7]+"<br>")

// Task 8
std_names = ["Ali", "Zainab" , "Hassan"]
var score = [320 , 230 , 480]
var percentage = []
var maxMarks = 500
document.writeln("<br><h1>Marksheet</h1><br>")
for (let i=0 ; i<std_names.length ; i++)
{
    percentage[i] = score[i]/maxMarks*100
    document.writeln("Score of "+ std_names[i]+ " is "+score[i]+". Percentage: "+percentage[i]+"%<br>")
}

// Task 9
document.writeln("<br><h1>Color Names</h1>")
var colors = []
// a
var start_input = prompt("Enter color you want to add to start of array: ")
colors.unshift(start_input)
document.writeln("["+colors+"]<br>")
// b
var end_input = prompt("Enter color you want to add to end of array: ")
colors.push(end_input)
document.writeln("["+colors+"]<br>")
// c
var start1 = prompt("Enter 1st color you want to add to start of array: ")
colors.unshift(start1)
var start2 = prompt("Enter 2nd color you want to add to start of array: ")
colors.unshift(start2)
document.writeln("["+colors+"]<br>")
// d
colors.shift()
document.writeln("["+colors+"]<br>")
// e
colors.pop()
document.writeln("["+colors+"]<br>")
// f
var index = +prompt("Enter the array index position you want to add the color to:")
var center_input = prompt("Enter the color you want to add to index"+ index +" of array: ")
colors.splice(index,0,center_input)
document.writeln("["+colors+"]<br>")
// g
var index = +prompt("Enter the array index position you want to delete the color from:")
var deleteNo = prompt("Enter the number of color(s) you want to delete from index"+ index +" of array: ")
colors.splice(index,deleteNo)
document.writeln("["+colors+"]<br>")

// Task 10
document.writeln("<br><h1>Student Scores</h1>")
var std_scores = [320, 230, 480, 120]
document.writeln("Scores of Students: "+std_scores+"<br>")
var ordered = std_scores.sort()
document.writeln("Ordered Scores of Students: "+ordered+"<br>")

// Task 11
document.write("<br><h1>Cities Slicing</h1>")
var cities = ["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"]
document.writeln("<b>Cities List:</b> <br>"+cities+"<br>")
var selected_cities = cities.slice(2,4)
document.writeln("<b>Selected Cities List:</b> <br>"+selected_cities+"<br>")

// Task 12
document.write("<br><h1>Array Join</h1>")
var arr = ["This", "is", "my", "cat"]
document.writeln("<b>Array:</b> <br>"+arr+"<br><br>")
var text = arr.join(" ")
document.writeln("<b>String:</b> <br>"+text+"<br><br>")

// Task 13
document.write("<br><h1>FIFO</h1>")
var devices = []
for (let i=0; i<4 ; i++)
{
    var device = prompt("Enter device to add in array: ")
    devices.push(device)
}
document.writeln("<b>Devices:</b> <br>"+devices+"<br><br>")
var length = devices.length
for (let j=0; j<length; j++)
{
    document.writeln("<b>Out:</b> <br>")
    document.writeln(devices.shift()+"<br>")
}

// Task 14
document.write("<br><h1>LIFO</h1>")
var lifo_devices = []
for (let i=0; i<4 ; i++)
{
    var input = prompt("Enter device to add in array: ")
    lifo_devices.push(input)
}
document.writeln("<b>Devices:</b> <br>"+lifo_devices+"<br><br>")
var len = lifo_devices.length
for (let j=0; j<len; j++)
{
    document.writeln("<b>Out:</b> <br>")
    document.writeln(lifo_devices.pop()+"<br>")
}

// Task 15
document.write("<br><h1>Phone Manufacturers Dropdown</h1>")
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]
document.write("<select>")
for (let x=0; x<manufacturers.length; x++)
{
    document.write("<option>"+ manufacturers[x] +"<option>")
}
document.write("</select>")
