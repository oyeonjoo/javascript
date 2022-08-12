let foo = "I am a string."
foo = 'So am I'
foo = 'back tick'
// string type 3가지

foo = 1
foo = 1.0
// number type

console.log(1 / 0)
console.log('a' / 1) // NaN(Not a Number) 에러메세지가 아니다

foo = 1
console.log(isFinite(foo))
foo = 'a'
console.log(isFinite(foo))

foo = '1' // 문자를 숫자로(parseInt), 숫자를 문자로 바꿔서 계산이 가능하다
console.log(parseInt(foo) + 1) // 숫자를 더하면, foo가 숫자인지 문자인지 알 수 있다

foo = 'a'
foo = '100px' // 동적 화면을 다룰 때 css를 사용한다 > parseInt가 알아서 바꿔준다
foo = '+1' // 하이픈이나 콤마가 들어가면 전부 문자가 된다
foo = '-1'
foo = '123456-789123' // 하이픈을 구분자로 인식, 구분자 앞에 있는 것만 출력한다
console.log(parseInt(foo))

foo = '1.6'
console.log(parseInt(foo))
console.log(parseFloat(foo))

let a = Infinity * 2
let b = NaN * 2
console.log(a, b)

a = Infinity * NaN
console.log(a) // NaN이 더 세다

foo = 1n // 16자리를 초과하면 1n이 된다

const okay = true
const fail = false
// boolean type

let val = null
// null

let val2
val2 = undefined // 값에 할당이 가능하다
console.log(val2) // 에러 메세지가 아니라 값이 있는 것이다. undefined 값이 정해지지 않은 것이다

let id = Symbol('id')
console.log(typeof id) // typeof의 return 값은 string

val = 1
val = String(val) // string으로  casting
console.log(typeof val)

val = '6' / '2'
console.log(val) // 숫자로 자동 casting

val = false / true
console.log(val) // false: 0, true: 1 로 casting

val = '1'
val = Number(val) // Number: 문자를 숫자로
console.log(typeof val)

console.log(Number('1'), Number(true))
console.log(Number(' '), Number(''), Number(null), Number(false)) // 전부 0으로 casting
console.log(Number('a'), Number(undefined), Number(NaN)) // NaN

console.log(Boolean(-1), Boolean('a'), Boolean('0'), Boolean(' ')) // 값이 있으니까 true이다
console.log(Boolean(0), Boolean(''), Boolean(null), Boolean(undefined), Boolean(NaN)) // 값이 없으니까 false이다
