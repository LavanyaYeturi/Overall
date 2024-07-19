const baseUrl="http://localhost:3000/";
      let serviceUrl=`${baseUrl}services`;
      let tableContent=document.querySelector('.tableContent');
      let table= document.querySelector('.table');
      
      async function gettingList()
  {   

    table.style.display="block";
    tableContent.innerHTML='';
   var listItems = await fetch(serviceUrl);
    response=await listItems.json();
   for( let i=0;i<response.length;i++){
      if(response[i].status=="Active"){
    tableContent.innerHTML += `
                        <tr>
                        <td>${i+1}</td>
                        <td><img class="service_image" src="${response[i].image}"></td>
                        <td>${response[i].service_name}</td>
                        <td>${response[i].designs}</td>
                        <td>${response[i].description}</td>
                        <td>${response[i].status}<td>
                        </tr>`
   }
  }
   console.log(response)
}


