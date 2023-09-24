
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