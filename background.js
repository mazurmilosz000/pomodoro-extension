chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'Pomodoro'){
        console.log("alarm!!!!!")
        // doesn't work properly TODO: fix code below!!!
        chrome.storage.local.get(['running', 'time'], (res)=>{
            if(res.running){
                let timer = res.time-1
                chrome.storage.local.set({'time': timer})
                if (timer == 0){
                    this.registration.showNotification('Pomodoro Timer', {
                        body: `Time's up! Click here to start 5 minute break`,
                        icon: 'icon.png',
                        
                    })
                    chrome.storage.local.set({'running': !res.running})

                }
            }
        })
    }
})

self.addEventListener('notificationclick', ()=>{
    chrome.storage.local.set({
        'time': 300,
        'running': true
    })
})

chrome.runtime.onInstalled.addListener(()=>{

    console.log("its works!")
})