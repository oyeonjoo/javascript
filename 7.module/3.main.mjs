import {greet, add} from './1.named.mjs' // import: export 한 것을 조립, 그대로 가져오는 가장 기본적인 방법, default가 아니다
import * as named from './1.named.mjs' // named 라고 별명을 붙여준 것, * as named: 다른 모듈인데 이름이 같을 때, 네임 스페이스로 구별한다
import div from './2.default.mjs' // div 라고 이름을 붙여준 것, 기본(default)라서 div 라고 작성해도 된다

console.log(greet, add(1, 2))
console.log(named.greet, named.add(1, 2)) // 다른 모듈인데 이름이 같을 때, 네임 스페이스로 구별한다

console.log(div(4, 2))