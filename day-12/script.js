/*--
*Monday, June 17:events in JS
*Ahmad Adil Karim 
*/
//onclick event
//step 1: find and save the document that we want to apply an 
let btn1 = document.querySelector(".btn1")
//step 2: bind the click event to btn1
if (btn1) {
    btn1.onclick = function(){
        alert("HEY THERE!")
    }
}
//onmouseover
let linkqcc = document.querySelector(".linkqcc");
if (linkqcc) {
    linkqcc.onmouseout = () => {
        alert("QCC LINK WAS TOUCHED")
    }
}
//change color div
//step 1: collect and save the elements
let colorcontainer = document.querySelector(".colorcontainer")
let btncolor = document.querySelector(".btncolor")

if (btncolor && colorcontainer) {
    btncolor.addEventListener("click", function(){
        colorcontainer.style.backgroundColor = randomcolor()
    })
}
let randomcolor = function(){
    let redvalue = Math.floor(Math.random()*255)
    let greenvalue = Math.floor(Math.random()*255)
    let bluevalue = Math.floor(Math.random()*255)
    return `rgb(${redvalue}, ${greenvalue}, ${bluevalue})`
}
//collect the two buttons

//add click event to each button to change the background color to olive and orange respectively

//reset the background color to white

/*--Tuesday, June 18 */
/* event object */
// collect the button 
let btnpressme = document.querySelector(".btnpressme")
if (btnpressme) {
    btnpressme.addEventListener("click", function(e) {
        //switch text content 'btnpressme button from press me to button was pressed
        if (e.target.textContent === "Press Me!") {
            e.target.textContent = "Button was pressed"
        } else {
            e.target.textContent = "Press Me!"
        }
        // toggle between class 'btnpressme' and 'btnactive'
        e.target.classList.toggle("btnactive")
    })
}

/*--remove an item from a list*/
let listfruits = document.querySelector("#listfruits")
if (listfruits) {
    listfruits.addEventListener("click", function(event){
        if (event.target.tagName.toLowerCase() === "li"){
            event.target.remove()
        }
    })
}
/*prevent default of an event*/
let visitqcc = document.querySelector(".visitqcc")
if (visitqcc) {
    visitqcc.addEventListener("click", function(event){
        event.preventDefault()
        alert("QCC website is off! Try later")
    })
}
/*scroll event*/
let content = document.querySelector("#content")
let btnscrollright = document.querySelector(".btnscrollright")
if (btnscrollright) {
    btnscrollright.addEventListener("click", function(){
        window.scrollBy(100,0)
    })
}
/*slide photo gallery*/
let btnleft = document.querySelector(".btnleft")
let btnright = document.querySelector(".btnright")
let gallerycontainer = document.querySelector(".gallerycontainer")

if (btnleft && gallerycontainer) {
    btnleft.addEventListener("click", function() {
        gallerycontainer.scrollBy({
            left: -500,
            behavior: "smooth"
        })
    })
}
if (btnright && gallerycontainer) {
    btnright.addEventListener("click", function() {
        gallerycontainer.scrollBy({
            left: 500,
            behavior: "smooth"
        })
    })
}
/*to top*/
const gotop = document.querySelector(".gotop")
if (gotop) {
    window.addEventListener("scroll", function(){
        let pxtop = window.scrollY;
        if(pxtop>=300){
            gotop.style.display = "block"

        }
        else{
            gotop.style.display = "none"
        }
    })
}

/* Thursday, June 20 */

/* FORM EVENTS */
const myform = document.querySelector("#myform");
const greeting = document.querySelector(".greeting");
const greetingname = document.querySelector(".greeting p span");

myform.addEventListener("submit", function(event) {
    event.preventDefault();

    const usernameinput = document.querySelector("#username");
    const username = usernameinput.value.trim(); // Trim whitespace from username

    if (username === "") {
        alert("Please enter a username");
        return;
    }

    // Display greeting message after validation
    greetingname.textContent = username; // Update text content
    greeting.style.display = "block";

    // Clear username input after form submission
    usernameinput.value = "";
});

/*---pasword validation*/
// collect form elements
const passwordfield = document.querySelector("#passwordfield");
const submitbtn = document.querySelector(".submitbtn");
// collect the password error message element
const passworderror = document.querySelector(".passworderror");

// disable button when load the window
window.addEventListener("load", function() {
    submitbtn.disabled = true;
    submitbtn.style.backgroundColor = "lightgray";
});

// check the length of the password
passwordfield.addEventListener("input", function() {
    let numbercharacter = passwordfield.value.length;
    if (numbercharacter < 8) {
        passworderror.textContent = "Password must be 8+ characters...";
        passworderror.style.color = "red";
        passwordfield.style.border = "solid 2px red";
    } else {
        passworderror.innerHTML = "&#x2713;";
        passworderror.style.color = "green";
        passwordfield.style.border = "solid 2px green";
        submitbtn.disabled = false;
        submitbtn.style.backgroundColor = "red";
    }
});


