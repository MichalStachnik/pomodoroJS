var toggleStart = false
var mins = 25
var secs = 0 
var clock = document.getElementById('clock')

clock.innerHTML = mins

var myTimeout = setInterval(function(){
                console.log('firing')
            }, 1000)
function startTimer(){

    var currentDisplay = Number(clock.innerHTML)
    toggleStart = !toggleStart
    console.log(toggleStart)
    
    if(toggleStart){
        
    }
    else if(!toggleStart){
        
        clearInterval(myTimeout)
    }
}
clock.onclick = function(){
    console.log('clicked')
    
    startTimer()
    
}