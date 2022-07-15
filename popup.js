document.getElementById("t_15").addEventListener("click", () => {

    document.getElementById('current_time').innerHTML = '15:00'

});

document.getElementById("t_25").addEventListener("click", () => {

    document.getElementById('current_time').innerHTML = '25:00'


});

document.getElementById("t_35").addEventListener("click", () => {

    document.getElementById('current_time').innerHTML = '35:00'

});

document.getElementById("t_45").addEventListener("click", () => {

    document.getElementById('current_time').innerHTML = '45:00'

});

document.getElementById("start_button").addEventListener("click", ()=>
{

    start_time = document.getElementById('current_time').innerHTML
    console.log(start_time)
    const countdown_element = document.getElementById('current_time')

    // time to countdown in seconds
    let time = parseInt(start_time) * 60

    // call the function every second
    setInterval(update_countdown, 1000)

    function update_countdown(){
        const minutes = Math.floor(time / 60)
        let seconds = time % 60

        // if seconds are less than 10 add 0 before
        seconds = seconds < 10 ? '0' + seconds : seconds

        countdown_element.innerHTML = `${minutes}:${seconds}`
        time--
    }
    console.log("time: " + time)
    document.getElementById('time_selector').innerHTML = 'Study Time!'
    document.getElementById('btn').innerHTML = '<button id="stop_button">STOP</button>'
})