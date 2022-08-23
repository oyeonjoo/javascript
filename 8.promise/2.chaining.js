new Promise((resolve, reject) => setTimeout(resolve(1), 1000))
    .then(result => {
        console.log(result)
        return result + 1 // then(handler)이 return한 promise값을 바꾸고 싶을 때 return을 쓴다 > handler의 파라미터로 result값이 들어간다 
    }).then(result=>{
        console.log(result)
        return result + 1
    }).then(console.log)