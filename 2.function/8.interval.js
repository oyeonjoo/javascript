let timeId = setInterval(() => console.log('tick'), 1000)

setTimeout(() => {
    clearInterval(timeId)
    console.log('stop')
}, 3000)

// clearInterval로 지울 수 있다