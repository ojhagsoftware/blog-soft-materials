/**
 * Addition Game Pro - Logic Script
 * Adapted for Blog Integration
 */

let selectedCell = null;
let currentLevel = 2;
let targetRowSums = [];
let targetColSums = [];

/**
 * Main Initialization Function
 * Called when the game is selected or "New Game" is clicked
 */
function initAdditionGame() {
    const levelSelect = document.getElementById('level-select');
    const grid = document.getElementById('main-grid');
    const qArea = document.getElementById('question-area');

    const totalDim = currentLevel + 2;
    // This tells the CSS how many columns to create
    grid.style.setProperty('--grid-size', totalDim);
    
    // Safety check: ensure elements exist before running
    if (!levelSelect || !grid || !qArea) {
        console.warn("Addition Game: Required DOM elements not found. Waiting for injection...");
        return;
    }

    currentLevel = parseInt(levelSelect.value);
    grid.innerHTML = '';
    qArea.innerHTML = '';
    selectedCell = null;

    const totalDim = currentLevel + 2;
    
    // Set grid layout
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = `repeat(${totalDim}, auto)`;
    grid.style.gap = '10px';

    // 1. Generate random solution
    let nums = [];
    while (nums.length < currentLevel * currentLevel) {
        let r = Math.floor(Math.random() * 30) + 1;
        if (!nums.includes(r)) nums.push(r);
    }

    // 2. Calculate Target Sums
    targetRowSums = Array(currentLevel).fill(0);
    targetColSums = Array(currentLevel).fill(0);
    for (let i = 0; i < currentLevel; i++) {
        for (let j = 0; j < currentLevel; j++) {
            let val = nums[i * currentLevel + j];
            targetRowSums[i] += val;
            targetColSums[j] += val;
        }
    }

    // 3. Build Game Board Grid
    for (let r = 0; r < totalDim; r++) {
        for (let c = 0; c < totalDim; c++) {
            
            // Handle the bottom-right symbol area
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

            // Playable Cells (Where numbers are placed)
            if (r < currentLevel && c < currentLevel) {
                cell.classList.add('play');
                cell.id = `p-${r}-${c}`;
                cell.innerText = "0";
                cell.onclick = () => handleSelect(cell);
            } 
            // Current Row Sums
            else if (r < currentLevel && c === currentLevel) {
                cell.classList.add('sum');
                cell.id = `sr-${r}`;
            } 
            // Target Row Answers
            else if (r < currentLevel && c === totalDim - 1) {
                cell.classList.add('ans');
                cell.id = `ar-${r}`;
                cell.innerText = targetRowSums[r];
            }
            // Current Column Sums
            else if (r === currentLevel && c < currentLevel) {
                cell.classList.add('sum');
                cell.id = `sc-${c}`;
            }
            // Target Column Answers
            else if (r === totalDim - 1 && c < currentLevel) {
                cell.classList.add('ans');
                cell.id = `ac-${c}`;
                cell.innerText = targetColSums[c];
            }
            grid.appendChild(cell);
        }
    }

    // 4. Build Question/Number Pool Area
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

/**
 * Handles number selection and swapping
 */
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

/**
 * Calculates current sums and checks for victory
 */
function updateCalculations() {
    let allMatched = true;
    for (let i = 0; i < currentLevel; i++) {
        let rowSum = 0;
        let colSum = 0;
        for (let j = 0; j < currentLevel; j++) {
            rowSum += parseInt(document.getElementById(`p-${i}-${j}`).innerText) || 0;
            colSum += parseInt(document.getElementById(`p-${j}-${i}`).innerText) || 0;
        }
        allMatched &= check('sr-' + i, 'ar-' + i, rowSum, targetRowSums[i]);
        allMatched &= check('sc-' + i, 'ac-' + i, colSum, targetColSums[i]);
    }

    // Victory Condition
    const winModal = document.getElementById('win-modal');
    const isStarted = !Array.from(document.querySelectorAll('.play')).every(c => c.innerText === "0");
    
    if (allMatched && isStarted && winModal) {
        winModal.style.display = 'flex';
    }
}

/**
 * Updates individual cell classes for matched sums
 */
function check(sid, aid, cur, tar) {
    const s = document.getElementById(sid);
    const a = document.getElementById(aid);
    if (!s || !a) return false;

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

/**
 * Closes victory modal
 */
function closeModal() {
    const winModal = document.getElementById('win-modal');
    if (winModal) winModal.style.display = 'none';
    initAdditionGame();
}
window.initAdditionGame = initAdditionGame;
window.handleSelect = handleSelect;
window.closeModal = closeModal;



