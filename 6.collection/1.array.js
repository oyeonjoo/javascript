let arr = new Array(1, 'hello', true, {age: 3}, function fn(){}, class A{})
console.log(arr) // class 도 fn이다

arr = [null, undefined, NaN] // 배열의 원소가 된다
console.log(arr)

//
arr = []
arr[0] = 'a'
arr[2] = 'c'

console.log(arr) // null이 a로, NaN이 c로 바뀐다
console.log(arr[1])

console.log(arr.length)

//
let matrix = [
    [1, 2],
    [3, 4]
]

//
let a = [1, 2]
let b = [2, 3]
let c = a.concat(b) // 두 배열의 원소를 전부 가진 배열이 생긴다
console.log(c)

arr = []
arr.push(1) // 할당연산자 말고 push를 이용해서 넣는다, 넣는 순서대로 쌓아 올린다(수직) > stack 알고리즘이다
arr.push(2)
arr.push(3) // 수직으로

console.log(arr)
console.log(arr.pop()) // pop: 위에서 부터 꺼낸다, lifo(last in first out)
console.log(arr)

//
arr = []
arr.push(1)
arr.push(2)
arr.push(3) // 수평으로

console.log(arr)
console.log(arr.shift()) // shift: fifo(first in first out)

//
a = [0, 1, 2]
b = a.slice(1) // slice(): start index값 > 1부터 시작하는 배열을 새로 만든다, a 를 건드리지 않는다
console.log(b, a)

//
arr = [0, 7, 8, 5]
arr.splice(1, 2, 1, 2, 3, 4) // splice(): 시작-끝 index, 자른 원소 사이에 들어갈 원소를 나열한다
console.log(arr)

//
arr = ['a', 'b', 'c']
console.log(arr.indexOf('b'))

arr.splice(arr.indexOf('b')) // 'b' 이후로 잘라내고 싶을 때
console.log(arr)

// slice: return한다 > 작업대상의 변질이 일어나지 않는다
// splice: return하지 않는다 > 작업대상의 변질이 일어난다

arr = ['a', 'b', 'c', 'b']
arr.splice(arr.indexOf('b'), 1) // 1번째 'b'만 없애겠다
console.log(arr)

//
arr = [4, 3, 1, 2]
let s = arr.sort() // sort는 return한다 > 할당연산자를 쓴다, 새로운 객체가 아니다 > 기존의 객체, 오름차순 정렬
console.log(arr, s)
// 과제: s 가 arr 인지, 확인하라.
console.log(s == arr)

arr = [8, 11, 22, 34, 9]
console.log(arr.sort()) // source를 분석해서 나열한다, 원소를 string으로 취급해서 정렬한다

console.log(arr.sort((a, b) => a - b)) // 오름차순
console.log(arr.sort((a, b) => b - a)) // 내림차순

//
arr = ['a', 'b', 'c']

for(let i = 0; i < arr.length; i++)
    console.log(arr[i])

// 과제: 원소를 출력하라
for(let key in arr) console.log(arr[key])

for(let val of arr) console.log(val) // value로 직접 접근한다