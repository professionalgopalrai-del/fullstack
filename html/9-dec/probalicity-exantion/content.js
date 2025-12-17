class pageBlocker {
    async init() {
        const data = await chrome.storage.local.get(["blockedSiteKey"]);
        this.blockList = data.blockedSiteKey ? [...data.blockedSiteKey] : [];
         

        const currentHost = location.hostname;
        const isBlocked = this.blockList.some(site => {
           return currentHost.includes(site) || site.includes(currentHost);
        });

        if(isBlocked) {
            document.documentElement.innerHTML = "";

            const blockDiv = document.createElement('div');
            blockDiv.style.cssText = `
            display:flex;
            justify-content:center;
            align-items:center;
            height:100vh;
            background:black;
            color:whitw;
            text-align:center;
            margin:0;
            padding:20px;
            box-sizing:border-box;

            `;

            blockDiv.innerHTML =`
            <div>
            <h1>  Site Blocked</h1>
            <p> This site has been blocked by the productivity extention!</p>
            <p style="font-size:16px; margin: 30px; opacity:0.7;">Stay focused on what really matters!</p>
            </div>
            `;

            document.documentElement.append(blockDiv);
        }

    } catch(error){
        console.log("PageBlocker :", error);
        
    }
}

// google.com -> https:// wwww.google.com 
