type Man = { // type은 할당연산자를 쓴다
    name: string
}

const man: Man = {
    name: 'john'
}

//
type Men = Man[]

const men: Men = [{name: 'neo'}] // name 원소를 하나 가진 배열

//
type Color = 'red' | 'green' | 'blue'
let color: Color = 'red'
// color = 'yellow' 인터페이스는 오브젝트를 대상으로 쓰는 것, type은 지정된 것 외에 사용 안된다

//
type Employee = Man & { // merge는 &를 사용한다
    job: string
}

const employee: Employee = {
    name: 'breg',
    job: 'programmer'
}