let user = {}

user.height = 200
user['weight'] = 80

console.log(user.height, user.weight)

delete user.weight
console.log(user.weight)

console.log('height' in user)
console.log('weight' in user)
// in은 boolean type return

for(let key in user) console.log(user[key])

user.name = 'parker'
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

//
user = {
    greet: function() {console.log('hello')}
}

user = {
    greet: () => console.log('hello')
}

user = {
    greet() {
        console.log('hello')
    }
}

user.greet()

// optional chaining 체이닝을 끝까지 갈 수도 있고, 중간에 멈출 수도 있다.
user = {}
let address = {}
user.address = address // address key의 value로 이용
address.street = 'sejong'
console.log(user.address.street) // user 객체 안의 address 안의 street
// console.log(user.city.name) city가 없기 때문에 사슬이 끊김(undefined)
// TypeError: Cannot read properties of undefined
console.log(user.city?.name)

let street
// street = user.city.street
street = user?.city?.street
console.log(street)
street = user?.city?.street ?? 'where'
console.log(street)

// user?.address = 'sejong' optional chaining은 할당연산자 오른편에 써야한다.

user = null
// user.greet()
console.log(user?.greet)
user = undefined
// user.greet()

//
user = {}
// user.greet()
console.log(user.greet?.())
