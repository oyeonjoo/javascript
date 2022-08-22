class Animal {
    constructor(name) {
        this.name = name // Animal class가 아닌 this 객체에 존재하는 속성
    }

    run(speed) {
        this.speed = speed //speed 속성을 추가해서 사용, Animal class가 아닌 this 객체에 존재하는 속성
        console.log(this.name, this.speed, 'run.')
    }

    stop() {
        this.speed = 0 // speed 속성을 수정해서 사용, Animal class가 아닌 this 객체에 존재하는 속성
        console.log(this.name, 'stop.')
    }
}

let animal = new Animal('animal') // animal 객체에는 name 속성 하나만 있다
console.log(animal)

animal.run(10) // animal에는 없기때문에 prototype의 run을 쓴다, Animal {name: 'animal', speed: 10} speed 속성이 추가된다
console.log(animal)

animal.stop() // 12번째줄 실행 > speed = 0, Animal {name: 'animal', speed: 0}
console.log(animal)

//
class Rabbit extends Animal{ // extends 상속, 부모의 prototype을 참조한다
    /*
    constructor(...args) {
        super(...args)
    }
    */
    hide() {
        console.log(this.name, 'hide.')
    }
}

let rabbit = new Rabbit() // undefined
console.log(rabbit)

rabbit = new Rabbit('rabbit') // rabbit이라는 속성값이 객체안에 들어간다
console.log(rabbit)

console.log(rabbit.name) // 
rabbit.run(100) // animal의 run
rabbit.hide() // rabbit의 hide

//
Rabbit = class extends Animal {
    constructor(name, color) {
        super(name) // animal에게, super 생성자호출
        this.color = color // rabbit이
    }

    stop() {
        super.stop() // animal, rabbit, 전부 가지고 있다 > super.stop()을 사용하면 animal의 stop을 사용한다
        this.hide()
    } // super객체

    hide() {
        console.log(this.name, this.color, 'hide.')
    }
}

rabbit = new Rabbit('rabbit', 'black')
rabbit.stop()

/*
class Rabbit extends Animal {
    stop() {
        super.stop(); // super 변수, 부모를 표현할 때 super를 사용한다, 상속을 해야 사용할 수 있다
        this.hide()
    }

    hide() {
        console.log(this.name, 'hide.')
    }
}

new Rabbit('rabbit').stop()

//
Rabbit = class extends Animal{
    constructor(name, color) {
        super(name) // super 생성자, 생성자의 첫줄에 있어야한다. 중복제거 문법이다
        this.color = color
    }
}
*/