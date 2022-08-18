// prototype: 부모 객체
let animal = {
    isAlive: true
} // isAlive, prototype 두 가지 속성을 가지고 있다

function Rabbit(name) {
    this.name = name
} // name, prototype 두 가지 속성을 가지고 있다

console.log(Rabbit.prototype) // prototype에 대한 별명
// fn의 부모는 object다
let rabbit = new Rabbit('black')
console.log(rabbit.isAlive) // rabbit에 isalive라는 속성은 없다, undefined

//
Rabbit.prototype = animal // rabbit 생성자의 부모로 animal을 삼는다
console.log(Rabbit.prototype)

rabbit = new Rabbit('white')
console.log(rabbit.isAlive)

/*
animal 객체 생성 : isAlive 라는 속성을 가지고 있다
rabbit fn : prototype이라는 기본속성을 가지고 있다
rabbit은 constructor과 서로 마주보고 있다
생성자(constructor)로 만들어진 객체의 prototype은 다 같다
 */

//
function Duck(name) {
    this.name = name
}

console.log(Duck.prototype)
console.log(Duck.prototype.constructor)
console.log(Duck.prototype.constructor == Duck)

let duck = new Duck('duck')
console.log(duck.__proto__) // getter
console.log(duck.__proto__.constructor)

let duck2 = new Duck('duck2')
console.log(duck2.__proto__ == duck.__proto__) // 생성자로 만들어진 객체의 프로토타입은 같다

let duck3 = new duck.__proto__.constructor('duck') // 생성자로 객체 생성
duck3 = new duck.constructor('duck') // duck 객체에서 constructor가 없어서 부모객체(프로토타입)의 프로토타입을 참조한다
