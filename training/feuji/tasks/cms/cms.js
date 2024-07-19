const baseUrl="http://localhost:3000/";
      let serviceUrl=`${baseUrl}services`;
      let service_list=document.querySelector('.service-list');
      async function gettingList()
  {   
   var listItems = await fetch(serviceUrl);
    response=await listItems.json();
   for( let i=0;i<response.length;i++){
    service_list.innerHTML += `
                        <li>
                        <img src="${response[i].image}"><img class="countImage" src="${response[i].countImage}">
                        <h1 class="service-title">${response[i].service_name}</h1>
                        <h3 class="service-subtitle">${response[i].designs}</h3>
                        <h5 class="service-description">${response[i].description}</h5>
                        </li>`
   
   }
   console.log(response)
}
gettingList();

