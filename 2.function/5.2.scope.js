let a = 1 // global scope
//let a : error

{ // local scope
    console.log(a)
}
// scope 내에 있으면 얼마든지 접근 가능하다
// 블록안에 a가 없기 때문에 global의 a 값 사용
{
    let a = 2
    console.log(a) // scope에서 사용하면 사라진다 > global scope 사용
} // 가까이에 있는 scope을 우선사용한다.(블록안에 a가 있으면 사용)

console.log(a)