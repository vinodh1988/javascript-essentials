function IDontHaveItNow(){

    return new Promise(function(resolve,reject){
  
        setTimeout(function(){
            resolve("Got it !!! Take it")
      },3000);

    });
  
}

caller=IDontHaveItNow();

caller.then(
    (result)=> console.log(result),
    (error)=> console.log(error)
)

//console.log(caller)

//the function gets the value from a source asynchronously
//not immediatly there will be delay in getting the data from source
//Javascript is asynchronous in nature