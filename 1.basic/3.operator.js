let val = 1 + 2 * 3 / 2
console.log(val, 5, 4**2, 4**(1/2)) // ** 제곱, root: 4**(1/2)

let i = 1
console.log(++i, i++) // 메모리에서는 두번재 i 는 3이다

let foo = 'hello'
let bar = 'world'
console.log(foo + ' ' + bar) // + 붙이기 연산자
console.log(1 + '2', '1' + '2') // 하나 이상이 문자이면 문자

console.log(1 + + '2') // unary plus operator: 문자 앞에 +를 하나 더 붙이면 숫자로 변환된다

console.log(1 || 0, 0 || 1) // 논리 연산자 or: 마지막으로 읽은 값을 리턴하고 끝난다, 숫자가 boolean으로 바뀐 것이다
console.log(1 && 0, 0 && 1) // 마지막에 읽은 값이 0
console.log(1 && 2, 2 && 1) // 마지막에 읽은 값이 2, 1

// foo && do(foo)
// foo: 변수, do: 함수 > foo에 값이 있으면(true이면) foo를 파라미터로 넣어 do를 호출 하겠다

// bar = baz || createBar()

console.log()
let c = 3 - (a = 1 + 2)
console.log(c)

let d = 2
d *= 2
console.log(d)

console.log()
console.log('2' > 1, '01' == 1, false == 0, '' == false) // ==: 같다 연산자
console.log(true > 1)

// equivalent operator
console.log(1 == '1', 1 != '1')

// identical operator 타입이 같아야 한다
console.log(1 === '1', 1 !== '1')

console.log('z' > 'a', 'ac' > 'ab', 'bee' > 'be', 'a' > 'A') // ac, ab: 원소가 두개인 배열로 처리한다

console.log(null > 0, null < 0, null >= 0, null == 0)
console.log(undefined > 0, undefined >= 0, undefined == 0)
console.log(NaN > 0, NaN >= 0, NaN == 0)

console.log(undefined == undefined, null == null, NaN == NaN)