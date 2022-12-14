// serializing 객체를 string 형태로 만든다
let user = {
    name: 'kelly',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css'],
    wife: null
}

let json = JSON.stringify(user) // stringify: Object를 string type으로 바꿀때
console.log(json) // string type

//
user =  {
    name: 'jessie',
    room: {
        number: 23,
        participants: ['john', 'ann']
    },
    greet() {
        return 'hello'
    },
    [Symbol('id')]: 123,
    color: undefined // symbol, undefined는 json에서 무시
}

console.log(JSON.stringify(user)) // object: {}, 배열: []

//
let room = {
    number: 23
}

let meetup = {
    title: 'conference',
    room // 객체 안의 객체-serializing된다
}

console.log(JSON.stringify(meetup))

room.toJSON = function() {return this.number} // toJSON을 call해서 serializing한다
let s = JSON.stringify(meetup)
console.log(s)

// parsing 다시 객체로 만드는 것
let manJson = '{"name": "will", "age": 27, "mager": ["computer", "art"], "friend": {"name": "scott", "age": 27}}'
// mager는 배열 > [] 사용, friend는 객체 > {} 사용
let man = JSON.parse(manJson) // parse: parsing할때 사용
console.log(man)
console.log(typeof man)