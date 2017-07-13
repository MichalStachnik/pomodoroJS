//Written by Michal Stachnik in 2017
var toggleStart = false
var mins = 25
var secs = 0
var clock = document.getElementById('clock')
var controlsSpan = document.getElementById('controlsSpan')
var plus = document.getElementById('plus')
var minus = document.getElementById('minus')
var startStop = document.getElementById('startStop')
var reset = document.getElementById('reset')
var ride = document.getElementById('ride')

clock.innerHTML = mins + ':0' + secs
controlsSpan.innerHTML = clock.innerHTML

formatTime = function(mins, secs){
    if(secs < 10){
        return mins.toString() + ':' + '0' + secs.toString()
    }
    else{
        return mins.toString() + ':' + secs.toString()
    }
}
plus.onclick = function(){
    toggleStart = false
    mins++
    var timeToDisplay = formatTime(mins, secs)
    controlsSpan.innerHTML = timeToDisplay
    clock.innerHTML = timeToDisplay
}
minus.onclick = function(){
    toggleStart = false
    mins--
    var timeToDisplay = formatTime(mins, secs)
    controlsSpan.innerHTML = timeToDisplay
    clock.innerHTML = timeToDisplay
}
reset.onclick = function(){
    console.log('clicked')
    toggleStart = false
    mins = 25
    secs = 0
    clock.innerHTML = '25:00'
    controlsSpan.innerHTML = '25:00' 
}
startStop.onclick = function(){
    var myTimeout = setInterval(timer, 1000)
    toggleStart = !toggleStart
    if(toggleStart){
        startStop.innerHTML = 'STOP'
    }
    else{
        startStop.innerHTML = 'START'
    }
    function timer(){
        if(!toggleStart){
            clearInterval(myTimeout)
        }
        else{
            if(secs === 0){
                mins--
                secs = 60
            }
            secs--
            var timeToDisplay = formatTime(mins, secs)
            console.log(timeToDisplay)
            clock.innerHTML = timeToDisplay
            if(timeToDisplay == '0:00'){
                toggleStart = false
                clock.innerHTML = controlsSpan.innerHTML
                ride.play()
            }
        }
    }
}