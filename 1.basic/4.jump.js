if(true){}
if(false){} else {}

if(undefined) {console.log('!')}
if(null) {console.log('!')}
if(0) {console.log('!')}

if(-1) {console.log('!')}

console.log(true ? 1 : 0)

let val

switch('boo') {
    case 'bar': val = 'bar'; break // 한줄에 명령문이  1개 이상이면 ;으로 구분해준다
    case 'baz': val = 'baz'
    default: val = 'all right.'
}
console.log(val)