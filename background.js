chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "Pomodoro"){
        console.log("alarm!!!!!")
        // doesn't work properly TODO: fix code below!!!
        chrome.storage.local.get(["running"], (res)=>{
            console.log(res.running)
        })
    }
})

chrome.runtime.onInstalled.addListener(()=>{

    console.log("its works!")
})