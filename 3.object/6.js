let date1 = new Date(2025, 5, 5)
let date2 = new Date(2025, 5, 4)

console.log(date1 - date2)

let user = {
    name: 'amanda',
    age: 20,
    [Symbol.toPrimitive](hint) {
        return hint == 'string' ? this.name : this.age
    }
}

console.log(`${user}`)

let user2 = {
    age: 38,
    [Symbol.toPrimitive]() {
        return this.age
    }
}


console.log(`${user}`)
console.log(user > user2)
console.log(user + 50)
console.log(user2 + 50)

//
user = {
    name: 'neo',
    age: 11,
    toString() {
        return this.name
    }
}

console.log(user + '')

user.valueOf = function() {
    return this.age
}

console.log(user + 100)

//
userStr = JSON.stringify(user)
console.log(userStr)
console.log(typeof userStr)