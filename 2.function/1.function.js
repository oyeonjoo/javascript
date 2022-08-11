function greet() {
    console.log('hello')
}

greet()

let salute = function() {
    console.log('hi')
} // 데이터 쓰기, functiond에 salute라는 이름을 붙여준 것이다

salute() // 데이터 읽기
console.log(salute)

let sayHello = function(user, greeting) {
    return `${greeting}, ${user}` // template literal
}

console.log(sayHello('rebeca', 'hello'))

// 과제: HI 라고 인사하는 function을 정의하고, 실행하라.
const sayHi = function() {
    console.log('HI')
}
const say = sayHi // sayHi 변수에 있는 값을 복사해서 say에 할당
say()

///
let shout = function() {
    return function() {
        console.log('yoo hoo')
    }
}
let speak = shout()
speak();

///
(function() {
    console.log('earth')
})()
// 데이터에 이름을 붙이지 않으면 에러이다, function 전체를 괄호로 묶고 이름없는 function: 일회용으로 사용 가능하다.
// 이전 명령문에는 ; 을 꼭 써줘야한다

//
let myFn = function(fn) {
    const result = fn()
    console.log(result)
}

myFn(function() {
    return 'moon'
})
// 펑션은 데이터이다. 파라미터로 펑션을 받고, 그 펑션을 콜해서 return값을 result 값으로 받는다
// return 값이 있어야 사용 가능하다.

let argFn = function() {
    return 'star'
}
myFn(argFn)

let showMsg = function(from, msg='no message'){ // msg에 기본값을 할당하면 undefined가 출력되지 않는다
    console.log(`${from}: ${msg}`)
}
showMsg('trinity', 'follow rabbit')
showMsg('trinity') // 파라미터가 1개라고 에러처리되지 않는다.