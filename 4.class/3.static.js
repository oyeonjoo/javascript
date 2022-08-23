class Article {
    static publiser = 'ddanzi' // 클래스 디자인하면서 static 변수 추가

    constructor(title, viewCnt) {
        this.title = title
        this.viewCnt = viewCnt
    }

    static compare(article1, article2) {
        return article1 - article2 // 오름차순
    }

    toString() {
        return this.title
    }

    valueOf() {
        return this.viewCnt
    }

    [Symbol.toPrimitive](hint) {
        return hint == 'number' ? this.viewCnt : this.title
    } // symbol을 사용하고, toString과 valueOf는 사용하지 않는다
}

console.log(Article.publiser) // static은 class.변수로 접근한다

//
Article.address = 'seoul' // 클래스 디자인 후에, 변수를 나중에 추가(할당 연산자 사용)
console.log(Article.address)

Article.getPrice = () => 2000 // Article에 static method인 getPrice 추가
console.log(Article.getPrice()) // getPrice를 사용하려면 class.method(Article class 안에 있기 때문)

//
let article1 = new Article('java', 100)
let article2 = new Article('javascript', 10)

console.log(Article.compare(article1, article2))

// 과제: [Symbol.toPrimitive]() 추가하라.
console.log(`${article1}`)
console.log(article1 + '')

//
console.log(article1.publiser, article1.address, article1.compare)
// publiser, address, compare가 없기 때문에 undefined undefined undefined
// static 변수는 클래스에 있는 것이지, 객체 안에 있는게 아니다
console.log(Article.title, Article.viewCnt)

console.log(Object.keys(Article))
// class에도 keys가 작동한다, ['publiser', 'address', 'getPrice']
console.log(Article.prototype)
// {constructor: ƒ, toString: ƒ, valueOf: ƒ, Symbol(Symbol.toPrimitive): ƒ}
console.log(Object.keys(article1))
// static method는 조회하지 못한다(compare는 조회되지 않는다)

//
let articles = [article1, article2] // 숫자로 바뀐다 > article1, 2 순으로 오름차순 정렬(10, 100)
console.log(articles)

articles.sort(Article.compare) // sort: 원소를 검열한다
console.log(articles)

Article.compare = (a, b) => b - a // 내림차순
articles.sort(Article.compare)
console.log(articles) // 숫자로 바뀐다 > article2, 1 순으로 내림차순 정렬(100, 10)