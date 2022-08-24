let arr = ['ilya', 'kantor'] // 할당연산자 오른편에 배열이 온다
let [name, surname] = arr // 쪼개서 각각의 변수에 집어 넣는다
console.log(name, surname)

let [one, two] = [1, 2, 3] // 변수를 배열로 선언, 변수보다 많으면 남는 것은 쓰레기
console.log(one, two)

let [three, four] = [3] // 변수가 원소보다 더 많을 경우 > undefined
console.log(three, four);

[one, , three] = [1, 2, 3, 4] // 변수가 빠진 경우, 위에서 let으로 three 선언했기 때문에 let 사용할 수 없다
console.log(one, three)

//
let s = 'i am'
let [a, b, c] = s
console.log(a, b, c)

//
i = s.split(' ') // split: 문자를 배열로 바꾼다
console.log(i);

[a, b] = i
console.log(a, b)

//
let user = {};
[user.name, user.surname] = 'john smith'.split(' ') // 구분자로  ' ' 쓰는 것
console.log(user) // john은 name에, smith는 surname에 할당

//
user = {
    name: 'oscar',
    age: 21
}

let entries = Object.entries(user)
console.log(entries)

for(let [key, value] of entries) console.log(key, value) // entries는 배열이라 iterating 할 수 있다

//
let map = new Map([
    ['name', 'edith'], // 파라미터로 배열을 넣어준다 [key, value]
    ['age', 30]
])

for(let [key, value] of map) console.log(key, value) // map 으로 iterating

//
let guest = 'jane'
let admin = 'pete';

[guest, admin] = [admin, guest] // 배열을 준비 > destruct, guest와 admin의 이름을 바꾼다
console.log(guest, admin);

//
[one, two, ...rest] = [1, 2, 3, 4] // rest의 type은 array
console.log(one, two, rest); // 갯수가 일치하지 않을 때, 나머지는 rest에 들어간다

//
[name, surname='annonymous'] = ['john'] // 할당연산자를 두고, 배열인 경우에 배열로 맞춰준다
console.log(name, surname)

//
let options = {
    title: 'menu',
    width: 100,
    height: 200
}

let {title, height, width} = options // 할당연산자 오른편에 객체, {}를 써야한다, 할당연산자를 두고 객체와 객체로 맞춰준다
console.log(title, height, width);

({title, height, width} = options)

let {width: w, height: h} = options // w, h 는 내가 지정한 변수이름
console.log(w, h)

let {title: t, ...other} = options // ...other rest의 type은 객체
console.log(t, other)

let {title: subject, wide=1000} = options
console.log(subject, wide)

//
let bread = {
    size: {
        width: 100,
        height: 200
    },
    items: ['cake', 'donut'],
    extar: true
} // size에는 변수?객체?, items에는 배열이 담긴다

// 과제: bread 에서 size와 items 를 뽑아내라.
let {size, items} = bread
console.log(size, items)

// 
let {
    size: {
        width: w2,
        height: h2
    },
    items: [item1, item2]
} = bread

console.log(w2, h2, item1, item2) // 쪼개서 뽑아내고 싶을 때

//
let menu = {
    title: 'menu',
    items: ['list', 'add'],
    expired: 10
}

function showMenu({title: name, items: [item1, item2]}) {
    console.log(name, item1, item2)
} // 객체를 넣어 쪼갠다(title, item > title은 name으로, item은 1, 2로)

showMenu(menu)