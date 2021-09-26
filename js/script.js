//alert("This is my first JS");
console.log("This is my first console log");

var a = 15;
var b = "15";

if (a == b) {
    console.log("This is value comparison");
}

if (a === b) {
    console.log("This is value and type comparison");
}

//Practice
var resultArray = [];
var i;

for (i = 0; i < 5; i++) {
    resultArray.push(i);
}

while (i <= 10) {
    if (i % 2 === 0) {
        resultArray.push(i);
    }

    i++;
}

i = 0;
// resultArray = 0,1,2,3,4,6,8,10
while (i <= resultArray.length) {
    if (i % 2 !== 0) {
        resultArray.pop();
    }

    i++;
}

//alert(resultArray);


//JSON
var student = {
    "name": "Vinod John",
    "age": 20,
    "score": 14.6,
    "hasPassed": true,
    "passedDate": '2021-10-26T11:30'
};

console.log(student.hasPassed);

//JSON Array
var students = [{
    "name": "Vinod John",
    "yearOfBirth": 1986,
    "score": 14.6,
    "hasPassed": true,
    "passedDate": '2021-10-26T11:30'
},
    {
        "name": "David beckham",
        "yearOfBirth": 2000,
        "score": 16,
        "hasPassed": false
    },
    {
        "name": "Tony stark",
        "yearOfBirth": 2002,
        "score": 12.6,
        "hasPassed": false,
        "passedDate": ''
    }];

console.log(students[1].age);

console.log(students);

//Function call
logStudents(students);

//Function with return value
function calculateAge(yearOfBirth) {
    return 2021 - yearOfBirth;
}

//Function without return value
function logStudents(studentArray){
    studentArray.forEach((value, index) => {
        console.log("Student-" + index + ":");
        console.log(value);

        //Function call for JSON value
        var age = calculateAge(value.yearOfBirth);
        console.log("Age:" + age);
    });
}

//Accessing html elements
var ourLocation = document.getElementById("ourLocation");
console.log(ourLocation.innerText);

function changeLocation(){
    ourLocation.innerHTML = "<h2>Viljandi, Estonia</h2>";
    ourLocation.innerText = "Estonia";
    ourLocation.style="color:red";
}




