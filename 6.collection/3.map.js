let map = new Map()

map.set('1', 'hello') // key, value(key를 일일이 지정하려면 value사용, 자동으로 하려면 arr사용)
map.set(1, {name: 'david'})
map.set(true, function(){})

console.log(map.get('1'), map.get(1), map.get(true))
console.log(map.has('1'), map.has(1), map.has(true), map.has(false)) // 가지고 있으면 true, 없으면 false
console.log(map.size)

console.log(map.delete(1), map.delete(2)) // delete 성공하면 true, 실패하면 false
console.log(map)

map.clear()
console.log(map)

//
map = new Map()
map.set(1, 'amella').set(2, 'avery').set(3, 'adela')
console.log(map)

//
let greens = new Map ([
    ['cucumber', 500], // key, value
    ['tomato', 350],
    ['onion', 50]
])

for(let entry of greens) // iterating
    console.log(entry)

let keys = greens.keys() // key만 뽑아낼 때
console.log(keys) 

for(let key of keys) // iterating
    console.log(key)

let values = greens.values()
console.log(values)

for(let value of values) // iterating
    console.log(value) 

greens.forEach((val, key) => console.log(key, val))

//
let user = {
    name: 'aiden',
    age: 50
} // 객체

let entries = Object.entries(user) // 객체의 속성을 원소를 가지고 있는 배열이 return된다, 객체 > 배열
console.log(entries)
console.log(new Map(entries))

//
map = new Map()
map.set('apple', 1)
map.set('orange', 2)
map.set('pear', 3)

fruits = Object.fromEntries(map) // map > 객체
console.log(fruits)
