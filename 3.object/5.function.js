function sayHi(myName, ...jobs) { 
    console.log(`Hi, I am ${myName}.`)
} // fn = 객체

sayHi('john')

console.log(typeof sayHi)
console.log(sayHi.name) // 객체.속성, sayHi 객체의 name
console.log(sayHi.length) // rest 파라미터는 제하고 length를 구한다

//
let user = {
    sayHi() {},
    sayBye() {}
}

console.log(user.sayHi.name)
console.log(user.sayBye.name)

//
sayHi = function() {
    let count = 100 // count는 블럭안의 지역변수이다, fn의 속성은 아니다, sayHi에 count는 없다
    console.log('hi')
    console.log(sayHi.count++) // NaN
}

sayHi()
console.log(`call count: ${sayHi.count}`)

sayHi.count = 0 // sayHi에 count 속성 추가
sayHi()
sayHi()
console.log(`call count: ${sayHi.count}`)