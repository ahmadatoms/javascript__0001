
//another type to declare string
const gameName = new String('ahmadhere')
//methods of strings
console.log(gameName[0])
console.log(gameName[1])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toLowerCase)
console.log(gameName.charAt(3)) 

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const newSTRING2 = "   ziaa  "
console.log(newSTRING2)
console.log(newSTRING2.trim())
 //convert string to arrays 
 console.log(gameName.split('_'))


 // maths in javascript
 console.log(Math)
 console.log(Math.abs(-4))
 console.log(Math.round(4.6))
 console.log(Math.ceil(4.3))
 console.log(Math.floor(4.2))
 console.log(Math.min(4,5,6,78,7))

 console.log(Math.random())
 console.log(Math.random()*10)


 const min = 10
 const max= 20
console.log(Math.floor(Math.random() *(max - min +1)) + min )