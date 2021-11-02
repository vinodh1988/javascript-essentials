//library

//return statement can return value only once

//once returned the control cannot stay at the function position


function multi_phase_fun(phase1input,phase2input,finishinput,callback){
  console.log("phase 1 is executing ",phase1input)
  callback("phase 1 output")
  console.log("phase 2 is executing ",phase2input)
  callback("phase 2 output")
  console.log("final phase is executing ",finishinput)
}

function caller(){
    multi_phase_fun('task1','task2','wrapping task',(output)=>{
        console.log("caller is processing ",output)
    })
}

caller() 

// a function which is passed as a parameter to another function is called callback 
// function
// because the function would be called back by the function in execution