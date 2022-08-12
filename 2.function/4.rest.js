function add(a, b) {
    return a + b
}

console.log(add(1, 2, 3)) // 나머지 파라미터인 3은 무시

//
add = function(...args) { // ...args: rest parameter
    let tot = 0
    for(let arg of args) tot += arg
    return tot
}

console.log(add(1), add(1, 2, 3))

//
function printName(firstName, lastName, ...titles) { // rest parameter는 마지막에 적어야 한다.
    console.log(firstName, lastName)
    console.log(titles[0], titles[1], titles[2])
    console.log(titles.length)
}

printName('adam', 'smith', 'operator', 'consul')

//
function showName() {
    console.log(arguments.length)
    console.log(arguments[0], arguments[1])
}

showName()
showName('erica', 'terry')

console.log(Math.max(1, 2, 3)) // max 메소드: n개의 파라미터중에 최고값을 찾아서 return해준다

// rest: 흩어져 있는 파라미터를 한 곳에 모으는 것
// spread: 모아져 있는 파라미터를 퍼트리는 것, 배열객체를 만들 때 쓸 수 있다.

let arr = [1, 2, 3]
console.log(Math.max(arr))
console.log(Math.max(...arr)) // 퍼트려진다

let arr2 = [4, 5, 6]
console.log(...arr, ...arr2)
console.log(Math.max(...arr, ...arr2))
console.log(Math.max(0, ...arr, 7, ...arr2, 8))

arr = [0, ...arr2, 9]
console.log(arr)