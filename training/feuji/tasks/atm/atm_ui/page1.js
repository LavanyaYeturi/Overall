
var loginbutton=document.querySelector(".loginBtn");
var form1=document.querySelector(".login1");
var submit = document.querySelector(".submit");
var Response=document.querySelector(".page2");
var validationResponse=document.querySelector(".validationBox");
var logout=document.querySelector(".logout");
var validationClose=document.querySelector(".validationClose");

var withdrawbtn=document.querySelector(".withdrawl");
var depositbtn=document.querySelector(".deposit");
var transactionbtn=document.querySelector(".transaction");

var depositSec=document.querySelector(".depositSec");
var withdrawlSec=document.querySelector(".withdrawlSec");
var transactionSec=document.querySelector(".transactionSec");

var withdrawHistory=document.querySelector(".withdrawHistory");

 var depositClose=document.querySelector(".depositClose");
 var withdrawClose=document.querySelector(".withdrawClose");
 var transactionClose=document.querySelector(".transactionClose");
 var close=document.querySelector(".close");
 var close1=document.querySelector(".close1");
 var tbody = document.querySelector(".tbody");
 
const accountHolderNames=["lavanya yeturi" ,"sam superior"];
const acountNumberList=["21911018" , "21911026"];
const passwordsList=["lav","sam"];
let accountBalanceList=[10000 ,20000];
var transactionHistory=[];
var index=0;

var accountHolderName=document.querySelector(".accountHolderName");
var balance=document.querySelector(".currentBalance");


// login function
  function loginFunction()
  {
      loginbutton.style.display="none";
      form1.style.display="block";
   }
   
  // account details input and validation
    submit.addEventListener("click",function() 
    {
           var userAccountNumber=document.getElementById("inputAccountNumber").value;
             var userPassword=document.getElementById("inputPassword").value;
               var flag=acountNumberList.indexOf(userAccountNumber);
	                if(flag!=-1)
                         {    
                            index = flag;
                         }
                       if(userPassword===passwordsList[index])
                         {
                            validationResponse.style.display = "none";
                            alert("congrats");
                            accountHolderName.textContent=accountHolderNames[index];
                            balance.textContent = accountBalanceList[index];
                            form1.style.display = "none";
                            Response.style.display = "block";
                         }
                      
                      else
                      {
                           validationResponse.style.display = "block";
                           validationResponse.style.background = 'red';
                      }
       });               
           
           
           // validation close function
            validationClose.addEventListener('click',function()
              {
                 validationResponse.style.display="none";
              });
        
         
// logout function
           logout.addEventListener('click',function()
           {
               loginbutton.style.display = "block";
               Response.style.display = "none"; 
               document.getElementById("inputAccountNumber").value = '';
               document.getElementById("inputPassword").value = '';
           });               
//deposit opening 
            depositbtn.addEventListener("click",function()
                 {
                      Response.style.display="none";
                      depositSec.style.display="block"; 
                  });

 //deposit submitting 
            depositClose.addEventListener('click',function(){
                       var depositAmount=parseInt(document.querySelector(".depositType").value);
                       accountBalanceList[index]+=depositAmount;
                        var transdeposit={TransactionType:"DepositAmount",Amount:depositAmount ,Balance:accountBalanceList[index]};
                         transactionHistory.push(transdeposit);
                        
                    balance.textContent=accountBalanceList[index];
                               depositSec.style.display="none"; 
                               Response.style.display="block";
                               document.querySelector(".depositType").value='';
                             });     
              
//withdrawl opening
           withdrawbtn.addEventListener("click",function()
        {
            withdrawlSec.style.display="block";
            Response.style.display="none";
            
          });
          
// withdrawl submitting              
                    withdrawClose.addEventListener('click',function(){
                    var withdrawAmount=parseInt(document.querySelector(".withdrawType").value);
                     if(withdrawAmount<accountBalanceList[index]){
                             accountBalanceList[index]-=withdrawAmount;
                              balance.textContent=accountBalanceList[index];
                               var transWithdrawl={TransactionType:"WithdrawlAmount",Amount:withdrawAmount ,Balance:accountBalanceList[index] };
                         transactionHistory.push(transWithdrawl);
                       
                                withdrawlSec.style.display="none"; 
                               Response.style.display="block";
                             }
                             
                             else{
                                  alert(`your current balance is ${accountBalanceList[index]}
                                           please withdraw less than your balance`)
                                           }
                                           document.querySelector(".withdrawType").value='';
                         });
                              
// transaction opening
               transactionbtn.addEventListener('click',transactionFun);
               function transactionFun(type){
                      var trans='';
                       transactionSec.style.display="block";
                       Response.style.display="none";
                       if(type=="withdraws")
                       {
                     for(var i=0;i<transactionHistory.length;i++)
                          {                         
                          if(transactionHistory[i].TransactionType=="WithdrawlAmount")
                           {
                             trans+=`<tr style="color:red">                     
                                           <td>${i+1}</td>
                                           <td>${transactionHistory[i].TransactionType}</td> 
                                           <td>${transactionHistory[i].Amount}</td>
                                           <td>${transactionHistory[i].Balance}</td>
                                          </tr>`
                          }
                               tbody.innerHTML = trans;
                      }
                   }
                   else if(type=="deposits")
                   {
                       
                        for(var i=0;i<transactionHistory.length;i++)
                          {                        
                          if(transactionHistory[i].TransactionType=="DepositAmount")
                           {
                             trans+= `<tr style="color:green">                     
                                           <td>${i+1}</td>
                                           <td>${transactionHistory[i].TransactionType}</td> 
                                           <td>${transactionHistory[i].Amount}</td>
                                           <td>${transactionHistory[i].Balance}</td>
                                          </tr>`
                          }
                               tbody.innerHTML = trans;
                                                    
                       }
                  }
                   else{
                          for(var i=0;i<transactionHistory.length;i++)
                          {
                           var color1=(transactionHistory[i].TransactionType=="WithdrawlAmount")?"color: red" : "color: green" ;
                           
                           console.log(color1);
                             trans+= `<tr>                     
                                           <td>${i+1}</td>
                                           <td>${transactionHistory[i].TransactionType}</td> 
                                           <td>${transactionHistory[i].Amount}</td>
                                           <td>${transactionHistory[i].Balance}</td>
                                          </tr>`
                          }
                               tbody.innerHTML= trans;
                       }
                                              
         }
                   
//transaction close
           transactionClose.addEventListener('click',function(){
           transactionSec.style.display="none";
               Response.style.display="block";
                     
                           });
                           
           close.addEventListener('click',function(){
                      Response.style.display="block";
                      depositSec.style.display="none";
                       withdrawlSec.style.display="none"; 
                      
                      }
                );
 
                close1.addEventListener('click',function(){
                      Response.style.display="block";
                       withdrawlSec.style.display="none";                       
                      }
                );
 
 
