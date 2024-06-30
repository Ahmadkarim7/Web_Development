/* SURVEY FORM */
// COLLECT COMPONENTS
const myform = document.querySelector(".myform");
const displayresult = document.querySelector(".displayresult");

myform.addEventListener("submit", function(event){
    // Collect values after submitting the form
    const username = document.querySelector("#firstname").value;
    const fav_language = document.querySelector("input[name='fav_language']:checked").value;

    /*
    // To test to see if the data was collected we can set prevent Default for the form
    event.preventDefault();
    displayresult.innerHTML = `Username: ${username} <br>Favorite Web language: ${fav_language}`;
    */

    // Save the data, username and favorite language
    sessionStorage.setItem('firstname', username);
    sessionStorage.setItem('selection_language', fav_language);
    sessionStorage.setItem('product123', "Product Name")
});

/** Shopping cart */
// Collect the elements
const formitem1 = document.querySelector(".formitem1")
const itemname = document.querySelector(".itemname")
const itemdescription = document.querySelector(".itemdescription")
const imgitem1 = document.querySelector(".imgitem1").value
const saleprice = document.querySelector(".saleprice").textContent


formitem1.addEventListener("submit", function() {
    // Collect the quantity
    const x = document.querySelector('.quantityinput').value


    // Set data into sessionStorage
    sessionStorage.setItem('quantityitem1',x)
    sessionStorage.setItem('name_item1', itemname)
    sessionStorage.setItem('description_item1', itemdescription)
    sessionStorage.setItem('sale_price', saleprice)

    
});
