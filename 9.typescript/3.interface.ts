interface Profile {
    id: number
    username: string // key, value, type
    nickname: string // , 는 쓰지 않는다
} // 나만의 타입을 만들고 싶을 때 인터페이스를 사용한다

function printUsername(profile: Profile) {
    console.log(profile.username)
}

const profile: Profile = {
    id: 1, // 객체라서 ,를 쓴다
    username: 'cain',
    nickname: 'hero'
}

printUsername(profile)
console.log(typeof profile) // 인터페이스의 타입은 오브젝트이다

//
interface Relationship {
    from: Profile // 인터페이스를 만들면서 다른 인터페이스도 쓸 수 있다(이미 정의된 것 사용 가능)
    to: Profile // Relationship 의 key는 from, to이다
}

const relationship: Relationship = {
    from: {
        id: 1,
        username: 'cain',
        nickname: 'hero'
    },
    to: {
        id: 2,
        username: 'abel',
        nickname: 'warrior'
    }
}

//
interface Account extends Profile {
    email: string
    password: string
}

// 과제: {} 안을 채워라.
const account: Account = {
    id: 1,
    username: 'cain',
    nickname: 'hero',
    email: 'cain@cain.com',
    password: 'cainpw'
}

//
interface User {
    id: number
    username: string
    photoUri?: string // ? : optional, 인터페이스에서도 사용가능하다
}

let user: User = {
    id:1,
    username: 'abel'
} // photoUri? 는 optional이라 선언하지 않아도 된다 // { id: 1, username: 'abel' }

user = {
    id: 1,
    username: 'abel',
    photoUri: 'face.jpg'
 } // { id: 1, username: 'abel', photoUri: 'face.jpg' }

console.log(user)

//
interface Shape {
    getArea(): number
    getPerimeter(): number
}

class Circle implements Shape {
    constructor(private radius: number) {} // class라서 생성자가 있어야한다

    getArea(): number {
        return Math.PI * Math.pow(this.radius, 2) // pow: 제곱
    }

    getPerimeter(): number {
        return 2 * Math.PI * this.radius // 원의 둘레
    }
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}

    getArea(): number {
        return this.width * this.height
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height)
    }
}

const circle = new Circle(4)
const rectangle = new Rectangle(4, 6)

console.log(circle.getArea(), rectangle.getPerimeter())