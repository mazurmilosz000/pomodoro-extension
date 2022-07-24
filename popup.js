function update_countdown(){
    chrome.storage.local.get(['time', 'running', 'dark_mode'], (res) => {
        const countdown_element = document.getElementById('current_time')
        let time = res.time
        console.log(time)
        console.log('is running?: ', res.running)
        let minutes = Math.floor(time / 60)
        let seconds = time % 60

        // if seconds & minutes are less than 10 add 0 before
        seconds = seconds < 10 ? '0' + seconds : seconds
        minutes = minutes < 10 ? '0' + minutes : minutes


        countdown_element.innerHTML = `${minutes}:${seconds}`
        document.getElementById('start_button').innerHTML = res.running ? 'STOP' : 'START'
        if (res.dark_mode) {
            document.body.style.backgroundColor = "rgb(46, 46, 46)"
        }
        else {
            document.body.style.backgroundColor = "rgb(227, 134, 139)"
        }
})

}


const resetButton = document.getElementById('reset_button')
resetButton.addEventListener('click', () => {
    chrome.storage.local.set({
        'running': false,
        'time': 0
    })
})

update_countdown()

// call the function every second
setInterval(update_countdown, 1000)

document.getElementById("pomodoro").addEventListener("click", () => {

    chrome.storage.local.get(['running'], (res)=>{
        if(res.running){
            if (confirm('Timer is running. Are you sure?')) {
                document.getElementById('current_time').innerHTML = '25:00'
                chrome.storage.local.set({'time': 1500, 'running': false})
            }
        }
        else {
            document.getElementById('current_time').innerHTML = '25:00'
            chrome.storage.local.set({'time': 1500, 'running': false})
        }
    })
});

document.getElementById("short_b").addEventListener("click", () => {

    chrome.storage.local.get(['running'], (res)=>{
        if(res.running){
            if (confirm('Timer is running. Are you sure?')) {
                document.getElementById('current_time').innerHTML = '05:00'
                chrome.storage.local.set({'time': 300, 'running': false})
            }
        }
        else {
            document.getElementById('current_time').innerHTML = '05:00'
            chrome.storage.local.set({'time': 300, 'running': false})
        }
    })
});

document.getElementById("long_b").addEventListener("click", () => {

    chrome.storage.local.get(['running'], (res)=>{
        if(res.running){
            if (confirm('Timer is running. Are you sure?')) {
                document.getElementById('current_time').innerHTML = '15:00'
                chrome.storage.local.set({'time': 900, 'running': false})
            }
        }
        else {
            document.getElementById('current_time').innerHTML = '15:00'
            chrome.storage.local.set({'time': 900, 'running': false})
        }
    })

});


document.getElementById("start_button").addEventListener("click", ()=>
{

    chrome.alarms.create('Pomodoro', {
        periodInMinutes: 1 / 60,
    })

    // change running value
    chrome.storage.local.get(['running', 'time'], (res)=> {
            if (res.time != 0){
                chrome.storage.local.set({'running': !res.running})
            }
    })
})

// changing background color
document.getElementById('change_mode').addEventListener('click', ()=>{
    chrome.storage.local.get(['dark_mode'], (res) => {
        if (res.dark_mode) {
            chrome.storage.local.set({'dark_mode': false})
            document.body.style.backgroundColor = "rgb(227, 134, 139)"
        }else {
            chrome.storage.local.set({'dark_mode': true})
            document.body.style.backgroundColor = "rgb(46, 46, 46)"
        }
    })

})
