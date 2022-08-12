function sayHi() {
    console.log('Hi')
}

setTimeout(sayHi, 1000) // 첫번째 파라미터를 큐에 집어 넣는다. delay를 준다 > 큐가 실행된다

//
function greet(phrase, who) {
    console.log(phrase, who)
}

setTimeout(greet, 2000, 'hello', 'knox')

//
let timeId = setTimeout(() => console.log('hoo'), 3000)
clearTimeout(timeId) // 큐에 넣었던 것을 없앤다