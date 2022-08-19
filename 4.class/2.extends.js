class Animal {
    constructor(name) {
        this.name = name
    }

    run(speed) {
        this.speed = speed //speed 속성을 추가해서 사용
        console.log(this.name, this.speed, ' run.')
    }

    stop() {
        this.speed = 0 // speed 속성을 수정해서 사용
        console.log(this.name, ' stop.')
    }
}

let animal = new Animal('animal')
console.log(animal)

animal.run(10)
console.log(animal)
animal.stop()
console.log(animal)

//
class Duck extends Animal {
    run(speed) {
        this.speed = speed / 10
        console.log(this.name, this.speed, 'run.')
    }

    hide() {
        console.log(this.name, 'hide.')
    }
}

let duck = new Duck('duck')
console.log(duck)

duck.run(10)
duck.stop()
duck.hide()

//
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

console.log(new Rabbit('rabbit', 'black'))