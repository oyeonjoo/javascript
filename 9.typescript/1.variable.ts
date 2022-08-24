let msg: string = 'hello'
// msg = 1 // type error

let val: number = 1
let nullableStr: string | null = null // string or null
nullableStr = 'hi'
// nullableStr = undefined // type error

let undefinedOrNumber: undefined | number
undefinedOrNumber = 10
undefinedOrNumber = undefined

let numberOrStringOrNull: number | string | null = null
numberOrStringOrNull = 1
numberOrStringOrNull = 'Bye'
numberOrStringOrNull = null

let isCompleted: boolean = true
isCompleted = false
// isCompleted = 0 // type error

let anyValue: any = null // any로 두면 모든 타입 가능 > 자바스크립트와 다를 바가 없다
anyValue = undefined
anyValue = 1
anyValue = 'hello'

//
let a = 1 // 컴파일러가 알아서 a를 넘버로 바꾼다
let b = 'b'
let c = true