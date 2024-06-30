// collect the elements
const itemquantity = document.querySelector('.priceitem_display')
const quantity_display = document.querySelector('.quantity_display')
const totalprice_display = document.querySelector('.totalprice_display')

//get values for quantity and price per unit
const priceitem = sessionStorage.getItem('sale_price')
const quantityitem = sessionStorage.getItem('quantityitem1')

//calculate for the total price
const totalprice = (priceitem*quantityitem).toFixed(2)

//print the price, quantity and total price in the collected elements
itemquantity.innerHTML = `$ ${priceitem}`
quantity_display.innerHTML = `$ ${quantityitem}`
totalprice_display.innerHTML = `$ ${totalprice}`