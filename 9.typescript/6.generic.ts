function wrap<T>(value: T):T {
    return value
} // T 타입

const output = wrap('hello')
console.log(output) // hello

// 인터페이스는 전부 오브젝트 타입이다
interface Woman {
    name: string
}

const woman: Woman = {name: 'hera'}
const woman2 = wrap(woman)
console.log(woman2) // { name: 'hera' }

// 인터페이스에서도 제네릭 타입을 쓸 수 있다
interface Item<T> {
    id: number
    data: T
}

interface Animal {
    name: string
}

interface Place {
    location: string
}

const animalItem: Item<Animal> = {
    id: 1,
    data: {
        name: 'cat'
    }
}

const placeItem: Item<Place> = {
    id:2,
    data: {
        location: 'seoul'
    }
}

//
type Product<T> = { // type 에서도 제네릭을 쓸 수 있다
    id: number
    data: T
}

class Queue<T> { // class 에서도 제네릭을 쓸 수 있다
    list: T[] = []// T타입의 배열, [] 기본 값을 가지고 있어서 undefined가 아니다

    get length() {
        return this.list.length
    }

    enqueue(item: T) { // 넣는다, item의 타입은 number
        this.list.push(item)
    }

    dequeue() { // 꺼낸다
        return this.list.shift()
    }
}

const queue = new Queue<number>() // queue 변수의 타입은 Queue<number>이다
queue.enqueue(0)
queue.enqueue(1)

let val = queue.dequeue() // 0
val = queue.dequeue() // 1
console.log(val)
