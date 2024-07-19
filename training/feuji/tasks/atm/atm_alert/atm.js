 var choice;
 var accNo,pwd;
 var flag=false;
 var deposit;
 var withdrawl;
 var accountNumbers=["21911018","21911026","21911043"];
 var passwords=["lav","sam","samanya"];
 var balance=["10000","20000","30000"];
 var choiceArray=[`
                 "Type 1 for Balance Checking"
                 " Type 2 for Deposit "
                 "Type 3 for Withdrawl"
                 "Type 4 for your Transaction history"
                 " Type 5 for Logout "
                 "Type 6 for Exit "`];
 var indexValue;
 var transactionHistory=[];
	var TransactionType;		   	
		var Amount;	 
			   
 
  
  
 
 
  function loginAccDetails(row)
  {
		        alert('*****WELCOME TO FEUJI ATM SERVICES*****');
			alert('----------please login to your account-------'); 
			 accNo =prompt("Please Enter Your Account Number :");
			 for (var row = 0; row<accountNumbers.length ; row++)
			 {
			   
			    
			      if(accNo==accountNumbers[row])
			         {
			               indexValue=row;
			               alert(indexValue);
			            pwd=prompt("Please Enter Your Account password :");
			            }
			            }
			            if(pwd==passwords[indexValue])
			            {
			               alert("successfully you have been logged in to your account");	                   
			               }
			                else
			               {
			               alert(" please enter valid details");
			                   return loginAccDetails();
			                   selectOptions();
			                   }
			
                                  
                         
                         
                         return indexValue;
        }
        // calling login process
	
var index=loginAccDetails();
        selectOptions();
                    
         function selectOptions()
                         
			{
                       alert("Welcome To Your Account:" + accNo);
		       alert(choiceArray+"\n");
	                var choice=prompt(`Enter Your Choice : ${choiceArray}`);
	                switch (choice)
	                   {
			      case "1":
				    CheckBalance();
				    selectOptions();
				break;
			      case "2":
				    Deposit();
				    selectOptions();
				break;
			      case "3":
				    Withdrawls();
				    selectOptions();
				break;
				case "4":
				      transHistory();
				      selectOptions();
			     case "5":
				    logout();
				    loginAccDetails();
				    selectOptions();
				break;
				
			     case "6":
			
				    Exit();
				    break;
			  }
			  return choice;
		    } 
		    
		    
              
	
		
	
	
 // checking your account balance
       function CheckBalance()
          {
            
            alert("your current balance is  "+balance[index]);
            
            }
         
  // to deposit 
        function Deposit() 
            {
                deposit=parseInt(prompt("please enter your deposit amount"));          	
            var transDeposit={TransactionType:" Depositing Amount",Amount:+deposit};
            transactionHistory.push(transDeposit);
          	balance[index]=parseInt(balance[index])+deposit;
          	alert(`your deposit has been successful.
          	your current balance is ${balance[index]} `);
          	
           }
      
  // to withdrawl
          function Withdrawls() 
            {
                  alert("your current  balance is"+balance[index] +"\n maximum amount to withdrawl is"+balance[index] );
                  withdrawl=prompt("please enter your withdrawl amount");
                     if(withdrawl<balance[index])
                         {
                         var transWithdrawl={TransactionType:" Withdrawl Amount",Amount:+withdrawl };
                         
                         
                         transactionHistory.push(transWithdrawl);
                         
                           var total=balance[index]-withdrawl;
                           alert("your remaining balance :"+total);
                           balance[index]=total;
                           
                        }
                    else
                        {
                          prompt("please withdraw according to your balance");
                        }
                     
             }  
               
               
   //function to get your transaction history
               function transHistory()
               {
                     var trans='';
                  for(var i=0;i<transactionHistory.length;i++)
                  {
                      trans +=`<tr>                     
                                  <td>${i+1}</td>
                                   <td> ${transactionHistory[i].TransactionType}</td> 
                                    <td>${ transactionHistory[i].Amount}</td>
                                </tr>`
                   }   
                         
                     
                       
                  }
                  alert(trans);
                 
               
   //function for logout from your account
            function logout() 
             {
             
                alert("Logout Succesfull");
                
             }
      
     
  // funtion to exit from the process
          function Exit() 
              {
       	         
		 alert("YOU HAVE BEEN EXITED SUCCESSFULLY");
              }
        
