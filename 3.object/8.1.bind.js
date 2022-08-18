let user = {
    name: 'madonna',
    greet() {
        console.log(`I am ${this.name}.`)
    }
}

user.greet()

//
setTimeout(user.greet, 100)

let fn = user.greet
setTimeout(fn, 200)

//
setTimeout(() => user.greet(), 300) // greet fn을 큐에 등록한 것이 아니다