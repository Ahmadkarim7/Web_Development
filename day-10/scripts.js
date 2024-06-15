/***
 * *Ahmad Adil Karim
 * June 15, function and object
 */
console.log('Ahmad Adil Karim')
function msg(){
    console.log('Hello World!')
}

//function to print  numbers between 1 and 3, includive
function printcount(){
    for(let x = 1 ; x<=3 ; x++){
        console.log(x)
    }
}

//function that passes a name as argument
function greeting (name){
    console.log(`Welcome to JavaScript ${name}`)
}

//function that passes multiple arguemnts
function fullname(firstname, lastname){
    console.log(`Welcome to JS ${firstname} ${lastname[0]}`)
    //lastname[0] to [rint the first character of last name]
}

let firstname ="Peter"
let lastname ="Pen"

fullname(firstname, lastname)

//function without parameters bur returns a value
function sumxy(){
    let x = 10
    let y = -2
    return x+y
    //any lines after the first retuen will not be excuted
}

//funcction  with parameters and return a value 
function sum(x,y){
    return x+y
}

//calling sum()
let s = sum(5,10)
console.log(`The sum is ${s}`)

//function check if a number is positive
function checkpositive(number){
    if(number>0){
        return true
    }
    else{
        return false
    }
}

//call the function
let n = -5
let check = checkpositive(n)
console.log(`is number ${n} positive? ${checkpositive(n)}`)

//save function in a variable
/* function addition (num1, num2){
return num1+num}*/

const addition = function(num1, num2){
    return num1+num2
}
/*
const product = function(num1, num2){
    return num1*num2
}
*/
const product = (num1, num2) => {return num1*num2}

//Anonyms Function
( function(){
    console.log("This is an anonymous functionS")
});

(
    ()=>{console.log("This is an anonymous function using arrow")}
)();

    //OBJECTS
//real world objectss are all around us, they each have attribute and behavior that can be described
//Attributes describe the features that an object has.
//behaviors describe actions that an object can perform.

//car is an object
let car = {
    //attributes
    make:"Jeep", 
    year:2021,
    model: "Wrangler",
    startmileage : 10,
    endmileage: 50,


//behaviors (Methods, function)
accelerate : function() {return this.model},
brake: function() {return this.make},
distancetravel: function() {return this.endmileage -this.startmileage}

}

//add a method 'start' to the car object
car.start = function()
{
    return `${this.make} ${this.model}  is running`
}

//add a property "prive"
car.price = 32000