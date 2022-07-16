// chrome.alarms.create("Pomodoro", {
//     periodInMinutes: 1 / 60,
// })

// chrome.alarms.onAlarm.addListener((alarm) => {
//     if (alarm.name === "Pomodoro"){
//         let timer = localStorage.get("timer")
//         console.log(timer)
//     }
// })

chrome.runtime.onInstalled.addListener(()=>{

    console.log("its works!")
})