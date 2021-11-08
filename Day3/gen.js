globe="open"
function* provider(){
    console.log(globe!="stop")
    while(globe!="stop"){
        console.log("Executing about to yield a value")
        yield Math.round(Math.random()*1000)
    }
}

function caller(){
    let x = provider();
    
    for(let i=1;i<=3;i++){
    let current=x.next();
    console.log(current)
   }
   globe="stop"
    current=x.next()
    console.log(current)
   }


caller()