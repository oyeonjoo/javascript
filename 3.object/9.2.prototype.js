let obj = {}

console.log(obj.__proto__) // obj생성자는 node.js가 기본으로 가지고 있다
console.log(obj.__proto__ == Object.prototype)

//
obj = new Object()
console.log(Object.prototype)
console.log(obj.__proto__)
console.log(Object.prototype.__proto__) //null, 생성자 프로토타입의 값은 없다

console.log(obj.toString()) // toString : fn

//
let arr1 = [1, 2] // 16번째줄 코드를 간략히 표현
let arr2 = new Array(1, 2) // 생성자를 써서 표현
console.log(arr1.__proto__ == arr2.__proto__)
console.log(arr1.__proto__ == Array.prototype)

console.log(Array.prototype.__proto__) // 모든 생성자의 프로토타입은 오브젝트의 프로타입을 프로토타입으로 삼는다(부모로 둔다)
console.log(Object.prototype)
console.log(Array.prototype.__proto__ == Object.prototype)

console.log(arr2) // [1, 2]

//
let one = new Number(1)
console.log(one) // Number(1)

//
function User() {}
let user = new User()
console.log(user.toString()) // [object Object], user prototype에 없어서 Object prototype을 사용한다
console.log(obj.toString()) // [object Object]