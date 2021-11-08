
function readPeople(){ 
    
   return  new Promise(function(resolve,reject){ 
     $.get("http://localhost:4500/people",function(data,status){
        if(status==="success")
         resolve(data)
        else
         reject("no Data received")
       })
 })
}

function caller(){
   let promise = readPeople()
   promise.then(
       (data)=>console.log(data),
       (error)=>console.log(error)
   )
}

async function caller2(){
    try{
    let value= await readPeople()
    console.log(value)
    }
    catch(e){
        console.log(e)
    }

}


caller()
caller2()