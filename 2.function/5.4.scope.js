// sayHi(): f이 바로 준비되고, 순서대로 실행된다. function 에서 body가 실행되는 시점에는 name이 없어서 에러
// ReferenceError Cannot access 'sayHello' before initialization

let name = 'neo'
sayHi()

function sayHi() { // function declaration
    console.log('Hi,', name)
}

sayHi()

//
//sayHello() // ReferenceError Cannot access 'sayHello' before initialization

const sayHello = function() { // function expression
    console.log('Hello', name)
}

sayHello()