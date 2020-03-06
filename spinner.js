let dots=1

let myInterval = setInterval(()=> {
    let dotsDisplay=''
    for (let i=1; i<dots; i++) {
        dotsDisplay +='.'
    }
    let loadingMessage = `loading${dotsDisplay}`
    document.querySelector('.spinnerMessage').textContent=loadingMessage
    if (dots<4) {
        dots++
    } else {
        dots=1
    }
}, 750)

// use this line to stop the dot display
//clearInterval(myInterval)
