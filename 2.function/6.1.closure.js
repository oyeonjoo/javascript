const age = 16
// sayAge() //  TypeError: sayAge is not a function, sayAge()가 존재하는데 데이터 타입이 fn이 아닌것)
// tellAge() // ReferenceError: tellAge is not defined, tellAge()가 없어서 참조할 수 없다
console.log(sayAge) // undefined, sayAge는 존재한다. 하지만 데이터 타입이 fn이 아니다
// console.log(hello) // ReferenceError: hello is not defined, 존재하지 않는다

{
    let age = 10

    function sayAge() {
        console.log(age)
    }

    let tellAge = function() {
        console.log(age)
    }

    sayAge()
    tellAge()
}

sayAge() // 실행된다
// tellAge() ReferenceError: tellAge is not defined, tellAge()는 global에 없기 때문에


// 스크립트 로딩 > 글로벌 객체가 생긴다 - 레코드: age가 생긴다-uninitialized > 16으로 바뀐다
// 블럭실행(le객체생성) > 레코드: age(uninitialized), sayAge(fn), tellAge(uninitialized)가 생긴다
// 블럭 실행되면 >
// age: 10, tellAge: fn할당 > sayAge call > le객체가 생긴다
// (le객체생성)레코드는 없다
// tellAge call > (le객체생성)레코드는 없다

// fn도 데이터이다. fn은 객체이다.

// closure: 외부에 있는 변수를 참조할 수 있는 fn