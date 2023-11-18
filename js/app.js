let x = 0

while (x < 11) {
    x = x + 1

    let p = document.querySelector(`.i${x}`)

    let b = document.querySelector(`.i${x} b`)

    let y = x * 30

    let z = x * -30

    p.style = `transform: rotate(${y}deg);`

    b.style = `transform: rotate(${z}deg);`
}


function showtime () {
    let d = Date.now()

    let sec = document.querySelector(".sec")
    let hr = document.querySelector(".hr")
    let min = document.querySelector(".min")

    let x = d / 60000
    let y = d / 3.6e+6 + 6

    
    let rotateSec = 0.006 * d 
    let rotateMin = 6 * x
    let rotateHr = 30 * y 

    sec.style = `transform: rotate(${rotateSec}deg);`
    hr.style = `transform: rotate(${rotateHr}deg);`
    min.style = `transform: rotate(${rotateMin}deg);`

    console.log(rotateHr)
}

setInterval(showtime, 1)