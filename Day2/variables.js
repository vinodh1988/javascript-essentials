a=20

get()

function get(){
         //within a function if you define any variable without specifying keywords like var,const, let it is global
    //a=20 //global variabl
    console.log(a)
    a=a+50
    console.log(a)
}

get()
get()
console.log("-------------------------------------------")
console.log(a)
