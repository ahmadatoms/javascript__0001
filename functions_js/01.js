function sayMyname(){
    console.log("d")
    console.log("l")
    console.log("j")
    console.log("k")
    console.log("f")
    console.log("n")
}
sayMyname()
 
//******************* */
function addTwonumbers(number1,number2){
    let result = number1+number2
    return result
 }
const result = addTwonumbers(3,4)
console.log(result)

//************* */
function loginUsername(username){
    return `${username} just logged in`
}
console.log(loginUsername("Ahmad"))

//************************ */

// (...rest operator)
function calculateCardPrice(...num1){
return num1
}
 
console.log(calculateCardPrice(200,400,5000))

//*********************** */

const user = {
    brandname : "ahmad",
    price : "400000"
}
function handleObject(anyobject){
    console.log(`brandname is ${anyobject.brandname} and price is ${anyobject.price}`)
}
handleObject(user)