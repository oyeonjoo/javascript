const age = 16

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

// 스크립트 로딩 > 글로벌 객체가 생긴다 - 레코드: age가 생긴다-uninitialized > 16으로 바뀐다
// 블럭실행(le객체생성) > 레코드: age(uni), sayAge(fn), tellAge(uni)가 생긴다 > 실행되면
// age: 10, tellAge: fn할당 > sayAge call > le객체가 생긴다
// (le객체생성)레코드는 없다
// tellAge call > (le객체생성)레코드는 없다