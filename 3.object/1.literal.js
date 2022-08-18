let user = {
    name: 'frances', // entry
    age: 70
}
// key, value로 표현(각 각 하나를 entry라고 한다 ','로 구분한다)

user = {
    name: {
        first: 'bob',
        last: 'smith'
    },
    'nick name': 'tiger face',
    age: 13,
    interests: ['music', 'movie'],
    sing: () => console.log('lala')
} // 4개의 속성을 가지고 있다

console.log(user.name) // name 뒤의 value를 읽는다
console.log(user.name.first) // first 뒤의 value를 읽는다
// console에 lala가 출력되도록하라.
user.sing()

// user.'nick name'
// user.nick name
console.log(user['nick name'])
console.log(user['name']['first'])

user.name.first = 'john'
user['age'] = 50
console.log(user.name.first, user.age)

let key = 'nick name'
console.log(user[key]) // ()안에 변수를 넣어서 활용할 수 있다
key = 'age'
console.log(user[key])

let man = {
    name: 'samuel',
    1: 'one', // 1은 string이다
    2: 'two'
}

// man.1
console.log(man['1'])