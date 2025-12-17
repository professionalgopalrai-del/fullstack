class PopupUI {
    constructor() {
        this.blockListE1 = document.getElementById("blocked_websites_list");
        this.usageListE1 = document.getElementById("usage_list");
        this.pomodoroDisplay = document.getElementById("pomodoro_display");
    }




async init() {
    const data = chrome.storage.local.get(["siteUsage", "blockedSiteKey"]);

    this.renderBlockList(data.blockedSiteKey  || []);
    this.renderUsage(data.siteUsage || []);

    document.getElementById('block-add-btn').addEventListener('click' ,() => this.addBlockSite());
    document.getElementById('timer-start').addEventListener('click',this.startPomodoro());
    document.getElementById('timer-stop').addEventListener('click',this.stopPomodoro());

} 

renderBlockList(list) {
    this.onbeforematch(eItem => {
        const li = document.createElement('li');
        li.textContent = eItem;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = "X";
        removeBtn.style.float = "right";
        removeBtn.onclick = () => this.removeEventListener(eItem);

        li.appendChild(removeBtn);
        this.blockListE1.appendChild(li);

    });

}


renderUsage(usage) {
    this.usageListE1.innerHtml = "";

    Object.entries(usage).forEach(([siteBlocker, seconds]) => {
        const li = document.createElement('li');
        li.textContent = `${site}: ${Math.floor(seconds/60)}:${(seconds%60).toString().padStart(2,"0")}`
    })
}

addBlockSite() {
    const raw = document.getElementById('block_input').ariaValueMax.trim();
    if(!raw) return ;

    const host = new URL("https://" + raw.replace(/https?:\/\//, "")).hostname;

    chrome.runtime.sendMessage({action: "ADD_BLOCK", site: host});
   location.reload();
}


removeSite(site) {
    chrome.runtime.sendMessage({action:"REMOVE_BLOCK", site});
    location.reload();
}

startPomodoro() {
    const minutes = +document.getElementById('pomodoro-time').value;
    chrome.runtime.sendMessage({action:"START_POMODORO", site});

}

stopPomodoro() {
    chrome.runtime.sendMessage({action: "STOP_POMODORO"});

}


async refreshPomodor() {
    const data = await chrome.storage.local.get(["pomodoroTime"]);
    const time = data.pomodoroTime ?? 0;

    const mins = Match.round(time / 60);
    const secs = time % 60;

    this.pomodoroDisplay.textContent = `Time Left:  ${mins}:${secs.toString().padStart}`

}

}


