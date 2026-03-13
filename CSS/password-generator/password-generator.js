(function() {
    const $ = id => document.getElementById(id);
    const lengthE1 = $('length');
    const lengthVal = $("lengthVal");
    const out = $('passwordOutput');
    const copyBtn = $('copyBtn');
    const generateBtn = $('generateBtn');
    const strengthVal = $('strengthVal');

    const pronouncableE1 = document.createElement('label');
    pronouncableE1.innerHTML = '<input type="checkbox" id="pronounceable">pronouncable';
    document.querySelector('.options').appendChild(pronouncableE1);


    const historyBox = document.createElement('div');
    historyBox.className = 'history';
    historyBox.innerHTML = '<h3>History</h3><ul id="historyList"></ul>';
    document.querySelector('.card').appendChild(historyBox);
    const historyList = $('historyList');


    const sets = {
        lowercase:'abcdefghijklmnopqrstuvwxyz',
        uppercase:'ABCDEFGHIJKLMNOPQERSTUVWXYZ',
        numbers:'0123456789',
        symbols:'!@#$%^&*()-_=+[]{};:,.<>?/~'
    };

    function secureRandomInt(max) {
        const array = new Uint32Array(1)
        window.crypto.getRandomValues(array);
        return array[0] % max;
    }

    function randomCharFrom(str){return str.charAt(secureRandomInt(str.length)); }


    function generatePronounceable(len){
        const vowels = 'aeiou';
        const cons = 'bcdfghjklmnpqrstvwxyz';
        let pw = '';
        for(let i=0; i<len; i++) {
            const pool = (i % 2 === 0) ? cons : vowels;
            pw += randomCharFrom(pool);
        }
        return pw;
    }


    function generatePassword() {
        const len = parseInt(lengthE1.value,10);
        const pronounceable = $('pronounceable').checked;


        if(pronounceable) {
            const pw = generatePronounceable(len);
            out.value = pw;
            updateStrength(pw);
            addToHistory(pw);
            return;
        }

        const useLower = $('lowercase').checked;
        const useUpper = $('uppercase').checked;
        const useNumbers = $('numbers').checked;
        const useSymbols = $('symbols').checked;

        let pool = ''; 
        if(useLower) pool += sets.lowercase;
        if(useUpper) pool += sets.uppercase;
        if(useNumbers) pool += sets.numbers;
        if(useSymbols) pool += sets.symbols;
        
        if(!pool) { alert('Select at least one character type.'); return;}

        const guaranteed = [];
        if(useLower) guaranteed.push(randomCharFrom(sets.lowercase));
        if(useUpper) guaranteed.push(randomCharFrom(sets.uppercase));
        if(useNumbers) guaranteed.push(randomCharFrom(sets.numbers));
        if(useSymbols) guaranteed.push(randomCharFrom(sets.symbols));

        const remaining = len - guaranteed.length;
        const result = [];
        for(let i=0;i<remaining;i++) result.push(randomCharFrom(pool));

        guaranteed.forEach(ch => {
            const pos = secureRandomInt(result.length + 1);
            result.splice(pos,0,ch);
        });

        const final = (result.join('')).slice(0,len);
        out.value = final;
        updateStrength(final);
        addToHistory(final);
     }

     function updateStrength(pw) {
        const lengthScore = Math.min(40, pw.length * 2);
        let variety = 0;
        if(/[a-z]/.test(pw)) variety += 20;
        if(/[A-Z]/.test(pw)) variety += 20;
        if(/[0-9]/.test(pw)) variety += 20;
        if(/[^A-Za-z0-9]/.test(pw)) variety += 20;
        const score = Math.min(100, lengthScore + variety);
        let label = 'Very weak';
        if(score >= 80) label = 'Very strong';
        else if(score >= 60) label = 'Strong';
        else if(score >= 40) label = 'Medium';
        else if(score >= 20) label = 'Weak';
        strengthVal.textContent = label + '(' + score + '%)';
     }

     function addToHistory(pw) {
        const li = document.createElement('li');
        li.textContent = pw;
        historyList.prepend(li);
        if(historyList.children.length > 15)
            historyList.removeChild(historyList.lastChild);
     }

     lengthE1.addEventListener('input', ()=> lengthVal.textContent = lengthE1.value);
     generateBtn.addEventListener('click', generatePassword);

     copyBtn.addEventListener('click', async ()=>{
        if(!out.value) return;
        try{
            await navigator.clipboard.writeText(out.value);
            copyBtn.textContent = 'Copied!';
            setTimeout(() =>copyBtn.textContent = 'Copy',1000);
        }catch(e){ alert('Copy failed.'); }
     });

     window.addEventListener('load', ()=>{
        lengthVal.textContent = lengthE1.value;
        generatePassword();
     });
}) ();