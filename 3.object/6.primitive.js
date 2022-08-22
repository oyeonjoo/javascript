let date1 = new Date(2025, 5, 5)
let date2 = new Date(2025, 5, 4)

console.log(date1 - date2) // 단위는 ms, number type으로 바뀌어서 결과가 나왔다

let user = {
    name: 'amanda',
    age: 20,
    [Symbol.toPrimitive](hint) { // Symbol은 []를 사용한다, hint를 파라미터로 받는 메소드이다. hint는 변수이다. 데이터타입이 없다. 자유롭게 담을 수 있다
        return hint == 'string' ? this.name : this.age
    } // string이면 name, 아니면 age return
} // user가 문자나 숫자로 바뀐다

console.log(`${user}`) // `${}`는 string type이다

let user2 = {
    age: 38,
    [Symbol.toPrimitive]() { // ()는 hint 값에 default
        return this.age
    }
}


console.log(`${user}`)
console.log(user > user2)
console.log(user + 50) // toPrimitive는 + 연산자가 오면 default값으로 설정된다
console.log(user2 + 50)

//
user = {
    name: 'neo',
    age: 11,
    toString() { // 문자로 바꾸는 상황
        return this.name
    }
}

console.log(user + '') // string type

user.valueOf = function() { // 숫자로 바꾸는 상황
    return this.age
}

console.log(user + 100) // valueOf가 user를 number로 바꿔준다

//
userStr = JSON.stringify(user) // 객체가 아니다, 객체를 주고 받을 때 JSON.stringify를 사용해서 문자로 바뀐다
console.log(userStr) 
console.log(typeof userStr)

// serializing 객체를 기본타입으로 바꾸는 작업
// deserializing 파싱한다.

// 한 객체 안에 전부 있으면, Symbol.toPrimitive를 제일 먼저 사용, toString > valueOf 사용