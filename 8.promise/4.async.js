async function f() { // new Promise 대신 사용
    return 1
} // 리턴할 때 숫자 1이 리턴되는 것이 아니라 프로미스 객체가 만들어져서 리턴된다, 리턴된 값이 프로미스의 result 값이 된다

f().then(console.log) // 1, f().then(console.log) = promise.then(console.log) 이다

f = async function() {
    return Promise.resolve(2) // result가 2가 들어간 프로미스 값을 리턴
}
f().then(console.log) // 2 

f = async function() {
    return Promise.reject(new Error(3)) // result가 3이 들어간 프로미스 값을 리턴
}
f().catch(e => console.log(e.message)) // 3

//
f = async function() { // await은 일반 fn에서는 쓸 수 없다, async fn에서만 쓸 수 있다
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(4), 1000)
    })
    let result = await promise // await: 성공 실패와 관계없이 프로미스가 끝나기를 기다리는 명령문이다
    console.log(result)
}
f() // 1초 뒤에(프로미스가 끝난 뒤에) 4가 출력된다

//
class Waiter {
    async wait() {
        return await Promise.resolve('cooked bread.') // promise를 기다린다 > 완료되면 promise 리턴
    }
}
new Waiter().wait().then(console.log)

