

Total.addEventListener('click',function calculateTotal(){ 
var itemPrice = document.querySelector("#itemPrice").value;
var itemCount = document.querySelector("#itemCount").value;
var Total = document.querySelector("#getTotalPrice");
  console.log(itemPrice,itemCount);
  document.querySelector("#itemPrice").value = '';
  document.querySelector("#itemCount").value = '';
});



