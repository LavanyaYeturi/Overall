  document.querySelector(".submitBtn").addEventListener('click',userInput);
  async function userInput()
    {  
let titleInput=document.querySelector('.titleInput');
let subTitleInput=document.querySelector('.subTitleInput');
let descriptionInput=document.querySelector('.descriptionInput');
let statusInput=document.querySelector('.statusInput');
let imageUrlInput=document.querySelector('.imageUrlInput');
           var orderFetch= await fetch("http://localhost:3000/services",
            {
              method:"POST",
              headers:
                {
                 "content-type":"application/json"
                },
              body:JSON.stringify({"image":imageUrlInput.value,"service_name":titleInput.value,"designs":subTitleInput.value,"description":descriptionInput.value,"status":statusInput.value})
            });  
             var user_orders=await orderFetch.json();
              console.log(user_orders);
              titleInput.value='';
              subTitleInput.value='';
              descriptionInput.value='';
              statusInput.value='';
              imageUrlInput.value='';


          }
    