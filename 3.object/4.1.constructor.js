let makeUser = function(name, age) {
    return {
        name: name,
        age: age
    }
}

makeUser = function(name, age) {
    return {
        name,
        age
    }
} // 1~6 의 코드에서 중복된 코드를 제거한 것이다.

console.log(makeUser('doris', 57))

//
function User(name) {  // 생성자 fn이다
    // this = {} 직접쓰지 않아도 알아서 추가된다. 직접쓰면 에러이다.
    this.name = name
    this.greet = () => console.log(`I am ${this.name}.`)
    return this // 직접쓰지 않아도 알아서 추가된다. 직접써도 된다.
} // 생성자 fn안에서만 this를 사용 가능하다. this객체는 아무것도 들어있지않은 깨끗한 상태이다.

// const user1 = User('bob') // 위 함수에서 return, 출력하는 것이 없기 때문에 아무것도 없다
let user1 = User('bob') // undefined, new가 없으면 일반 > 생성자가 아니라서 this명령문이 없기 때문에 error
user1 = new User('bob') // new를 붙여야 한다, User {name: undefined, greet: ƒ}, 생성자로 작동한다
console.log(user1)

user1.greet()
console.log(Object.keys(user1))

const user2 = new User('sarah')
user2.greet()

//
let str = String(1) // 일반 fn
console.log(typeof str)

str = new String(1) // 생성자 fn
console.log(typeof str)

//
let human = new function() {
    this.name = 'meg'
    this.age = 27
} // 이름없는 함수

console.log(typeof human, human.name)

//
function BigUser() {
    this.name = 'amy'
    return {name: 'beth'} // 일부러 return을 적어서 this가 아닌 다른 객체를 return할 수 있다
} // new를 써도 안써도 return되는 객체는 같다

function SmallUser() {
    this.name = 'lorie'
}

console.log(new BigUser().name, new SmallUser().name)

// console.log(BigUser().name, SmallUser().name) // SmallUser는 return값이 정해져있지 않아서 error
// 과제: new를 하지 않고, 앱이 살도록 위 코드를 수정하라.
console.log(BigUser().name, SmallUser()?.name) // SmallUser는 return값이 정해져있지 않아서 error

//
const user = new Object() // 기본 property만 가진 깨끗한 객체
console.log(user) // user객체에 entry를 추가할 수 있다
user.age = 12

//
const person = Object.create(user) // 복제
console.log(person)
console.log(person.age)
console.log(person == user) // 복제한 객체는 다른 객체이다

person.name = 'mandarin'
console.log(user) // age값만 가지고 있다