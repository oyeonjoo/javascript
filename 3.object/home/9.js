/* 과제:
다음 상속 관계로 객체들을 디자인하세요.
<life>
name
eat()
excrete()

<animal>
name
move()

<bird>       <mammal>
name         name
move()       move()
--

bird.eat().
bird excrete.
bird fly.
mammal eat.
mammal excrete.
mammal run.
*/

let life = {
    name: 'life',
    eat() {
        console.log(this.name, 'eat.')
    },
    excrete() {
        console.log(this.name, 'excrete.')
    }
}

let animal = {
    name: 'animal',
    __proto__: life,
    move(){}
}

let bird = {
    name: 'bird',
    __proto__: life,
    move() {
        console.log(this.name, 'fly.')
    }
}

let mammal = {
    name: 'mammal',
    __proto__: life,
    move() {
        console.log(this.name, 'run.')
    }
}

bird.eat()
bird.excrete()
bird.move()

mammal.eat()
mammal.excrete()
mammal.move()