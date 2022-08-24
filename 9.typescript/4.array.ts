const numbers: number[] = [1, 2, 3] // number 타입을 원소로 가진 배열
const texts: string[] = ['a', 'b'] // string 타입을 원소로 가진 배열

interface Person { // 인터페이스의 타입은 오브젝트이다
    name: string
}

// [] 안을 원소 2개로 채워라.
const people: Person[] = [{name: 'john'}, {name:'terry'}] // Person 타입을 원소로 가진 배열
console.log(people) // [ { name: 'john' }, { name: 'terry' } ]