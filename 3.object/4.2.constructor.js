function Gun() {
    this.fire = () => console.log('탕탕')
}

function Shooter(name, gun) {
    this.name = name
    this.fire = () => gun.fire() // gun을 dependency로 사용한다
}

let gun = new Gun()
let shooter1 = new Shooter('최한석', gun)
let shooter2 = new Shooter('한아름', gun)

shooter1.fire()
shooter2.fire()

//
function Ball() {}

function Player() {
    this.name = name
    this.pass = ball => ball // 행동(메소드)은 fn으로 표현한다, 파라미터로 ball을 받는다
    this.kick = ball => Ball
}

const ball = new Ball()