let json = '{"name": "john", "age": 30}' // key에 ""를 써준다, 숫자는 그냥 쓴다
let user = JSON.parse(json) // parsing 한다, 객체를 문자로, 문자를 객체로 바꿀 수 있다
console.log(typeof json, typeof user) // string object

//
json = '{age: 30}' // json이 아니다, ""가 없다
//JSON.parse(json) > SyntaxError: 문법 error

try {
    JSON.parse(json)
} catch {
    console.log('ERROR')
}

try {
    JSON.parse(json)
} catch(e) { // try에서 만들어진 error 객체가 담긴다(객체를 만든 것이 아니고, error가 생기는 상황을 만든 것이다)
    console.log(e.name, '\n', e.message, '\n', e.stack) // stack은 밑에서부터 출력한다
} 