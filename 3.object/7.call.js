let user1 = {
    name: 'isabel',
    greet() {
        console.log(`I am ${this.name}.`)
    }
}

let user2 = {
    name: 'jade',
    greet() {
        console.log(`I am ${this.name}.`)
    }
}

user1.greet()
user2.greet()

//
let name = 'morpheus'

function greet() { // 메소드가 아니다
    console.log(`I am ${this.name}.`) 
}

greet()

greet.call(user1) // 주어로 나온 fn 을 call
greet.call(user2) // call 메소드로 this변수를 고를 수 있다

//
user2 = {
    name: 'colin'
}

user1.greet()
//user2.greet() error: user2에는 greet 메소드가 없다

// 과제: user1.greet 을 이용해서 I am colin. 을 출력하라.
user1.greet.call(user2)
// call은 주어fn을 call하고, bind는 fn을 return한다