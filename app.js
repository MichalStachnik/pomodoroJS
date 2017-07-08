var toggleStart = false
var mins = 25
var secs = 0 
var clock = document.getElementById('clock')
var controlsSpan = document.getElementById('controlsSpan')
var plus = document.getElementById('plus')
var minus = document.getElementById('minus')

clock.innerHTML = mins
controlsSpan.innerHTML = clock.innerHTML

plus.onclick = function(){
    toggleStart = false
    controlsSpan.innerHTML = Number(controlsSpan.innerHTML) + 1
    clock.innerHTML = controlsSpan.innerHTML
}
minus.onclick = function(){
    toggleStart = false
    controlsSpan.innerHTML = Number(controlsSpan.innerHTML) - 1
    clock.innerHTML = controlsSpan.innerHTML
}

clock.onclick = function(){
    console.log('clicked')
    var myTimeout = setInterval(timer, 1000)
    toggleStart = !toggleStart
    function timer(){
        if(!toggleStart){
            clearInterval(myTimeout)
        }
        else{
            var currentDisplay = Number(clock.innerHTML)
            currentDisplay--
            clock.innerHTML = currentDisplay
            console.log(currentDisplay)
        }
    }
}