let obj = {}

console.log(obj.__proto__)
console.log(obj.__proto__ == Object.prototype)

//
obj = new Object()
console.log(Object.prototype)
console.log(obj.__proto__)
console.log(Object.prototype.__proto__)

console.log(obj.toString())

//
let arr1 = [1, 2]
let arr2 = new Array(1, 2)
console.log(arr1.__proto__ == arr2.__proto__)
console.log(arr1.__proto__ == Array.prototype)

console.log(Array.prototype.__proto__)
console.log(Object.prototype)
console.log(Array.prototype.__proto__ == Object.prototype)

console.log(arr2)

//
let one = new Number(1)
console.log(one)

//
function User() {}
let user = new User()
console.log(user.toString())
console.log(obj.toString())