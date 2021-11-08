function* producer(){
    console.log("Part1")
    yield "INDIA"
    console.log("part2")
    yield "GERMANY"
    console.log("part3")
    yield "ITALY"
    console.log("NOTHING GOING TO END")
}

function caller(){
    /*p=producer()
    console.log(p.next().value)
    console.log(p.next().value)
    console.log(p.next().value)
    p.next()*/

    for(let x of producer()){
        console.log(x)
    }
}

caller()