class User { //sugar syntax 생성자를 만드는 것 보다 클래스를 만드는 것이 더 쉽다, 쉬운 문법이다
    constructor(name) {
        this.name = name
    }

    introduce() {
        console.log(`I am ${this.name}.`)
    }
}

let user = new User('john') // User는 생성자이다, 위 코드와 동일하다
console.log(user.name)
user.introduce()

//
User = class {
    name
    age

    constructor(name, age) {
        this.name = name // 17번째 줄의 name이다
        this.age = age
    }

    introduce() {
        console.log(`${this.name} / ${this.age}`)
    }
}

new User('abel', 12).introduce()

//
function makeClass(phrase) {
    return class {
        sayHi() {
            console.log(phrase)
        }
    }
}

User = makeClass('hello')
new User().sayHi()
