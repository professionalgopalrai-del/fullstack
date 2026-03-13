(() =>{
    const displayE1 = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');

    let expression = '';
    function updateDisplay() {
        displayE1.textContent = expression || '0';
    }

    function safeAppend(value) {
        const ops = ['+','-','*','/','.','%'];
        const last = expression.slice(-1);

        if(value === '.') {

            const idx = Math.max(
                expression.lastIndexOf('+'),
                expression.lastIndexOf('-'),
                expression.lastIndexOf('*'),
                expression.lastIndexOf('/'),
                expression.lastIndexOf('%')
            );
            const lastNum = expression.slice(idx + 1);
            if(lastNum.includes('.')) return;
            if(last === '' || ops.includes(last)) {
                expression += '0.';
                return;
            }
        }

        if (ops.includes(value)) {
            if (expression === '' && value  !== '-' ) return;
            if (ops.includes(last) && !(value === '-' && last !== '%')) {

                expression = expression.slice(0,-1) + value;
                return;
            }
        }
        expression += value;
    }

    function clearAll() {
        expression ='';
        updateDisplay();
    }

    function backspace() {
        expression = expression.slice(0, -1);
        updateDisplay();
    }

    function evaluateExpression() {
        if (!expression) return;


        let expr = expression.replace(/(\d+(\.\d+)?)%/g,  '($1/100)');


        if (!/^[0-9+\-*/().\s]+$/.test(expr))

            {
                displayE1.textContent = 'Error';
                return;
            }

            try{
                const result = Function(`"use strict"; return (${expr})`)();

                let out;
                if(Number .isFinite(result)) {
                    if(Number .isInteger(result)) out = String(result);
                    else out = parseFloat(result.toFixed(10)).toString();
                } else {
                    out ='Error';
                }
                expression = out;
                updateDisplay();
            
            } catch (e) {
                displayE1.textContent ='Error';
            }
        }

        buttons.forEach(btn => {
        btn.addEventListener
        })
    

    

})