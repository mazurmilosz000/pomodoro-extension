function update_countdown(){
    chrome.storage.local.get(['time', 'running'], (res) => {
        const countdown_element = document.getElementById('current_time')
        let time = res.time
        console.log(time)
        console.log('is running?: ', res.running)
        let minutes = Math.floor(time / 60)
        let seconds = time % 60

        // if seconds are less than 10 add 0 before
        seconds = seconds < 10 ? '0' + seconds : seconds
        minutes = minutes < 10 ? '0' + minutes : minutes


        countdown_element.innerHTML = `${minutes}:${seconds}`
        // document.getElementById('time_selector').innerHTML = res.running ? 'Study Time!' : 'Paused!'
        document.getElementById('start_button').innerHTML = res.running ? 'STOP' : 'START'

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

document.getElementById("t_15").addEventListener("click", () => {

    document.getElementById('current_time').innerHTML = '15:00'
    chrome.storage.local.set({'time': 900})

});

document.getElementById("t_25").addEventListener("click", () => {

    document.getElementById('current_time').innerHTML = '25:00'
    chrome.storage.local.set({'time': 1500})


});

document.getElementById("t_35").addEventListener("click", () => {

    document.getElementById('current_time').innerHTML = '35:00'
    chrome.storage.local.set({'time': 2100})

});

document.getElementById("t_45").addEventListener("click", () => {

    document.getElementById('current_time').innerHTML = '45:00'
    chrome.storage.local.set({'time': 2700})

});



document.getElementById("start_button").addEventListener("click", ()=>
{

    chrome.alarms.create('Pomodoro', {
        periodInMinutes: 1 / 60,
    })

    // change running value
    chrome.storage.local.get(["running"], (res)=> {
        chrome.storage.local.set({'running': !res.running})
    })
})