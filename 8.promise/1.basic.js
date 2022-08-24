let promise = new Promise((resolve, reject) => resolve('done')) // resolve 이행하다-약속을 할 행동을 표시하면 된다, reject 취소하다
/* promise 객체를 만든 것이다. 1번째 줄에서 실행되는 것은 없다
   파라미터는 두개를 받아야하고 callback 이어야한다(node js가 자동으로 할당)
   resolve의 파라미터는 아무거나 써도 된다, reject의 파라미터는 에러 객체여야한다

promise.then(console.log, console.log) // done
promise.then(console.log, null) // resolve 등록, reject는 관심없음-아무일도 하지 않겠다

promise.then(console.log) // then handler: promise가 성공했을 때 작동하는 handler
promise.catch(console.log) // catch handler: resolve는 관심없고, reject되면 log fn작동


    ■ promise 객체에는 state와 result 두개의 속성이 생긴다
    executor(약속을 책임지는, promise의 fn) - state: pending, result: undefined(아직 이행된 것이 없다)
    resolve, reject 자리만 마련해준 것이다.
    약속을 이행하면 ■ resolve가 call > state: fail? , result: done 으로 상태가 바뀐다
                   ■ reject(error)되면 파라미터로 error 객체를 넣어주면 state: rejected, result: 파라미터로 지정한 error 객체
    <6번째 줄 code>
    1번째 log fn을 등록(promise가 resolve 됐을 때 작동), 2번째 log fn을 등록(promise가 reject됐을 떄 작동)
*/

// 과제: 1초 뒤에 resolve 하도록 한다.
promise = new Promise((resolve, reject) => { // executor: promise에 들어가는 필수 fn > 즉각 실행
    setTimeout(() => resolve('done'), 1000) // 이행을 했을 때 결과를 만들고 싶으면, ()에 파라미터로 쓴다
}) 

promise.then(console.log, console.log) // handler : fn

//
/*
promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('에러')), 1000)
})

promise.then(result => console.log(result),
    error => console.log(error)) // promise result가 reject handler의 파라미터로 들어온다
*/
//
new Promise((resolve, reject) =>
    setTimeout(() => resolve('완성'), 2000))
    .catch(e => console.log(e.message)) // then과 catch는 서로 배타적, 둘 중 하나는 실행된다
    .then(console.log) // promise.then : then handler, promise를 return한다 // 완성
    .finally(() => console.log('promise가 생성되었습니다.'))
// finally handler: 성공하거나 실패하거나 상관없이 하고 싶은 것 등록

new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('미완성')), 3000))
    .then(console.log) // 미완성
    .catch(e => console.log(e.message))
    .finally(() => console.log('promise가 생성되었습니다.'))

// 로딩시작하는 프로미스를 만들어놓고 프로미스는 일을 하게 만들고 그 다음 명령문을 실행할 수 있다
// 프로미스가 로딩이 끝나면 일을 한다
// 작업시간이 걸리는 일을 프로미스로 둔다