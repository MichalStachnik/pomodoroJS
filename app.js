var toggleStart = false
var mins = 25
var secs = 0 
var clock = document.getElementById('clock')

clock.innerHTML = mins

function startTimer(){

    var currentDisplay = Number(clock.innerHTML)
    toggleStart = !toggleStart
    console.log(toggleStart)
    if(toggleStart){
        setInterval(function(){
            currentDisplay--
            console.log(currentDisplay)
            clock.innerHTML = currentDisplay
        }, 1000)
    }
}
clock.onclick = function(){
    console.log('clicked')
    
    startTimer()
    
}