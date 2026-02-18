// Global State
let visualInput = []; // Array to track each symbol/number separately
let cursorPos = 0;    // Tracks where the "|" is
let fixValue = null;

const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');

// --- 1. CORE DISPLAY LOGIC ---
function updateDisplay() {
    let htmlContent = "";
    visualInput.forEach((token, index) => {
        if (index === cursorPos) htmlContent += '<span class="cursor">|</span>';
        
        // If the token is ^2 or ^3, wrap the number in <sup> tags for the UI
        if (token === "^2") htmlContent += '<sup>2</sup>';
        else if (token === "^3") htmlContent += '<sup>3</sup>';
        else htmlContent += token;
    });
    if (cursorPos === visualInput.length) htmlContent += '<span class="cursor">|</span>';
    
    questionEl.innerHTML = htmlContent;
    let logicString = visualInput.join('');
    // Convert visual tokens to math logic for eval
    // Example: ['sin(', '90', ')'] -> 'Math.sin((Math.PI/180)*90)'
    logicString = logicString
        .replace(/×/g, '*')      // Replace visual multiplication
        .replace(/÷/g, '/')      // Replace visual division
        .replace(/−/g, '-')      // FIX: Replace mathematical minus with logic hyphen
        .replace(/\^/g, '**')    // Replace visual power
        .replace(/sin\(/g, 'Math.sin((Math.PI/180)*')
        .replace(/cos\(/g, 'Math.cos((Math.PI/180)*')
        .replace(/tan\(/g, 'Math.tan((Math.PI/180)*')
        .replace(/sin⁻¹\(/g, '(180/Math.PI)*Math.asin(')
        .replace(/cos⁻¹\(/g, '(180/Math.PI)*Math.acos(')
        .replace(/tan⁻¹\(/g, '(180/Math.PI)*Math.atan(')
        .replace(/√\(/g, 'Math.sqrt(')
        .replace(/∛\(/g, 'Math.cbrt(')
        // Handle the superscript tags if they exist in the array
        .replace(/\^2/g, '**2') // Specifically target the ^2 token
        .replace(/\^3/g, '**3') // Specifically target the ^3 token
        .replace(/\^/g, '**');   // Target general nth power

    // Real-time calculation
    try {
        if (logicString === "") {
            answerEl.innerText = "0";
        } else {
            // Use a temporary variable to check if parentheses are balanced
        let openBrackets = (logicString.match(/\(/g) || []).length;
        let closeBrackets = (logicString.match(/\)/g) || []).length;
        
        // Only evaluate if brackets are closed, otherwise it throws an error
        if (openBrackets === closeBrackets) {
            let res = eval(logicString);
            if (res !== undefined && !isNaN(res)) {
                answerEl.innerText = fixValue !== null ? 
                    res.toFixed(fixValue) : 
                    parseFloat(res.toPrecision(12));
            }
        }
    }
    } catch (e) { /* Ignore errors while typing */ }
}

// --- 2. NAVIGATION & DELETE ---
function moveCursor(dir) {
    cursorPos = Math.max(0, Math.min(visualInput.length, cursorPos + dir));
    updateDisplay();
}

function deleteAtCursor() {
    if (cursorPos > 0) {
        visualInput.splice(cursorPos - 1, 1); // Remove token at cursor
        cursorPos--;
        updateDisplay();
    }
}

function clearAll() {
    visualInput = [];
    cursorPos = 0;
    answerEl.innerText = "0";
    updateDisplay();
}

// --- 3. INPUT FUNCTIONS ---
function appendNumber(num) {
    // Block multiple decimals in one number segment
    if (num === '.') {
        let currentNumSegment = "";
        for (let i = cursorPos - 1; i >= 0; i--) {
            if (['+', '-', '×', '÷', '(', '^'].includes(visualInput[i])) break;
            currentNumSegment = visualInput[i] + currentNumSegment;
        }
        if (currentNumSegment.includes('.')) return;
    }
    visualInput.splice(cursorPos, 0, num);
    cursorPos++;
    updateDisplay();
}

function appendOperator(op) {
    // Mapping internal math symbols to pretty visual symbols
    const visualMap = {
        '*': '×', 
        '/': '÷', 
        '**': '^', 
        '+': '+', 
        '-': '−', 
        '(': '(', 
        ')': ')'
    };    
    const visualOp = visualMap[op] || op;    
    // 1. Block operators at the very start (except minus and parentheses)
    if (cursorPos === 0 && ['×', '÷', '^', ')'].includes(visualOp)) return;
    // 2. Prevent consecutive operators (e.g., ++ or *+)
    // We only replace if the current and previous are basic math operators
    const basicOps = ['+', '−', '×', '÷', '^'];
    const prevToken = visualInput[cursorPos - 1];
    if (basicOps.includes(visualOp) && basicOps.includes(prevToken)) {
        // Replace the operator to the left of the cursor
        visualInput[cursorPos - 1] = visualOp;
    } else {
        // Otherwise, just insert it at the cursor
        visualInput.splice(cursorPos, 0, visualOp);
        cursorPos++;
    }

    updateDisplay();
}

function calcTrig(type) {
    const names = {sin:'sin(', cos:'cos(', tan:'tan(', asin:'sin⁻¹(', acos:'cos⁻¹(', atan:'tan⁻¹('};
    visualInput.splice(cursorPos, 0, names[type]);
    cursorPos++;
    updateDisplay();
}

function calcRoot(n) {
    const symbol = n === 2 ? '√(' : '∛(';
    visualInput.splice(cursorPos, 0, symbol);
    cursorPos++;
    updateDisplay();
}

function calcPower(exp) {
    // We insert a "clean" token that our code can easily recognize later
    visualInput.splice(cursorPos, 0, "^" + exp);
    cursorPos++;
    updateDisplay();
}

function calculate() {
    const finalAns = answerEl.innerText;
    if (finalAns !== "Error") {
        visualInput = [finalAns];
        cursorPos = 1;
        updateDisplay();
    }
}

// --- FIX BUTTON LOGIC ---
function toggleFixMenu() {
    const menu = document.getElementById("fixMenu");
    if (menu) {
        menu.classList.toggle("show");
    }
}

function applyFix(val) {
    fixValue = val;
    const menu = document.getElementById("fixMenu");
    if (menu) menu.classList.remove("show");
    
    // Update the button text to show current state
    const fixBtn = document.querySelector('.fix-container .btn-util');
    if (fixBtn) fixBtn.innerText = val === null ? "FIX" : `FIX:${val}`;
    
    updateDisplay();
}

// --- NTH ROOT LOGIC ---
function appendNthRoot() {
    // This allows the user to write "number ^ (1 / number)"
    // We append the power-of-one-over logic
    visualInput.splice(cursorPos, 0, "^(1/");
    cursorPos++;
    updateDisplay();
}

window.addEventListener('keydown', (e) => {
    const key = e.key;

    // 1. Numbers & Decimal (Works as you noted)
    if (/[0-9.]/.test(key)) {
        appendNumber(key);
    } 
    // 2. Operators & Parentheses (The fix)
    else if (['+', '-', '*', '/', '(', ')', '^'].includes(key)) {
        e.preventDefault(); // Stop browser search/scroll
        // Handle the power key (^) as nth power
        const op = (key === '^') ? '**' : key;
        appendOperator(op);
    } 
    // 3. Action Keys
    else if (key === 'Enter') {
        e.preventDefault();
        calculate();
    } else if (key === 'Backspace') {
        deleteAtCursor();
    } else if (key === 'ArrowLeft') {
        moveCursor(-1);
    } else if (key === 'ArrowRight') {
        moveCursor(1);
    } else if (key === 'Escape') {
        clearAll();
    }
});

