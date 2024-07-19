// path of the json 
let url = "http://localhost:3000/menuList";
let url2 = " http://localhost:3000/cart";
let orderUrl = "http://localhost:3000/orders";

// left panel
let itemsList = document.querySelector('.items-list');

// billing list
let cartItems = document.querySelector('.cartItems');
var response = '';

// bill calculations
let sum = 0;
let tax = 0;
let discount = 0;
let totalSum = 0;
let orderedlist = [];
var Index = '';
// table inner html content
let taxAmount = document.querySelector('.taxAmount');
let discountAmount = document.querySelector('.discountAmount');
let tfoot = document.querySelector('.tfoot');
let userOrders = document.querySelector('.userOrders');
let main_container = document.querySelector('.main_container');
let ordersCount = document.querySelector('.ordersCount');
let current = document.querySelector('.current');

// view table 
let viewOrders = document.querySelector('.viewOrders');
let viewList = document.querySelector('.viewList');
let user_orders = '';
// buttons
let orders = document.querySelector('.orders');
let placeOrder = document.querySelector('.placeOrder');
let clearbtn = document.querySelector('.clear-btn');

// orders data
let total = document.querySelector('.total');
let customer_name = document.querySelector('.customer_name');
let ordersList = document.querySelector('.ordersList');



// displaying available list in left panel.
gettingList();
async function gettingList() {
  var listItems = await fetch(url);
  response = await listItems.json();
  for (let i = 0; i < response.length; i++) {

    itemsList.innerHTML += `
                           <li onclick="view(${response[i].id})"><h1>${response[i].itemName}</h1>
                                 <h3>${response[i].price}</h3>
                                  </li>`;
  }
}
function view(ID) {
  console.log(ID);
  orderedlist.push(
    { item: response[ID - 1].itemName, price: response[ID - 1].price, quantity: 1 });
  console.log(orderedlist);
  table();
}
// clear function
function clear()
{
  customer_name.value='';
  cartItems.innerHTML='';
  totalSum=0;
  tax=0;
  discount=0;
  sum=0;
}

  current.addEventListener('click',function(){
  userOrders.style.display="none";
  main_container.style.display="block";

})

// displaying selected items for billing
async function table() {  
  let i=0;
  cartItems.innerHTML ="";
  for (i = 0; i < orderedlist.length; i++) {
    cartItems.innerHTML += `
                       <tr>
                           <td>${orderedlist[i].item}</td>
                           <td><input type='number' class='itemQuantity' onchange="quantityValue(${i})" value="${orderedlist[i].quantity}"></td>
                           <td> ${orderedlist[i].price}</td>
                       </tr>` ;

    
  }
  sum += response[i-1].price;
 
  tax = sum * (3 / 100);
  taxAmount.innerHTML = tax;
  discount = sum * (4 / 100);
  discountAmount.innerHTML = discount;
  totalSum = (sum + tax)-discount;
  console.log();
  total.innerHTML = totalSum;
}

async function quantityValue(id) {
  var foodQuantity = document.querySelectorAll(".itemQuantity");
  orderedlist[id].quantity = foodQuantity[id].value;
  orderedlist[id].price = orderedlist[id].price * foodQuantity[id].value;
  console.log(orderedlist[id].quantity);
  table();
}

// placing the order
placeOrder.addEventListener('click',function(){
  let Cname = customer_name.value;
  placeorder(Cname)
});


async function placeorder(Cname) {

  if (Cname == '') {
    alert('please enter your name');
  }
  else {
    //alert('your order has been successfully placed');
    var orderFetch = await fetch(orderUrl,
      {
        method: "POST",
        headers:
        {
          "content-type": "application/json"
        },
        body: JSON.stringify({ status:"orderd", name: Cname, bill: totalSum, tax: tax, discount: discount, Userorders: orderedlist })
      });
    user_orders = await orderFetch.json();
    console.log(user_orders);
    customer_name.value = '';
    cartItems.innerHTML = '';
     totalSum = 0;
    tax = 0;
    orderedlist=[];
    discount = 0;
    sum = 0;
    taxAmount.innerHTML = '';
    discountAmount.innerHTML = '';
    tfoot.style.display = "none";
  }
  
}


