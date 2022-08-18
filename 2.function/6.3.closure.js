function makeFn() {
    let name = 'parker'

    function displayName() {
        console.log(name)
    }

    return displayName
}

let myFn = makeFn()
myFn()

/* 
11줄 실행 > global 객체 생성(A) > makeFn, myFn 생성 > 다른 객체(B)에서 fn 복사해서(A) outer값사용
> name: parker 할당 > display: fn 할당 > return된 fn이 myFn에 할당 >
*/