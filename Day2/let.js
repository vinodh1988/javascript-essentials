x=100
for(let x=10;x<30;x+=2)
   console.log(x)

console.log("---------------------------------")
console.log(x)

function block(){
    var a=300
    console.log("a ",a)
    {
       let a=900
       console.log("within block a",a)
    }
    console.log("outside block a",a)
}

block()