orders.addEventListener('click', order);

// orders btn      
async function order() {
  alert("hai")
  main_container.style.display = "none";
  viewOrders.style.display = "none";
  userOrders.style.display = "block";

  ordersList.innerHTML = '';

  var orderFetch = await fetch(orderUrl);
  var orderResponse = await orderFetch.json();
  

  for (let i = 0; i < orderResponse.length; i++) {
    if(orderResponse[i].status=="orderd"){
    ordersList.innerHTML += `
                                       <tr>
                                       <td>${i + 1}</td>
                                       <td>${orderResponse[i].id}</td>
                                       <td>${orderResponse[i].name}</td>
                                       <td>${orderResponse[i].bill}</td>
                                       <td><button class='viewbtn' onclick='viewfun(${orderResponse[i].id})'>view</button></td>
                                       <td><button onclick=cancleOrder(${orderResponse[i].id})>cancel 4 th item</button></td>
                                  </tr>`;

  }
}
  ordersCount.innerHTML = orderResponse.length;
}


// function for view
async function viewfun(Index) {
  userOrders.style.display = "none";
  viewOrders.style.display = "block";
  viewList.innerHTML = '';
  var orderFetch = await fetch(orderUrl);
  var view_data = await orderFetch.json();

  console.log(Index);

  for (let i = 0; i <= view_data.length + 1; i++) {

    viewList.innerHTML += `
                       <tr>
                          <td>${i + 1}</td>
                          <td>${view_data[Index].Userorders[i].item}</td>
                          <td>${view_data[Index].Userorders[i].price}</td>
                          <td>${view_data[Index].Userorders[i].quantity}</td>
                      </tr>`
                      console.log(view_data[Index].Userorders[i].item);
  }

}

//clearbtn.addEventListener('click',clear);



// posting selected items in json.
//  async function cartList(){
//   console.log();

//   var listItems = await fetch(url2,
//            {
//               method:"POST",
//               headers:{
//                   "content-type":"application/json"
//               },
//               body:JSON.stringify({name:response[ID-1].itemName,quantity:1,cost:response[ID-1].price})
//   });
//        var responseList=await listItems.json();


// }

/* displaying the orders
    async function orderslist(){
        var orderFetch= await fetch(orderUrl);
        var orderedlist=await orderFetch.json();
         let data='';
           for(let i=0;i<orderedlist.length;i++)
           {

           }
    }

*/


// async function cancleOrder(id){

// console.log(`${orderUrl}/${id}`);

// let deletedResponce= await fetch(`${orderUrl}/${id}`,
//   {
//      method:"DELETE",
//      headers:
//        {
//         "Content-Type":"application/json"
//        }
//   });  
// console.log(deletedResponce);
//   let deletedItems=await deletedResponce.json();

//      console.log(deletedItems);

// }
// let deletedItems;

// async function cancleOrder(id) {

//   console.log(`${orderUrl}/${id}`);

//   let deletedResponce = await fetch(`${orderUrl}/${id}`);

//    deletedItems = await deletedResponce.json();
//   deleteOrder(id);
//   console.log(deletedItems);
//   newOrder(deletedItems)
// }

// async function deleteOrder(id) {

//   console.log(`${orderUrl}/${id}`);

//   let deletedResponce2 = await fetch(`${orderUrl}/${id}`,
//     {
//       method: "PATCH",
//       headers:
//       {
//         "Content-Type": "application/json"
//       },
//       body:JSON.stringify({status:"cancled"})
//     });
// }


// async function newOrder(deletedItems) {

//   let y = deletedItems.Userorders.pop();

//   orderedlist = deletedItems.Userorders;

//   console.log(orderedlist);

//   table();
//   main_container.style.display = "block";
//   viewOrders.style.display = "block";
//   userOrders.style.display = "none";
//   Cname = deletedItems.name;
//   console.log(Cname);
//  placeorder(Cname);
//  order();
// }
