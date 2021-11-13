//Framework Developer Function

function functionRegistration(fun){
     gen=fun()
    function flow(){
      console.log("Part 1 is executing")
      data1="India"

      data2=gen.next().value  //user logic will run and you will get data

      console.log("Part2 is executing")
      if(data2)
      console.log(data1," is processed with ",data2)

      func=gen.next().value //user logic will run and you will get function executed
      
      
      console.log("Part3 is executing")
      if(typeof(func)=="function")
          func(data1+" "+data2)
       
      func2=gen.next().value

      console.log("Part4 is executing")
      if(typeof(func2=="function"))
            func2("Final Data")
      
      console.log("Finished execution")
      gen.next() //finishing user function


    }
    flow() 
}

/* ----------------------------------------------------------------
if this frame work has to work

user has to register a generator function by calling functionRegistration()

in the generator function 

user has to have three yields

1.yield string data

2. yield function 

3. yield function

*/

userdata="Germany"

userfunc1=function(functdata){
   console.log("user received",functdata)
}

userfunc2=function(functdata2)
{
    console.log("data for the second time",functdata2)
}

function* userProcess(){
    console.log("user process is started and would send germany to framework");
    yield userdata
    console.log("user process continues...about to pass function1")
    yield userfunc1
    console.log("user process still continues ... about to pass function2")
    yield userfunc2
    console.log("Wrapping of user task")
}

functionRegistration(userProcess)