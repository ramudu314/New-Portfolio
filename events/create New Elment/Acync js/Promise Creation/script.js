// function fetchData(){
//    return new Promise((reslove,reject)=>{
//      fetch("")
//      .then(response => {
//       if(response.ok){
//          reslove("Failed to fetch the Data");
//       }else{
//          reject
//       }
//      }
//    })
// }

// 2. Async Awiat - try catch


// async function fetchData(){
//    try{
//       const response = await fetch("")
//       const data = await response.json()
//       return data

//    }catch(error){
//       console.error("failed",error)
//       throw error;

//    }
// }

// async function processData(){
//    try{
//    const data = await fetchData();
//    console.log("data fetched Succesfull",data)
// }catch(error){
// console.log("failed to fecth",error)
// }
// }
// processData(s)




const pokemanServerPromise = new Promise((reslove, reject)=>{
   setTimeout(()=>{
      reslove({
         name : "pikachu",
         ability: "lighting thunder",
      });
   },5000);
});

pokemanServerPromise.then((data)=>{
   console.log(data,"pokemon data")
});



