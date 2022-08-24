new Promise((resolve, reject) => reject(new Error(1)))
    .catch(e => console.log(e.message)) // 1

new Promise((resolve, reject) => {throw new Error(2)})
    .catch(e => console.log(e.message)) // 2

//
new Promise((resolve, reject) => resolve('ok'))
    .then(result => {throw new Error(3)})
    .catch(e => console.log(e.message)) // then handler에서 발생한 에러도 잡아낸다

new Promise((resolve, reject) => resolve('ok'))
    .then(result => blabla())
    .catch(e => console.log(e.message)) // blabla is not defined, catch handler 작동

new Promise((resolve, reject) => {throw new Error(4)})// execute 에서 에러 발생
    .catch(e => console.log(e.message)) // 4
    .then(result => console.log(result))
// catch handler는 제일 마지막에 적어야 한다. catch가 마지막이 아니면 catch도 실행하고, 그 뒤에 오는 then도 실행한다.

new Promise((resolve, reject) => {throw new Error(5)})
    .catch(e => {
        if(e instanceof URIError) { 
        } else {
            console.log('기타 에러입니다.')
            throw e
        }
    }).then(() => console.log('여기는 실행되지 않습니다.'))
    
    .catch(e => console.log('위에서 떠넘긴 에러입니다.')) // 5
// 21번 에러발생 > 가까운 22번 캐치 핸들러로 넘어간다 > 에러발생 > 가까운 캐치 핸들러로 넘어간다
// 캐치 핸들러 작동 후 then 작동하는 순서지만, 여기서는 catch 때문에 then은 작동하지 않는다
// 29번 캐치 핸들러가 작동한다