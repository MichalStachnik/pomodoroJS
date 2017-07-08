var toggleStart = false
var mins = 25
var secs = 0 
var clock = document.getElementById('clock')

clock.innerHTML = mins

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
            console.log('firing')
            console.log(toggleStart)
        }
    
    }
      
}