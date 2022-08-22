let id = Symbol() // description 값을 주지 않았다(description = parameter)
let id1 = Symbol('id') // symbol에 대한 설명, description
let id2 = Symbol('id')

console.log(id, id1, id2)

console.log(id1 == id2) // symbol이 call 될때마다 새로운 값이 만들어지기 때문에 다르다

console.log(id.toString())
console.log(typeof id)

console.log(id1.description, id2.description, id.description)

let user = {
    name: 'neo' // string type
}

let userId = Symbol('uerId') // symbol을 property로 쓰려면 ''를 붙여야 한다
user.userId = 1  // userId property 추가
user[userId] = 2 // symbol type

console.log(user)

// 과제: user 객체를 iterating 해서, key들을 출력하라.
for(let key in user) console.log(key)
// symbol은 조회가 안된다

console.log(Object.keys(user))

// global symbol registry
id1 = Symbol.for('id')
id2 = Symbol.for('id')
console.log(id1 == id2) // 같은 symbol이다

let key = Symbol.keyFor(id1) // keyFor: symbol의 key값을 알고싶을 때 사용한다
console.log(key, typeof key)

//
id1 = Symbol.for('name') // global symbol : key이다.
id2 = Symbol('name') // local symbol : key x, description이다.
console.log(id1 == id2)

console.log(Symbol.keyFor(id1), Symbol.keyFor(id2))