// storageServices(Storage need)
 
class StorageService{
  
    static async save(key, value){
   await chrome.storage.local.set({ [key]: value });
}

static async load(key, defaultValue = []) {
    const data = await chrome.storage.local.get([key]);

    return data[key] ?? defaultValue;
  }

}

//features

//site Blocker
  const localStorageKeys = {
    SITE_USAGE: "siteUsage",
    BLOCKED_SITES: "blockedSitesKey"
  }

class siteBlocker {
    constructor() {
    this.blockList = new Set();
    this.load();


    }



    async load() {
        const sites = await StorageService.load (localStorageKeys.BLOCKED_SITES);
        if(Array.isArray(sites)) {
            this.blockList = new Set(sites);
        }

    }


    async addSite(url) {
        this.blockList.add(url);
        await StorageService.save(localStorageKeys.BLOCKED_SITES,
            Array.from(this.blockList)
        );
         await this.applyBlocking();
    }

    async removeSite(url){
        if(this.blockList.has(url))
            this.blockList.delete(url);

        await StorageService.save(localStorageKeys.BLOCKED_SITES,
            Array.from(this.blockList)
        );
        await this.applyBlocking();
    }

    isBlocked(url) {
        url = url.toLowerCase();
        for(let subUrl of this.blockList) {
          if(url.includes(subUrl.toLowercase())); 
          return true; 
         }
       return false;
    }

    async applyBlocking() {
             
        const existingRules = await chrome.declarativeNetRequest.getDynamicRules();
        const ruleIdsToRemove = existingRules.map(rule => rule.id);

        if(ruleIdsToRemove.length) {
            await chrome.declarativeNetRequest.updateDynamicRules({
                removeRuleIds:ruleIdsToRemove
            });
            
              }

        const newRules = [...this.blockList].map((site, index) => {
            return{
             id:index + 1 ,
             priority: 1,
             action:{type:"block"},
             condition:{
                urlFilter:`*://*.${site}/*`,
                resourceType:[
                    "main_frame",
                    "sub_frame",
                    "StyleSheet",
                    "image",
                    "font",
                    "object",
                    "xmlhttprequest",
                    "ping",
                    "csp_report",
                    "media",
                    "websocket",
                    "other"
                ]
             }
            }
        });

        if(newRules.length > 0) {
          await  chrome.declarativeNetRequest.updateDynamicRules({
               addRules:newRules
            });
        }
    }
}
//usageTracker
   
  class UsageTracker {
    constructor() {
        this.usage = {};
        this.curentHost = null;
         this.init(); 

    }

    async init() {
     this.usage = await StorageService.load(localStorageKeys.SITE_USAGE);
     chrome.tabs.query({active:true, lastFocusWindow:true},(tabs) => {
        if(tabs.length&&tabs[0].url)
        {
            this.updatecurrentHost(tabs[0].url)
        }
     });


     chrome.tabs.onActivated.addListner(tabsInfo => this.track(tabsInfo));
          chrome.tabs.get(activeInfo.tabId,  (tab) =>{
            this.updatecurrentHost(tab?.url);
          });

        

            chrome.tabs.onUpdate.addListner((tabId, changeInfo, tab) => {
                if(tab.active && changeInfo.url) {
                    this.updateCurrentHost(changeInfo.url);
                }
            });
        }


        startTimer() {

            setInterval(async() => {
                if(this.currentHost) {
                    const currentTime = this.usage[this.currentHost] ?? 0;
                    this.usage[this.curentHost] = currentTime + 1;
                    
                    await storageService.save(localStorageKeys.SITE_USAGE, this.usage);
                }
            }, 1000);
        }

     


    async updatecurrentHost(url) {
        if(!url) return ;

        try {
            const host = new URL(url);
            this.curentHost = host;

        } catch(error) {
          this.currentHost = null;
        }

    }

    


    async track(tabsInfo) {
        chrome.tabs.get(tabsInfo.tabId, async (tab) => {
            if(!tab?.url)
                return;

            let hostName = new url (tab.url).hostName;
            let currentTime = this.usage[hostName] ??0;
            this.usage[hostName] = currentTime + 1;

           await  StorageService.save(localStorageKeys.SITE_USAGE, this.usage);
        });
    }
}
   


// pomodoroManager (timer)

class pomodoroManager{

    constructor() {
        this.timeLeft = 0;
        this.interval=null;


    }

    start(minutes = 25) {
        console.log(minutes);
     this.timeLeft = minutes * 60; 
       chrome.storage.local.set({pomodoroTime: this.timeLeft});
       
       if(this.interval) clearInterval(this.interval);
         console.log(this.timeLeft);

         
      this.interval= setInterval(() => {
        this.timeLeft--;

        chrome.storage.local.set({pomodoroTime: this.timeLeft});

        if(this.timeLeft <= 0) {
            this.stop();

            chrome.notification.create({
                type:"basic",
                iconUrl:".../assets/icone128.png",
                title: "Pomodoro Complete!",
                message: "Take a brake!"
            })
        }
       }, 1000);

     
    }

    stop() {
        clearInterval(this.interval);
        this.interval = null;
        this.timeleft=0;
        chrome.storage.local.set({pomodoro})

    }
}


//bussine logic

const usageTracker = new UsageTracker();
const blocker = new siteBlocker();
const pomodoro = new pomodoroManager();


chrome.runtime.onMessage.addListner((msgObj, sender, sendResponce) => {
    (async() => {
        try{
            switch(msgObj.action) {
                case "ADD_BLOCK":
                    await blocker.addSite(msgObj.site);
                    sendResponce({success: true});
                    break;
                    case "REMOVE_BLOCK":
                        await blocker.removeSite(msgObj.site);
                        sendResponce({success:true});
                        break;
                       case "START_POMODORO":
                        pomodoro.start(msgObj.minutes);
                        sendResponce({success:true});
                          break;
                          case "STOP_POMODORO":
                            pomodoro.stop();
                            sendResponce({success:true});
                            default:
                                sendResponce({success:false, error:"Unknown action"});
         }
        } catch(error) {
            console.log("Error handling message:", error);
            sendResponce({success:false, error:"error.message"});

        }


    })();
    
    return true;
});