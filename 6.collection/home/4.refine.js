/* 과제:
   refine() 이 정제된(중복 제거된) 배열을 return하라.
*/
let user =  {name: 'scott'}
let fn = () => 1
let arr = ['ucal', user, 'today', fn, 'ucal', user, 1, 1, fn]

function refine(arr) {
    return Array.from(new Set(arr))    
}

console.log(refine(arr))