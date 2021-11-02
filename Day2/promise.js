function IDontHaveItNow(){

    return new Promise(function(resolve,reject){
  
        setTimeout(function(){
            resolve("Got it !!! Take it")
      },3000);

    });
  
}
/*
function callPromise(){
caller=IDontHaveItNow();

caller.then(
    (result)=> {
        console.log(result)
        console.log("related logic")
    },
    (error)=> console.log(error)
)

}*/

async function callPromise(){
try{
    caller=await IDontHaveItNow();
    console.log(caller)
    console.log("Related logic")
  }
catch(e){
    console.log(e)
}
}

callPromise();

//console.log(caller)

//the function gets the value from a source asynchronously
//not immediatly there will be delay in getting the data from source
//Javascript is asynchronous in nature