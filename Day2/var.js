a=300

function inner(){
    a=90
    console.log(a)
     var a=400 //variable scope is at function level
    console.log(a)
}

inner()
console.log(a)