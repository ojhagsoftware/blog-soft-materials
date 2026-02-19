let selectedCell = null;
let currentLevel = 2;
let targetRowSums = [];
let targetColSums = [];

function initGame() {
    currentLevel = parseInt(document.getElementById('level-select').value);
    const grid = document.getElementById('main-grid');
    const qArea = document.getElementById('question-area');
    
    grid.innerHTML = '';
    qArea.innerHTML = '';
    selectedCell = null;

    const totalDim = currentLevel + 2;
    // Inject grid size variable for CSS calculations
    grid.style.setProperty('--grid-size', totalDim);
    grid.style.gridTemplateColumns = `repeat(${totalDim}, auto)`;

    // Generate random solution
    let nums = [];
    while(nums.length < currentLevel * currentLevel) {
        let r = Math.floor(Math.random() * 30) + 1;
        if(!nums.includes(r)) nums.push(r);
    }

    targetRowSums = Array(currentLevel).fill(0);
    targetColSums = Array(currentLevel).fill(0);
    for(let i=0; i < currentLevel; i++) {
        for(let j=0; j < currentLevel; j++) {
            let val = nums[i * currentLevel + j];
            targetRowSums[i] += val;
            targetColSums[j] += val;
        }
    }

    // Build Game Board
    for(let r=0; r < totalDim; r++) {
        for(let c=0; c < totalDim; c++) {
            // Merged Plus Square
            if (r >= currentLevel && c >= currentLevel) {
                if (r === currentLevel && c === currentLevel) {
                    const plus = document.createElement('div');
                    plus.className = `cell symbol`;
                    plus.style.gridColumn = "span 2";
                    plus.style.gridRow = "span 2";
                    plus.innerText = "+";
                    grid.appendChild(plus);
                }
                continue; 
            }

            const cell = document.createElement('div');
            cell.className = `cell`;

            if (r < currentLevel && c < currentLevel) {
                cell.classList.add('play');
                cell.id = `p-${r}-${c}`;
                cell.innerText = "0";
                cell.onclick = () => handleSelect(cell);
            } 
            else if (r < currentLevel && c === currentLevel) {
                cell.classList.add('sum');
                cell.id = `sr-${r}`;
            } 
            else if (r < currentLevel && c === totalDim - 1) {
                cell.classList.add('ans');
                cell.id = `ar-${r}`;
                cell.innerText = targetRowSums[r];
            }
            else if (r === currentLevel && c < currentLevel) {
                cell.classList.add('sum');
                cell.id = `sc-${c}`;
            }
            else if (r === totalDim - 1 && c < currentLevel) {
                cell.classList.add('ans');
                cell.id = `ac-${c}`;
                cell.innerText = targetColSums[c];
            }
            grid.appendChild(cell);
        }
    }

    // Build Question Area
    let shuffled = [...nums].sort(() => Math.random() - 0.5);
    shuffled.forEach(val => {
        const q = document.createElement('div');
        q.className = `cell question`;
        q.innerText = val;
        q.onclick = () => handleSelect(q);
        qArea.appendChild(q);
    });

    updateCalculations();
}

function handleSelect(cell) {
    if (selectedCell) {
        if (selectedCell !== cell) {
            let temp = cell.innerText;
            cell.innerText = selectedCell.innerText;
            selectedCell.innerText = temp;
        }
        selectedCell.classList.remove('selected');
        selectedCell = null;
        updateCalculations();
    } else {
        selectedCell = cell;
        cell.classList.add('selected');
    }
}

function updateCalculations() {
    let allMatched = true;
    for(let i=0; i<currentLevel; i++) {
        let rowSum = 0;
        let colSum = 0;
        for(let j=0; j<currentLevel; j++) {
            rowSum += parseInt(document.getElementById(`p-${i}-${j}`).innerText) || 0;
            colSum += parseInt(document.getElementById(`p-${j}-${i}`).innerText) || 0;
        }
        allMatched &= check('sr-'+i, 'ar-'+i, rowSum, targetRowSums[i]);
        allMatched &= check('sc-'+i, 'ac-'+i, colSum, targetColSums[i]);
    }

    if (allMatched && !Array.from(document.querySelectorAll('.play')).every(c => c.innerText === "0")) {
        document.getElementById('win-modal').style.display = 'flex';
    }
}

function check(sid, aid, cur, tar) {
    const s = document.getElementById(sid);
    const a = document.getElementById(aid);
    if (!s || !a) return;
    s.innerText = cur;
    if (cur === tar && cur !== 0) {
        s.classList.add('matched');
        a.classList.add('matched');
        return true;
    } else {
        s.classList.remove('matched');
        a.classList.remove('matched');
        return false;
    }
}

function closeModal() {
    document.getElementById('win-modal').style.display = 'none';
    initGame();
}

window.onload = initGame;
