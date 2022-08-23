let json = '{"age": 30}'

try {
    let user = JSON.parse(json) // 참이면 user객체가 만들어지고, false면 안 만들어진다 > try 블럭 때문에 앱이 죽지는 않는다

    // 과제: user 객체가 있으면, user.age 를 출력하라.
    // user && console.log(user.age)

    if(user.name) console.log(user.name) // user.name이 있으면 user.name을 출력
    else throw new SyntaxError('user.name이 없습니다.') // error객체, throw error를 발생시킨다, error가 발생하면 catch 블럭으로 넘어간다
} catch(e) {
    if(e instanceof SyntaxError)
        console.log('ERROR: ' + e.message)
    else throw e
}

// ERROR: user.name이 없습니다.