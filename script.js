// let res = await fetch("https://valorant-api.com/v1/agents")


// function to fetching error for url
function fetchingData(url){
    return new Promise((resolve, reject) => {
      fetch(url).then((response)=>{
        if(!response.ok){
          reject(new Error(`${response.status} ${response.statusText}`))
        }
        return response.json();
      })
      .then((data)=>{
        resolve(data);
      })
      .catch((error)=>{
        reject(error);
      })
    })
  }
  
  // async fucntion to get error from the fetching data
  
  async function fetchData(url){
    try {
      const response = await fetchingData(url)
      display(response);
    } catch (error) {
      console.log("Error Found", error);
    }
  }
  
  let url = "https://valorant-api.com/v1/agents";
  fetchData(url);
  let card = document.getElementById('card')
  
  // // fetch('https://rickandmortyapi.com/api/character')
  // .then((res)=>res.json())
  // .then((res)=>display(res))
  function display(data){
      let arr = Object.entries(data) 
      let arr1 = arr[1][1]
          for(let i=0; i<arr1.length ; i++){
              
            //  console.log(arr1[i]); 
  
          let cardDetails =`
          <div class="col-xs-6 col-sm-4 col-md-3 i">
          <div class="c text-center">
              <div class="wrap">
                  <img src="${arr1[i].displayIconSmall}" alt="#" width="150" height="150" class="img-responsive">
                  <div class="info">
                      <h3 class="name">${arr1[i].displayName}</h3>
                      <h6 class="position">Developer Name : 
                      ${arr1[i].developerName}
                      </h6>
                  </div>
              </div>
              <div class="more">
                  <p>${arr1[i].description}</p>
              </div>
          </div>
      </div>
 
          `
          card.innerHTML += cardDetails
  
              // console.log(cardDetails);
      
          }}
    
  
  
  