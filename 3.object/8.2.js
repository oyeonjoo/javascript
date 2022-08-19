let user = {
    name: 'leo'
}

function greet() {
    console.log(`I am ${this.name}.`)
}

greet()

let fn = greet.bind(user)
fn()

setTimeout(fn, 100)

//
user = {
    name: 'john',
    greet() {
        console.log(`I am ${this.name}.`)
    }
}

// 과제: user.greet 을 할당하라. greet의 this엔 user가 담겨 있다.
fn = user.greet.bind(user)
setTimeout(fn, 200)

console.log(fn == user.greet)