/* 과제:
1.calculate.js 를 callback 으로 refactoring 하라.
-, *, / 연산을 callback 으로 처리한다.
*/

function minus(a, b) {
    return a - b
}

function multifly(a, b) {
    return a * b ;
}

function divide(a, b) {
    return a / b;
}

function calculate(a, b, op=multifly) {
    return op(a, b)
}

console.log(calculate(1, 2, minus),
            calculate(1, 2, multifly),
            calculate(1, 2, divide),
            calculate(1, 2))
