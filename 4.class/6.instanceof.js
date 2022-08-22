class A {}

class B extends A {}

let a = new A()
let b = new B()

console.log(a instanceof A, a instanceof B, a instanceof Object) // true false true
console.log(b instanceof A, b instanceof B, b instanceof Object) // true true true

console.log(typeof a, typeof b) // object object
console.log(typeof A, typeof B) // function function, A와 B는 생성자이다