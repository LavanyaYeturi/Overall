const URL = "http://localhost:3000/details";
var responseData=[];

 var Servicedata={
       name:"sravani",
       gender:"female"
    }

    async function fetchData(url,method,data){
              let fetchedData = await fetch(URL,
                      {
            method,
            headers:
            {
          "content-type": "application/json"
            },
        body: JSON.stringify(data)
    });
         responseData = await fetchedData.json();
         console.log(responseData);
    }
    fetchData(URL,"post",Servicedata);
    fetchData(`${URL}/1`,"get");
   // fetchData(`${URL}/5`,"DELETE",Servicedata);
    