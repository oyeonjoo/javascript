let set = new Set() // set은 key가 없고 value만 있다, 중복된 value가 없다

let user1 = {name: 'john'}
let user2 = {name: 'pete'}

set.add(user1).add(user2).add(user1) // 중복해서 적어도 1개만 들어간다
console.log(set)

console.log(set.size) // size: 원소갯수
console.log(set.has(user1), set.has(user2), set.has({})) // has: value가 있는지 확인

console.log(set.delete(user1))
console.log(set)

//
set.add(user1)

for(let user of set) console.log(user) // for-of: iterating

set.forEach(val => console.log(val)) // value만 전달받는다

//
set = new Set([1, 2, 3]) // parameter로 배열을 넣어준다
console.log(set)

//
let arr = Array.from(set) // Array.from(set): set을 array로 변환
console.log(arr)

set = new Set('hello') // 중복된 l은 제거되고 h, e, l, o 만 남는다
console.log(set) 