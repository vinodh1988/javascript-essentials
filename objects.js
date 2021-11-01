a= {
    sno: 1,
    name: "Vinodh",
    city: "Chennai"
}

console.log(a)

a.skills = ['Java','CSS','Python']

console.log(a)
console.log(a.name)
c='city'
console.log(a[c])

delete a.city;
console.log(a)

console.log('------------until phase 1---------------')

b=a //pass by reference

console.log(b)
b.place='Bangalore'
console.log(b)
console.log(a)
console.log("--------------------until phase 2-------------")
c={sno:a.sno,name:a.name,place:a.place,skill:a.skills}

console.log(c)
c.place="Mumbai"
console.log(c)
console.log(a)

console.log("--------------------until phase 3-------------------")

for(let x in c)
   console.log(x,'  ',c[x])

   