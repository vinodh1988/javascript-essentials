a=function(){
  console.log("Super function")
}

function callme(){
    console.log("This is called")
}

b=callme;

a();
b();

c=[23,4525,534,function(){console.log("I am part of array")}]
d={sno:1,name:'John',
    display:function(){
        console.log(this.sno,this.name)
    }}

console.log(c)
c[3]()
d.display()