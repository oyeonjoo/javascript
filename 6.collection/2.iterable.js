let range = {
    from: 1,
    to: 3,
    [Symbol.iterator]() {
        this.current = this.from
        return this // iterating할 일이 생기면 [Symbol.iterator] 실행 > return
    },

    next() {
        if(this.current <= this.to)
            return { // done, value가 있어야 한다
                done: false,
                value: this.current++
            }
        else
            return {
                done: true
            }
    }
}

for(let num of range) //for-of: iterator 색출, 반복 > [Symbol.iterator] 실행 > next()로 객체 return
    console.log(num)

//
function* generator() {
    let val = 1
    while(val <= 3) yield val++ // yield: 숫자 return
}

for(let num of generator())
    console.log(num) // generator가 활동을 마치면 iterating이 끝난다

let g = generator() // 객체를 return한다
console.log(g, typeof g) // generator {[[GeneratorState]]: 'suspended'} object, iterating 가능한 객체 return

//
function* gen() {
    yield* generator()
    yield* ['a', 'b'] // yeild*: 객체 return
    yield 9
}

for(let val of gen())
    console.log(val)