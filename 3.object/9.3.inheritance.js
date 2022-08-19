let animal = {
    name: 'animal'
}

animal = new Object()
animal.name = 'animal'

// 과제: 토끼를 object literal 및 생성자로 만들어라.
//       토끼는 age = 3 property를 갖고 있다.
let rabbit = {
    age: 3
}

rabbit = new Object()
rabbit.age = 3

console.log(animal.__proto__)
console.log(rabbit.__proto__)

console.log(animal.name, rabbit.age)

rabbit.__proto__ = animal // 상속관계를 표현한 것이다 rabbit is animal
console.log(rabbit.__proto__)
console.log(rabbit.name, rabbit.age)

//
animal = {
    walk() {
        console.log('animal walk.')
    }
}

rabbit = {
    __proto__: animal
}

rabbit.walk()

//
let user = {
    name: 'user'
}

let administrator = {
    __proto__: user
}

console.log(administrator.name) // user

administrator.name = 'jonadan'
console.log(administrator.name) // jonadan

//
animal = {
    name: 'animal',
    weight: 50,
    eat() {
        console.log(`${this.name} eat.`)
    }
}

rabbit = {
    name: 'rabbit',
    __proto__: animal
}

let lion = {
    name: 'lion',
    __proto__: animal // lion is animal
} 

animal.eat() // animal eat.
rabbit.eat() // animal의 eat, this.name의 rabbit
lion.eat() // lion eat.

//
console.log(Object.keys(rabbit)) // 내 객체의 속성만 볼 수 있다

// 과제: rabbit 의 key 들을 iterating 해서 출력하라.
for(let key in rabbit)
    console.log(key) // 상속관계를 따라가서 해당 객체가 사용할 수 있는 속성을 다 출력한다

for(let key in rabbit) {
    let isOwn = rabbit.hasOwnProperty(key)
    if(isOwn) msg = `child's key: ${key}`
    else msg = `parent's key: ${key}`
    console.log(msg)
}
