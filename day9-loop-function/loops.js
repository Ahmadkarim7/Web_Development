console.log("Ahmad Adil Karim")
console.log("===Example 1: for loops as a counter====")
let i = 1;
for(i; i < 5; i++) {
    console.log(`iteration = ${i}`);
}

console.log("===Example 2: for loops as a decrement counter====")
//Create a loop counter from 10 to 0 step 1
for(let n = 10; n>=0; n--){
    console.log(`iteration = ${n}`) ;
}

console.log('Example 3: condition inside the loop======')
//check how many even number are in between -5 and 5
let counter = 0
for(let m = -5; m<5; m++){
    console.log(`iteration = ${m}`);
    if(m%2 === 0 && m !==0){
        counter++
        
    }
}

console.log(`There is/are ${counter} of even number`)

console.log("==== Example 4: loop as a counter=====")
//display number from 0 to 4
let p = 0
while(p<=4){
    console.log(`iteration = ${p}`)
    p++
}

console.log("==== Example 5: while loop application=====")
//guess number game
const SECRET = 8

let guessnumber = parseInt(prompt("Guess a number between 1 and 10"))
while(guessnumber !== SECRET){
    guessnumber = parseInt(prompt("Guess another number between 1 and 10"))
}
console.log(`Great! you guessed it! the number is ${SECRET}`)
console.log("Example 6: while loop application in a list")
let colors = ["magneta", "olive", "babyblue"]
let sizeforcolors = colors.length
let index = 0 
while(index<sizeforcolors){
    console.log(colors[index])
    index++
}

console.log("Example 7= while loop to simulate a password log in===")
//terminate the loop if password fails in three attempts

const password = "peterpan"
let userpassword = prompt("Enter a password")
let numberattempt = 0
while(userpassword !== password){
    userpassword = prompt("Enter a password again")
    numberattempt++
    if(numberattempt>2){
        console.log("Your accound is locked ")
        break
    }
    userpassword = prompt(`Attempt = ${3-numberattempt}. Enter a password again`)
}
console.log("Have a good day")

console.log("Example 8: do wile loop to simulate a withdraw from a bank account===")
//user try to withdraw money from an account with balance of 1000$
let withdraw = 0
let balance = 1000
do{
    withdraw = parseInt(prompt("How much do you want to withdraw?"))
    if(withdraw<=balance){
        balance = balance - withdraw
        break
    }
    else{
        console.log("Insufficient amount, try again")
    }
}while(withdraw>balance)
    console.log(`Your new balance is ${balance}`)

    console.log("Exercise")
    //simulate 


    const pinpassword = 1234
let userpin = prompt("Enter a pin")
let numberattempts = 0
while(userpin !== password){
    userpin = prompt("Enter a password again")
    numberattempts++
    if(numberattempts>2){
        console.log("Your accound is locked ")
        break
    }
    userpassword = prompt(`Attempt = ${3-numberattempt}. Enter a password again`)
}
