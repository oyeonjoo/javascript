class Article {
    static publiser = 'ddanzi' // 클래스 디자인하면서 static 변수 추가

    constructor(title, viewCnt) {
        this.title = title
        this.viewCnt = viewCnt
    }

    static compare(article1, article2) {
        return article1 - article2
    }

    toString() {
        return this.title
    }

    valueOf() {
        return this.viewCnt
    }
}

console.log(Article.publiser) // static은 class.변수로 접근한다

//
Article.address = 'seoul' // 클래스 디자인 후에, 변수를 나중에 추가
console.log(Article.address)

Article.getPrice = () => 2000
console.log(Article.getPrice())

//
let article1 = new Article('java', 100)
let article2 = new Article('javascript', 10)

console.log(Article.compare(article1, article2))
console.log(Article.toString(article1 + ''))
