class CoffeeMachine {
    waterAmount // class의 속성이 아니다, 객체의 속성이다
    // this.amount로 쓸 수 있는 것을 waterAmount로 작성한 것이다
    constructor(voltage) {
        this.voltage = voltage
    }
}

console.log(CoffeeMachine)
/*
class CoffeeMachine {
    waterAmount

    constructor(voltage) {
        this.voltage = voltage
    }
}
*/
console.log(Object.keys(CoffeeMachine))
console.log(CoffeeMachine.prototype) // {constructor: ƒ} > prototype의 속성도 아니다

let machine = new CoffeeMachine(220)
console.log(machine) // CoffeeMachine {waterAmount: undefined, voltage: 220}

machine.waterAmount = 1
machine.voltage = 100
console.log(machine) // CoffeeMachine {waterAmount: 1, voltage: 100} > 객체의 속성을 바꿀 수 있다

// protected가 있으면 prototype이 생긴다
CoffeeMachine = class {
    _waterAmount // _ 가 붙어있는 속성이 있으면 속성에 접근하는 getter를 만들어준다
    // _는 객체에 저장
    get waterAmount() {
        return this._waterAmount + 100
    } // _속성에 접근하는 getter

    set waterAmount(waterAmount) {
        this._waterAmount = 2 * waterAmount
    }
}

console.log(CoffeeMachine.prototype) // {constructor: ƒ, waterAmount: <accessor>} > prototype이 생긴다 > waterAmount는 getter를 이용한다
machine = new CoffeeMachine()
console.log(machine) // CoffeeMachine {_waterAmount: undefined, voltage: undefined}

machine.waterAmount = 1
console.log(machine) // CoffeeMachine {_waterAmount: 2, voltage: undefined} > waterAmount는 setter를 이용한다
console.log(machine.waterAmount) // 102

machine._waterAmount = 11 // 객체의 속성을 직접 쓰고 읽는 것이다
console.log(machine._waterAmount) // 11