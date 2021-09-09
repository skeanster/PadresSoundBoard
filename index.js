function playSound1() {
    let one = new Audio("audio/Nando.aiff")
    one.currentTime=0;
    one.play()
    let btn = document.querySelector("button1")
    btn.classList.add('playing')
    setTimeout(function(){
    btn.classList.remove('playing')
    }, 70)
}

function playSound2() {
    let two = new Audio("audio/toast.aiff")
    two.currentTime=0;
    two.play()
    let btn2 = document.querySelector("button2")
    btn2.classList.add('playing')
    setTimeout(function(){
    btn2.classList.remove('playing')
    }, 70)
}

function playSound3() {
    let three = new Audio("audio/slamdiego.aiff")
    three.currentTime=0;
    three.play()
    let btn3 = document.querySelector("button3")
    btn3.classList.add('playing')
    setTimeout(function(){
    btn3.classList.remove('playing')
    }, 70)
}

function playSound4() {
    let four = new Audio("audio/wow.aiff")
    four.currentTime=0;
    four.play()
    let btn4 = document.querySelector("button4")
    btn4.classList.add('playing')
    setTimeout(function(){
    btn4.classList.remove('playing')
    }, 70)
}

function playSound5() {
    let five = new Audio("audio/crushed.aiff")
    five.currentTime=0;
    five.play()
    let btn5 = document.querySelector("button5")
    btn5.classList.add('playing')
    setTimeout(function(){
        btn5.classList.remove('playing')
        }, 70)
}

function playSound6() {
    let six = new Audio("audio/joe.aiff")
    six.currentTime=0;
    six.play()
    let btn6 = document.querySelector("button6")
    btn6.classList.add('playing')
    setTimeout(function(){
        btn6.classList.remove('playing')
        }, 70)
}

function playSound7() {
    let seven = new Audio("audio/San Diego.aiff")
    seven.currentTime=0;
    seven.play()
    let btn7 = document.querySelector("button7")
    btn7.classList.add('playing')
    setTimeout(function(){
        btn7.classList.remove('playing')
        }, 70)
}

function playSound8() {
    let eight = new Audio("audio/cronezone.aiff")
    eight.currentTime=0;
    eight.play()
    let btn8 = document.querySelector("button8")
    btn8.classList.add('playing')
    setTimeout(function(){
        btn8.classList.remove('playing')
        }, 70)
}