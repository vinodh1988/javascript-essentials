
class Test{
    value="India"

    display(){
        console.log("value is ",this.value)
    }
    
    valueChanger(){
        //valueProvider(function(data){this.value=data}.bind(this))
        valueProvider(data=>this.value=data)
    }
}


function valueProvider(callback){
    console.log("Working hard and producting value")
    callback("Germany")
    console.log("Job is wrapped")
}

obj=new Test()
obj.display()
obj.valueChanger()
obj.display()