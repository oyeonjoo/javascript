let user = {
    name: 'leo'
}

function greet() {
    console.log(`I am ${this.name}.`)
}

greet() // 앞에 부모객체가 없어서 undefined

let fn = greet.bind(user) // bind에 넣는다, user 객체를 this변수에 집어넣는다
fn() // call은 주어fn을 call하고, bind는 fn을 return한다

setTimeout(fn, 100)

//
user = {
    name: 'john',
    greet() {
        console.log(`I am ${this.name}.`)
    }
}

// 과제: user.greet 을 할당하라. greet의 this엔 user가 담겨 있다.
fn = user.greet.bind(user) // greet fn이 리턴된다
setTimeout(fn, 200)

console.log(fn == user.greet)