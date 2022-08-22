function laugh(cnt) {
    if(cnt <= 0 || Math.trunc(cnt) != cnt) // 음수이거나 float 이거나를 조사
        throw new Error('반복 횟수는 자연수이어야 합니다.')

    let phrase = ''
    for(let i = 0; i < cnt; i++) phrase +='ha '

    return phrase
}

let diff
let start = Date.now() // 현재시각

try {
    console.log(laugh(3))
    laugh(3.1) // throw 발생
} catch(e) {
    console.log(e.message)
} finally { // try와 catch블럭의 실행여부를 떠나서 꼭 실행하고 싶은 것을 finally에 쓴다
    diff = Date.now() - start
}

console.log(`경과 시간: ${diff}ms`)
