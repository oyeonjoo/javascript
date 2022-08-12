let add = function(a, b) {
    return a + b
}

add = (a, b) => a + b
console.log(add(1, 2))

const double = n => 2 * n
console.log(double(2))

const greet = () => console.log('hello')
greet()

//
add = (a, b) => {
    const result = a + b
    return result
} // 명령문이 2개 이상이면 블럭을 써야한다.

console.log(add(1, 2))