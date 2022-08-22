class CoffeeMachine {
    #waterAmount // #을 붙이면 private이다

    get waterAmount() {
        return this.#waterAmount + 100 // getter 사용하는지 확인하기위해
    }

    set waterAmount(waterAmount) {
        this.#waterAmount = 2 * waterAmount
    }
}

console.log(CoffeeMachine)
console.log(CoffeeMachine.prototype) // {constructor: ƒ, waterAmount: <accessor>}
// getter와 setter 는 prototype쪽에 있다

let machine = new CoffeeMachine()
console.log(machine) // CoffeeMachine {#waterAmount: undefined}

machine.waterAmount = 1
console.log(machine.waterAmount) // 102, get 사용
// 21번째 줄까지는 protected와 비슷하다

// machine.#waterAmount = 1  > SyntaxError: 문법 error
// 객체의 속성에서 감추고 access하려면 private을 쓴다
