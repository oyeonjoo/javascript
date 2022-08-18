let age

function src() {
    let user = {
        name: 'amanda'
    }

    a(user)
    b(user)
}

function a(user) {
    user[Symbol('age')] = 12
    console.log(user)
}

function b(user) { // b가 사용하는 user 객체에 age는 존재하지만 조회할 수 없다. 사용할 수 있다
    console.log(Object.keys(user))
    console.log(user.name)
    console.log(user)
}

src()