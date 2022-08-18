/* 과제:
let chef1 = food => `달콤한 ${food}.\n`

let chef2 = food => `매운 ${food}.\n`

let waiter = (food, chef) => chef(food)

console.log(waiter('짜장면', chef1),
            waiter('짜장면', chef2),
            waiter('짬뽕', chef2))

~ 를 객체지향으로 refactoring 하라.
*/

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


