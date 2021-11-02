class Person {
sno=1;
name="Rajan"
    constructor(sno,name){
        if(sno && name){
        this.sno=sno
        this.name=name
        }
    }

    display(){
        console.log(this.sno,this.name)
    }
}

obj1=new Person(12,"Rahul")
obj2=new Person(13,'Kay')
obj3=new Person()
obj1.display()
obj2.display()
obj3.display()