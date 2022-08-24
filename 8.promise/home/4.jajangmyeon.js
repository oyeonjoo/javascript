// 과제: 4-2.jajangmyeon 을 refactoring 하라.
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
        this.taste = taste
    }

    cook(foodName) {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(new Food(this.taste, foodName)), 1000)  // 요리시간을 1초로 가정
        })
    }
}

class Waiter {
    async order(foodName, chef) {
        return await chef.cook(foodName) // 아직 완료되지 않은 프로미스 > await을 쓰고 완료가 약속이 된다 > 약속이 끝나야 다음 명령문 실행
    }
}

let chef1 = new Chef('달콤한')
let chef2 = new Chef('매운')
let waiter = new Waiter()

waiter.order('짜장면', chef1).then(food => console.log(food + '')) // 프로미스(food가 들어있다)의 result값을 파라미터로 받는다
