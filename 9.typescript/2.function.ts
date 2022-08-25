function sum(a: number, b: number): number { // a, b 변수의 타입, : number > return값의 타입이다
    return a + b
}

console.log(sum(1, 2))

//
function add(a: number, b: number, isDouble?: boolean):number {
    const sum = a + b
    return isDouble ? sum * 2 : sum
}

let result: number = add(1, 2)
result = add(1, 2, true)
console.log(result)

// 
function greet(name: string, nullable?: boolean): string | null { // ? : optionable
    if(nullable) return null
    else return `Hello, ${name}.` // type이 여러가지이기때문에 전부 or로 써주던지 type을 쓰지 않는다
}

let greeting = greet('cain')
//greeting = greet('cain', true)
console.log(greeting)