a=[3,53,534,2534,57,[45,645,645,6645]]
//b=a
b=[...a]
console.log(a)
console.log(b)
b[-10]='Rajan'
b[1000]="Jackson"
b['Jack']="India"
console.log(b)
console.log(b[-10])
console.log("------------------------------------")
for(let x in b) 
 console.log(x)

 console.log(a)
 console.log(a[5][3])