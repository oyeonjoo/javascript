/* 과제:
function Food(taste, name) {
    this.taste = taste
    this.name  = name
}

function Chef(taste) {
    this.cook = foodName => new Food(taste, foodName)
}

function Waiter() {
    this.order = (foodName, chef) => chef.cook(foodName)
}

let chef1 = new Chef('달콤한')
let chef2 = new Chef('매운')
let waiter = new Waiter()

waiter.order('짜장면', chef1)
waiter.order('짜장면', chef2)
~을 class 로 refactoring 하라.
*/

class Food {
    constructor(taste, name) {
        this.taste = taste
        this.name = name
    }

    [Symbol.toPrimitive]() {
        return `${this.taste} ${this.name}`
    }
}

class Chef {
    constructor(taste) {
        this.cook = foodName => new Food(taste, foodName)
    } // => 를 쓰면 return을 쓰지 않아도 된다
}

class Waiter {
    order(foodName, chef) {
        return chef.cook(foodName)
    }
}


let chef1 = new Chef('달콤한')
let chef2 = new Chef('매운')

let waiter = new Waiter()

waiter.order('짜장면', chef1)
waiter.order('짜장면', chef2)
console.log(waiter.order('짬뽕', chef2)) 
console.log(waiter.order('짬뽕', chef2) + '') // 매운짬뽕
console.log(`${waiter.order('짬뽕', chef2)}`) // 매운짬뽕

/* 과제:
위 로그값이 '매운 짬뽕'이 출력되도록 하라.
*/