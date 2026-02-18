/*************************************************
 * CORE DATA
 *************************************************/
const BS_YEAR_DATA = [ 
  [2000,30,32,31,32,31,30,30,30,29,30,29,31],
  [2001,31,31,32,31,31,31,30,29,30,29,30,30],
  [2002,31,31,32,32,31,30,30,29,30,29,30,30],
  [2003,31,32,31,32,31,30,30,30,29,29,30,31],
  [2004,30,32,31,32,31,30,30,30,29,30,29,31],
  [2005,31,31,32,31,31,31,30,29,30,29,30,30],
  [2006,31,31,32,32,31,30,30,29,30,29,30,30],
  [2007,31,32,31,32,31,30,30,30,29,29,30,31],
  [2008,31,31,31,32,31,31,29,30,30,29,29,31],
  [2009,31,31,32,31,31,31,30,29,30,29,30,30],
  [2010,31,31,32,32,31,30,30,29,30,29,30,30],
  [2011,31,32,31,32,31,30,30,30,29,29,30,31],
  [2012,31,31,31,32,31,31,29,30,30,29,30,30],
  [2013,31,31,32,31,31,31,30,29,30,29,30,30],
  [2014,31,31,32,32,31,30,30,29,30,29,30,30],
  [2015,31,32,31,32,31,30,30,30,29,29,30,31],
  [2016,31,31,31,32,31,31,29,30,30,29,30,30],
  [2017,31,31,32,31,31,31,30,29,30,29,30,30],
  [2018,31,32,31,32,31,30,30,29,30,29,30,30],
  [2019,31,32,31,32,31,30,30,30,29,30,29,31],
  [2020,31,31,31,32,31,31,30,29,30,29,30,30],
  [2021,31,31,32,31,31,31,30,29,30,29,30,30],
  [2022,31,32,31,32,31,30,30,30,29,29,30,30],
  [2023,31,32,31,32,31,30,30,30,29,30,29,31],
  [2024,31,31,31,32,31,31,30,29,30,29,30,30],
  [2025,31,31,32,31,31,31,30,29,30,29,30,30],
  [2026,31,32,31,32,31,30,30,30,29,29,30,31],
  [2027,30,32,31,32,31,30,30,30,29,30,29,31],
  [2028,31,31,32,31,31,31,30,29,30,29,30,30],
  [2029,31,31,32,31,32,30,30,29,30,29,30,30],
  [2030,31,32,31,32,31,30,30,30,29,29,30,31],
  [2031,30,32,31,32,31,30,30,30,29,30,29,31],
  [2032,31,31,32,31,31,31,30,29,30,29,30,30],
  [2033,31,31,32,32,31,30,30,29,30,29,30,30],
  [2034,31,32,31,32,31,30,30,30,29,29,30,31],
  [2035,30,32,31,32,31,31,29,30,30,29,29,31],
  [2036,31,31,32,31,31,31,30,29,30,29,30,30],
  [2037,31,31,32,32,31,30,30,29,30,29,30,30],
  [2038,31,32,31,32,31,30,30,30,29,29,30,31],
  [2039,31,31,31,32,31,31,29,30,30,29,30,30],
  [2040,31,31,32,31,31,31,30,29,30,29,30,30],
  [2041,31,31,32,32,31,30,30,29,30,29,30,30],
  [2042,31,32,31,32,31,30,30,30,29,29,30,31],
  [2043,31,31,31,32,31,31,29,30,30,29,30,30],
  [2044,31,31,32,31,31,31,30,29,30,29,30,30],
  [2045,31,32,31,32,31,30,30,29,30,29,30,30],
  [2046,31,32,31,32,31,30,30,30,29,29,30,31],
  [2047,31,31,31,32,31,31,30,29,30,29,30,30],
  [2048,31,31,32,31,31,31,30,29,30,29,30,30],
  [2049,31,32,31,32,31,30,30,30,29,29,30,30],
  [2050,31,32,31,32,31,30,30,30,29,30,29,31],
  [2051,31,31,31,32,31,31,30,29,30,29,30,30],
  [2052,31,31,32,31,31,31,30,29,30,29,30,30],
  [2053,31,32,31,32,31,30,30,30,29,29,30,30],
  [2054,31,32,31,32,31,30,30,30,29,30,29,31],
  [2055,31,31,32,31,31,31,30,29,30,29,30,30],
  [2056,31,31,32,31,32,30,30,29,30,29,30,30],
  [2057,31,32,31,32,31,30,30,30,29,29,30,31],
  [2058,30,32,31,32,31,30,30,30,29,30,29,31],
  [2059,31,31,32,31,31,31,30,29,30,29,30,30],
  [2060,31,31,32,32,31,30,30,29,30,29,30,30],
  [2061,31,32,31,32,31,30,30,30,29,29,30,31],
  [2062,30,32,31,32,31,31,29,30,29,30,29,31],
  [2063,31,31,32,31,31,31,30,29,30,29,30,30],
  [2064,31,31,32,32,31,30,30,29,30,29,30,30],
  [2065,31,32,31,32,31,30,30,30,29,29,30,31],
  [2066,31,31,31,32,31,31,29,30,30,29,29,31],
  [2067,31,31,32,31,31,31,30,29,30,29,30,30],
  [2068,31,31,32,32,31,30,30,29,30,29,30,30],
  [2069,31,32,31,32,31,30,30,30,29,29,30,31],
  [2070,31,31,31,32,31,31,29,30,30,29,30,30],
  [2071,31,31,32,31,31,31,30,29,30,29,30,30],
  [2072,31,32,31,32,31,30,30,29,30,29,30,30],
  [2073,31,32,31,32,31,30,30,30,29,29,30,31],
  [2074,31,31,31,32,31,31,30,29,30,29,30,30],
  [2075,31,31,32,31,31,31,30,29,30,29,30,30],
  [2076,31,32,31,32,31,30,30,30,29,29,30,30],
  [2077,31,32,31,32,31,30,30,30,29,30,29,31],
  [2078,31,31,31,32,31,31,30,29,30,29,30,30],
  [2079,31,31,32,31,31,31,30,29,30,29,30,30],
  [2080,31,32,31,32,31,30,30,30,29,29,30,30],
  [2081,31,31,32,32,31,30,30,30,29,30,29,31],
  [2082,31,31,32,31,31,31,30,29,30,29,30,30],
  [2083,31,31,32,31,31,30,30,30,29,30,30,30],
  [2084,31,31,32,31,31,30,30,30,29,30,30,30],
  [2085,31,32,31,32,30,31,30,30,29,30,30,30],
  [2086,30,32,31,32,31,30,30,30,29,30,30,30],
  [2087,31,31,32,31,31,31,30,30,29,30,30,30],
  [2088,30,31,32,32,30,31,30,30,29,30,30,30],
  [2089,30,32,31,32,31,30,30,30,29,30,30,30],
  [2090,30,32,31,32,31,30,30,30,29,30,30,30],
  [2091,31,31,32,31,31,31,30,30,29,30,30,30]
];

const START_AD_DATE_2000 = new Date('1943-04-14T00:00:00');

/*************************************************
 * MAIN CALENDAR CLASS
 *************************************************/
class NepaliCalendar {
    constructor() {
        this.injectCalendarHTML();
        this.BS_YEAR_DATA = BS_YEAR_DATA;
        this.START_AD_DATE_2000 = START_AD_DATE_2000;
        
        this.calendarMaterial = new CalendarMaterial();
        
        this.currentBsYear = 2080;
        this.currentBsMonth = 0; // 0-indexed
        
        this.initializeElements();
        this.populateDropdowns();
        this.setToday();
        this.initializeEventListeners();
        this.renderCalendar();
        
        // Initialize converter date picker
        this.initializeBsDatePicker();
        this.initGlobalControls();
    }

    //Method to share calendar to another folders or pages.
    injectCalendar() {
        const calendarHTML = `
        <div id="globalCalendarModal" class="calendar-modal">
            <div class="calendar-container">
                <button id="closeCalendar" class="close-btn">&times;</button>
                </div>
        </div>`;
        document.body.insertAdjacentHTML('beforeend', calendarHTML);
        
        // Add Event Listener for the "Cut" (Close) button
        document.getElementById('closeCalendar').onclick = () => {
            document.getElementById('globalCalendarModal').style.display = 'none';
        };
    }
    injectCalendarHTML() {
        const calendarHTML = `
        <div id="calendarModal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); z-index:10000; justify-content:center; align-items:center;">
            <div style="background:white; padding:20px; border-radius:10px; position:relative; width:90%; max-width:500px; max-height:90vh; overflow-y:auto;">
                <button id="closeCalendarBtn" style="position:absolute; top:10px; right:10px; font-size:24px; cursor:pointer; background:none; border:none;">&times;</button>                
                <div id="container"></div>
            </div>
        </div>`;
        document.body.insertAdjacentHTML('beforeend', calendarHTML);
    }

    initGlobalControls() {
        const modal = document.getElementById('calendarModal');
        const closeBtn = document.getElementById('closeCalendarBtn');
        
        closeBtn.onclick = () => modal.style.display = 'none';
        
        // Function to open from outside
        window.openNepaliCalendar = () => {
            modal.style.display = 'flex';
        };
    }

    initializeElements() {
      this.calendarGrid = document.getElementById('calendarGrid');    
    // Safety Check
    if (!this.calendarGrid) {
        console.error("Required element #calendarGrid not found in DOM.");
        return; 
    }

    this.bsYearSelect = document.getElementById('bsYearSelect');
        // Calendar view elements
        this.bsYearSelect = document.getElementById('bsYearSelect');
        this.bsMonthSelect = document.getElementById('bsMonthSelect');
        this.calendarGrid = document.getElementById('calendarGrid');
        this.currentMonthYear = document.getElementById('currentMonthYear');
        this.adEquivalent = document.getElementById('adEquivalent');
        this.prevMonthBtn = document.getElementById('prevMonthBtn');
        this.nextMonthBtn = document.getElementById('nextMonthBtn');
        this.prevYearBtn = document.getElementById('prevYearBtn');
        this.nextYearBtn = document.getElementById('nextYearBtn');
        this.todayBtn = document.getElementById('todayBtn');
        this.eventPreview = document.getElementById('eventPreview');
        
        // Today display
        this.todayBsDate = document.getElementById('todayBsDate');
        this.todayAdDate = document.getElementById('todayAdDate');
        
        // Converter view elements
        this.adDateInput = document.getElementById('adDateInput');
        this.convertToBSBtn = document.getElementById('convertToBSBtn');
        this.bsDateDisplay = document.getElementById('bsDateDisplay');
        this.bsWeekday = document.getElementById('bsWeekday');
        this.bsTithi = document.getElementById('bsTithi');
        this.convertToADBtn = document.getElementById('convertToADBtn');
        this.adDateDisplay = document.getElementById('adDateDisplay');
        this.adWeekday = document.getElementById('adWeekday');
        this.adFormatted = document.getElementById('adFormatted');
        this.swapConversionBtn = document.getElementById('swapConversionBtn');
        this.clearConversionBtn = document.getElementById('clearConversionBtn');
        
        // Tab navigation
        this.calendarViewBtn = document.getElementById('calendarViewBtn');
        this.converterViewBtn = document.getElementById('converterViewBtn');
        this.calendarView = document.getElementById('calendarView');
        this.converterView = document.getElementById('converterView');
        
        // BS Date Picker elements
        this.bsDateInput = document.getElementById('bsDateInput');
        this.bsDatePickerModal = document.getElementById('bsDatePickerModal');
        this.pickerYearSelect = document.getElementById('pickerYearSelect');
        this.pickerMonthSelect = document.getElementById('pickerMonthSelect');
        this.pickerGrid = document.getElementById('bsPickerGrid');
        this.pickerPrevMonth = document.getElementById('pickerPrevMonth');
        this.pickerNextMonth = document.getElementById('pickerNextMonth');
        this.pickerToday = document.getElementById('pickerToday');
        this.pickerSelect = document.getElementById('pickerSelect');
        this.pickerCancel = document.getElementById('pickerCancel');
        this.pickerClose = document.getElementById('bsPickerClose');
        
        // Quick select buttons
        this.quickSelectBtns = document.querySelectorAll('.quick-btn');
        this.bsQuickSelectBtns = document.querySelectorAll('.bs-quick');
        
        // Calendar icon
        this.calendarIcon = document.querySelector('.calendar-icon');
    }

    populateDropdowns() {
        // Populate year dropdowns (2000-2091 BS)
        for (let year = 2000; year <= 2091; year++) {
            const option1 = new Option(year, year);
            const option2 = new Option(year, year);
            const option3 = new Option(year, year);
            this.bsYearSelect.appendChild(option1);
            this.pickerYearSelect.appendChild(option2);
            
            if (year === 2080) {
                option1.selected = true;
                option2.selected = true;
                option3.selected = true;
            }
        }

        // Populate month dropdowns
        this.calendarMaterial.BS_MONTHS.forEach((month, index) => {
            const option1 = new Option(month, index);
            const option2 = new Option(month, index);
            this.bsMonthSelect.appendChild(option1);
            this.pickerMonthSelect.appendChild(option2);
            
            if (index === this.currentBsMonth) {
                option1.selected = true;
                option2.selected = true;
            }
        });
    }

    setToday() {
        const today = new Date();
        const bsDate = this.adToBs(today);
        this.currentBsYear = bsDate.year;
        this.currentBsMonth = bsDate.month - 1;
        
        // Update dropdowns
        this.bsYearSelect.value = this.currentBsYear;
        this.bsMonthSelect.value = this.currentBsMonth;
        
        // Set converter date input to today
        const todayStr = today.toISOString().split('T')[0];
        this.adDateInput.value = todayStr;
        
        // Set BS date input to today (use numeric format: 2080-1-15)
        this.bsDateInput.value = `${bsDate.year}-${bsDate.month}-${bsDate.day}`;
        
        // Update today display
        this.updateTodayDisplay();
    }

    updateTodayDisplay() {
        const today = new Date();
        const bsDate = this.adToBs(today);
        const monthName = this.calendarMaterial.getMonthName(bsDate.month - 1);
        
        const bsDateStr = `${this.calendarMaterial.convertToNepaliDigits(bsDate.year)}-${monthName}-${this.calendarMaterial.convertToNepaliDigits(bsDate.day)}`;
        const adDateStr = today.toLocaleDateString('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
        
        this.todayBsDate.textContent = bsDateStr;
        this.todayAdDate.textContent = adDateStr;
    }

    initializeEventListeners() {
        // Calendar navigation
        this.bsYearSelect.addEventListener('change', () => {
            this.currentBsYear = parseInt(this.bsYearSelect.value);
            this.renderCalendar();
        });

        this.bsMonthSelect.addEventListener('change', () => {
            this.currentBsMonth = parseInt(this.bsMonthSelect.value);
            this.renderCalendar();
        });

        this.prevMonthBtn.addEventListener('click', () => this.navigateMonth(-1));
        this.nextMonthBtn.addEventListener('click', () => this.navigateMonth(1));
        this.prevYearBtn.addEventListener('click', () => this.navigateYear(-1));
        this.nextYearBtn.addEventListener('click', () => this.navigateYear(1));
        this.todayBtn.addEventListener('click', () => {
            this.setToday();
            this.renderCalendar();
        });

        // Date converter
        this.convertToBSBtn.addEventListener('click', () => this.convertADtoBS());
        this.convertToADBtn.addEventListener('click', () => this.convertBStoAD());
        this.swapConversionBtn.addEventListener('click', () => this.swapConversion());
        this.clearConversionBtn.addEventListener('click', () => this.clearConversion());

        // Quick select buttons for AD converter
        this.quickSelectBtns.forEach(btn => {
            if (!btn.classList.contains('bs-quick')) {
                btn.addEventListener('click', (e) => {
                    const days = parseInt(e.target.dataset.days);
                    const date = new Date();
                    date.setDate(date.getDate() + days);
                    this.adDateInput.value = date.toISOString().split('T')[0];
                    this.convertADtoBS();
                });
            }
        });

        // Tab switching
        this.calendarViewBtn.addEventListener('click', () => this.switchView('calendar'));
        this.converterViewBtn.addEventListener('click', () => this.switchView('converter'));
    }

    switchView(view) {
        if (view === 'calendar') {
            this.calendarView.classList.add('active');
            this.converterView.classList.remove('active');
            this.calendarViewBtn.classList.add('active');
            this.converterViewBtn.classList.remove('active');
        } else {
            this.calendarView.classList.remove('active');
            this.converterView.classList.add('active');
            this.calendarViewBtn.classList.remove('active');
            this.converterViewBtn.classList.add('active');
        }
    }

    navigateMonth(direction) {
        let newMonth = this.currentBsMonth + direction;
        let newYear = this.currentBsYear;

        if (newMonth < 0) {
            newMonth = 11;
            newYear--;
        } else if (newMonth > 11) {
            newMonth = 0;
            newYear++;
        }

        this.currentBsYear = newYear;
        this.currentBsMonth = newMonth;

        this.bsYearSelect.value = this.currentBsYear;
        this.bsMonthSelect.value = this.currentBsMonth;
        this.renderCalendar();
    }

    navigateYear(direction) {
        this.currentBsYear += direction;
        
        // Boundary check
        if (this.currentBsYear < 2000) this.currentBsYear = 2000;
        if (this.currentBsYear > 2091) this.currentBsYear = 2091;
        
        this.bsYearSelect.value = this.currentBsYear;
        this.renderCalendar();
    }

    renderCalendar() {
        // Clear the grid
        this.calendarGrid.innerHTML = '';
        
        const yearData = this.BS_YEAR_DATA.find(item => item[0] === this.currentBsYear);
        if (!yearData) return;

        const daysInMonth = yearData[this.currentBsMonth + 1];
        
        // Update header
        this.updateCalendarHeader(daysInMonth);
        
        // Get first day of month's weekday
        const firstDayDate = this.bsToAd(this.currentBsYear, this.currentBsMonth + 1, 1);
        let firstWeekday = firstDayDate.getDay();

        // Add empty cells for days before first day of month
        for (let i = 0; i < firstWeekday; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.className = 'day-cell empty';
            this.calendarGrid.appendChild(emptyCell);
        }

        // Create and append day cells
        for (let day = 1; day <= daysInMonth; day++) {
            const dayCell = this.createDayCell(day);
            this.calendarGrid.appendChild(dayCell);
        }
    }

    createDayCell(day) {
        const dayCell = document.createElement('div');
        dayCell.className = 'day-cell';
        
        const bsYear = this.currentBsYear;
        const bsMonth = this.currentBsMonth + 1;
        const adDate = this.bsToAd(bsYear, bsMonth, day);
        const weekday = adDate.getDay();
        
        // Check if today
        const today = new Date();
        const isToday = adDate.toDateString() === today.toDateString();
        
        // Check if Saturday
        const isSaturday = weekday === 6;
        
        // Get tithi data
        const tithiData = this.calendarMaterial.getTithi(bsYear, bsMonth, day);
        const festivalData = this.calendarMaterial.getFestival(bsMonth, day);
        const isHoliday = this.calendarMaterial.isHoliday(bsYear, bsMonth, day);
        
        // Add classes
        if (isToday) dayCell.classList.add('today');
        if (isSaturday) dayCell.classList.add('saturday');
        if (isHoliday) dayCell.classList.add('holiday');
        if (festivalData) dayCell.classList.add('has-festival');
        
        // Create day parts
        const dayParts = document.createElement('div');
        dayParts.className = 'day-parts';
        
        // 1. BS Day (in Nepali digits)
        const bsDaySpan = document.createElement('div');
        bsDaySpan.className = 'bs-day';
        bsDaySpan.textContent = this.calendarMaterial.convertToNepaliDigits(day);
        if (isSaturday || isHoliday) {
            bsDaySpan.style.color = '#e74c3c';
            bsDaySpan.style.fontWeight = 'bold';
        }
        
        // 2. AD Day
        const adDaySpan = document.createElement('div');
        adDaySpan.className = 'ad-day';
        adDaySpan.textContent = adDate.getDate();
        
        // 3. Tithi
        const tithiSpan = document.createElement('div');
        tithiSpan.className = 'tithi';
        tithiSpan.textContent = tithiData.name;
        tithiSpan.title = tithiData.name;
        
        // Color code tithi
        if (tithiData.isEkadashi) {
            tithiSpan.style.color = '#2ecc71';
            tithiSpan.style.fontWeight = 'bold';
        } else if (tithiData.name.includes('पूर्णिमा') || tithiData.name.includes('अमावस्या')) {
            tithiSpan.style.color = '#e67e22';
            tithiSpan.style.fontWeight = 'bold';
        }
        
        // 4. Event/Festival
        const eventSpan = document.createElement('div');
        eventSpan.className = 'event';
        eventSpan.textContent = festivalData ? festivalData.name : '';
        if (festivalData) {
            eventSpan.title = festivalData.name;
            eventSpan.style.color = '#9b59b6';
            eventSpan.style.fontWeight = 'bold';
        }
        
        // Append all parts
        dayParts.appendChild(bsDaySpan);
        dayParts.appendChild(adDaySpan);
        dayParts.appendChild(tithiSpan);
        dayParts.appendChild(eventSpan);
        dayCell.appendChild(dayParts);
        
        // Click event
        dayCell.addEventListener('click', () => {
            this.showDateDetails(bsYear, bsMonth, day, adDate, tithiData, festivalData, isHoliday);
        });
        
        return dayCell;
    }

    updateCalendarHeader(daysInMonth) {
        const monthNameNP = this.calendarMaterial.getMonthName(this.currentBsMonth);
        
        this.currentMonthYear.textContent = `${monthNameNP} ${this.currentBsYear}`;
        
        // Get AD date range for the month
        const firstDayAd = this.bsToAd(this.currentBsYear, this.currentBsMonth + 1, 1);
        const lastDayAd = this.bsToAd(this.currentBsYear, this.currentBsMonth + 1, daysInMonth);
        
        const firstMonth = firstDayAd.toLocaleString('default', { month: 'long' });
        const lastMonth = lastDayAd.toLocaleString('default', { month: 'long' });
        const firstYear = firstDayAd.getFullYear();
        const lastYear = lastDayAd.getFullYear();
        
        if (firstMonth === lastMonth && firstYear === lastYear) {
            this.adEquivalent.textContent = `${firstMonth} ${firstYear}`;
        } else if (firstYear === lastYear) {
            this.adEquivalent.textContent = `${firstMonth} - ${lastMonth} ${firstYear}`;
        } else {
            this.adEquivalent.textContent = `${firstMonth} ${firstYear} - ${lastMonth} ${lastYear}`;
        }
    }

    showDateDetails(bsYear, bsMonth, bsDay, adDate, tithiData, festivalData, isHoliday) {
        const monthName = this.calendarMaterial.getMonthName(bsMonth - 1);
        const adFormatted = adDate.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        const weekdayNames = ["आइतबार", "सोमबार", "मंगलबार", "बुधबार", "बिहिबार", "शुक्रबार", "शनिबार"];
        const weekday = weekdayNames[adDate.getDay()];
        
        // Update event preview
        this.eventPreview.innerHTML = `
            <div class="preview-content">
                <div class="preview-header">
                    <span class="preview-date-np">
                        ${this.calendarMaterial.convertToNepaliDigits(bsDay)} ${monthName} ${this.calendarMaterial.convertToNepaliDigits(bsYear)}
                    </span>
                    <span class="preview-date-en">${adFormatted}</span>
                </div>
                <div class="preview-details">
                    <div class="detail-item">
                        <span class="detail-label">Weekday:</span>
                        <span class="detail-value">${weekday}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Tithi:</span>
                        <span class="detail-value tithi">${tithiData.name}</span>
                    </div>
                    ${festivalData ? `
                    <div class="detail-item">
                        <span class="detail-label">${festivalData.type === 'festival' ? 'Festival' : 'Holiday'}:</span>
                        <span class="detail-value festival">${festivalData.name}</span>
                    </div>` : ''}
                    ${isHoliday ? `
                    <div class="detail-item">
                        <span class="detail-label">Status:</span>
                        <span class="detail-value holiday">${adDate.getDay() === 6 ? 'Saturday Holiday' : 'Public Holiday'}</span>
                    </div>` : ''}
                </div>
            </div>
        `;
    }

    // Conversion Methods
    adToBs(adDate) {
        const startDate = new Date(this.START_AD_DATE_2000);
        let daysDiff = Math.floor((adDate - startDate) / (1000 * 60 * 60 * 24));
        
        let bsYear = 2000;
        let bsMonth = 0;
        let bsDay = 0;

        for (let yearData of this.BS_YEAR_DATA) {
            const year = yearData[0];
            const totalDays = yearData.slice(1).reduce((a, b) => a + b, 0);
            
            if (daysDiff >= totalDays) {
                daysDiff -= totalDays;
                bsYear++;
            } else {
                for (let i = 1; i <= 12; i++) {
                    const monthDays = yearData[i];
                    if (daysDiff >= monthDays) {
                        daysDiff -= monthDays;
                        bsMonth++;
                    } else {
                        bsDay = daysDiff + 1;
                        break;
                    }
                }
                break;
            }
        }

        return {
            year: bsYear,
            month: bsMonth + 1,
            day: bsDay
        };
    }

    bsToAd(bsYear, bsMonth, bsDay) {
        const yearData = this.BS_YEAR_DATA.find(item => item[0] === bsYear);
        if (!yearData) return null;

        let totalDays = 0;
        
        for (let y of this.BS_YEAR_DATA) {
            if (y[0] < bsYear) {
                totalDays += y.slice(1).reduce((a, b) => a + b, 0);
            } else {
                break;
            }
        }

        for (let m = 1; m < bsMonth; m++) {
            totalDays += yearData[m];
        }

        totalDays += (bsDay - 1);

        const adDate = new Date(this.START_AD_DATE_2000);
        adDate.setDate(adDate.getDate() + totalDays);
        
        return adDate;
    }

    convertADtoBS() {
        const adDateStr = this.adDateInput.value;
        if (!adDateStr) return;

        const adDate = new Date(adDateStr);
        const bsDate = this.adToBs(adDate);
        
        const monthName = this.calendarMaterial.getMonthName(bsDate.month - 1);
        const tithiData = this.calendarMaterial.getTithi(bsDate.year, bsDate.month, bsDate.day);
        const weekdayNames = ["आइतबार", "सोमबार", "मंगलबार", "बुधबार", "बिहिबार", "शुक्रबार", "शनिबार"];
        const weekday = weekdayNames[adDate.getDay()];
        
        this.bsDateDisplay.textContent = `${bsDate.year}-${monthName}-${bsDate.day}`;
        this.bsWeekday.textContent = weekday;
        this.bsTithi.textContent = tithiData.name;
    }

    convertBStoAD() {
        // Parse the BS date from input (format: 2080-1-15)
        const bsDateStr = this.bsDateInput.value;
        if (!bsDateStr) return;
        
        try {
            const parts = bsDateStr.split('-');
            if (parts.length !== 3) {
                alert('Please enter date in format: 2080-1-15');
                return;
            }
            
            const bsYear = parseInt(parts[0]);
            const bsMonth = parseInt(parts[1]); // Already 1-indexed
            const bsDay = parseInt(parts[2]);
            
            if (isNaN(bsYear) || isNaN(bsMonth) || isNaN(bsDay)) {
                alert('Please enter valid numbers for year, month, and day');
                return;
            }

            const adDate = this.bsToAd(bsYear, bsMonth, bsDay);
            if (!adDate) return;

            const formattedDate = adDate.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            
            const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const weekday = weekdayNames[adDate.getDay()];
            
            this.adDateDisplay.textContent = `${adDate.getFullYear()}-${String(adDate.getMonth() + 1).padStart(2, '0')}-${String(adDate.getDate()).padStart(2, '0')}`;
            this.adWeekday.textContent = weekday;
            this.adFormatted.textContent = formattedDate;
            
        } catch (error) {
            alert('Error converting date: ' + error.message);
        }
    }

    swapConversion() {
        const bsResult = this.bsDateDisplay.textContent;
        const adResult = this.adDateDisplay.textContent;

        if (bsResult !== '--' && bsResult !== 'Invalid Date') {
            this.adDateDisplay.textContent = bsResult;
        }
        
        if (adResult !== '--' && adResult !== 'Invalid Date') {
            this.bsDateDisplay.textContent = adResult;
        }
    }

    clearConversion() {
        this.bsDateDisplay.textContent = '--';
        this.bsWeekday.textContent = '';
        this.bsTithi.textContent = '';
        this.adDateDisplay.textContent = '--';
        this.adWeekday.textContent = '';
        this.adFormatted.textContent = '';
        this.adDateInput.value = '';
        this.bsDateInput.value = '';
        this.setToday(); // Reset to today's date
    }

    // BS Date Picker Methods
    initializeBsDatePicker() {
        // Make input field editable
        this.bsDateInput.readOnly = false;
        
        // Add event listener for manual editing (only convert on Enter or blur)
        this.bsDateInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.convertBStoAD();
            }
        });
        
        this.bsDateInput.addEventListener('blur', () => {
            this.convertBStoAD();
        });

        // Open picker ONLY when clicking on calendar icon
        if (this.calendarIcon) {
            this.calendarIcon.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.openBsDatePicker();
            });
        }
        this.bsDateInput.addEventListener('keydown', (e) => {
            const cursor = this.bsDateInput.selectionStart;
            const val = this.bsDateInput.value;
            const firstDash = val.indexOf('-');
            const secondDash = val.lastIndexOf('-');

            if (e.key === 'ArrowRight') {
                if (cursor <= 4) { // In Year, jump to Month
                    e.preventDefault();
                    this.bsDateInput.setSelectionRange(firstDash + 1, secondDash);
                } else if (cursor > 4 && cursor <= secondDash) { // In Month, jump to Day
                    e.preventDefault();
                    this.bsDateInput.setSelectionRange(secondDash + 1, val.length);
                }
            }

            if (e.key === 'ArrowLeft') {
                if (cursor > secondDash) { // In Day, jump to Month
                    e.preventDefault();
                    this.bsDateInput.setSelectionRange(firstDash + 1, secondDash);
                } else if (cursor > 4 && cursor <= secondDash) { // In Month, jump to Year
                    e.preventDefault();
                    this.bsDateInput.setSelectionRange(0, 4);
                }
            }
        });
        this.bsDateInput.addEventListener('input', (e) => {
            let val = this.bsDateInput.value;
            const parts = val.split('-');
            
            // 1. Auto-jump from Year to Month
            if (parts[0].length === 4 && parts.length === 1) {
                this.bsDateInput.value = val + '-';
                // Give a tiny timeout so the value renders before selecting
                setTimeout(() => {
                    const firstDash = this.bsDateInput.value.indexOf('-');
                    this.bsDateInput.setSelectionRange(firstDash + 1, firstDash + 1);
                }, 0);
            } 
            
            // 2. Auto-jump from Month to Day
            // Logic: If month is 2 digits (like 12) or user types a dash
            if (parts.length === 2 && parts[1].length === 2) {
                if (!val.endsWith('-')) {
                    this.bsDateInput.value = val + '-';
                }
                setTimeout(() => {
                    const secondDash = this.bsDateInput.value.lastIndexOf('-');
                    this.bsDateInput.setSelectionRange(secondDash + 1, secondDash + 3);
                }, 0);
            }

            // Trigger conversion if date is complete
            if (parts.length === 3 && parts[2].length >= 1) {
                this.convertBStoAD();
            }
        });
        // Initialize picker with today's date selected
        const today = new Date();
        const bsDate = this.adToBs(today);
        this.pickerYearSelect.value = bsDate.year;
        this.pickerMonthSelect.value = bsDate.month - 1;
        this.selectedBsDay = bsDate.day;
        // Inside initializeBsDatePicker()
        this.bsDateInput.addEventListener('click', () => this.handleInputSelection());
        this.bsDateInput.addEventListener('input', (e) => this.handleInputLogic(e));
        // Render the picker with today selected
        this.renderBsPicker();

        // Picker navigation
        this.pickerPrevMonth.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.navigatePickerMonth(-1);
        });
        
        this.pickerNextMonth.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.navigatePickerMonth(1);
        });
        
        this.pickerToday.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.gotoPickerToday();
        });

        // Picker actions
        this.pickerSelect.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.selectPickerDate();
        });
        
        this.pickerCancel.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.closeBsDatePicker();
        });
        
        this.pickerClose.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.closeBsDatePicker();
        });

        // Quick select buttons for BS converter
        this.bsQuickSelectBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const type = e.target.dataset.type;
                this.handleBsQuickSelect(type);
            });
        });
        
        // Close picker when clicking outside
        this.bsDatePickerModal.addEventListener('click', (e) => {
            if (e.target === this.bsDatePickerModal) {
                this.closeBsDatePicker();
            }
        });
        
        // Prevent picker from closing when clicking inside the content area
        const pickerContent = this.bsDatePickerModal.querySelector('.bs-picker-content');
        if (pickerContent) {
            pickerContent.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }
    }   
    
    handleInputSelection() {
        const input = this.bsDateInput;
        const val = input.value;
        const cursor = input.selectionStart;
        const firstDash = val.indexOf('-');
        const secondDash = val.lastIndexOf('-');

        if (cursor <= firstDash || firstDash === -1) {
            input.setSelectionRange(0, 4); // Select Year
        } else if (cursor > firstDash && cursor <= secondDash) {
            input.setSelectionRange(firstDash + 1, secondDash); // Select Month
        } else {
            input.setSelectionRange(secondDash + 1, val.length); // Select Day
        }
    }
    handleInputLogic(e) {
        let val = this.bsDateInput.value.replace(/[^0-9-]/g, ''); // Remove non-numeric
        const parts = val.split('-');

        // Auto-hyphen and jump for Year
        if (parts[0].length === 4 && !val.includes('-')) {
            val = parts[0] + '-';
        }
        
        // Auto-hyphen and jump for Month
        if (parts.length === 2 && parts[1].length === 2) {
            if (!val.endsWith('-')) {
                val = val + '-';
            }
        }

        this.bsDateInput.value = val;

        // If the date is complete (YYYY-MM-DD), run conversion
        if (parts.length === 3 && parts[2].length >= 1) {
            this.convertBStoAD();
        }
    }
    openBsDatePicker() {
        // Parse the current date from the input field
        const currentValue = this.bsDateInput.value;
        
        if (currentValue) {
            try {
                // Parse numeric format: "2080-1-15"
                const parts = currentValue.split('-');
                
                if (parts.length === 3) {
                    const year = parseInt(parts[0]);
                    const month = parseInt(parts[1]); // 1-12 (1-indexed)
                    const day = parseInt(parts[2]);
                    
                    if (!isNaN(year) && !isNaN(month) && !isNaN(day)) {
                        this.pickerYearSelect.value = year;
                        this.pickerMonthSelect.value = month - 1; // Convert to 0-indexed
                        this.selectedBsDay = day;
                    }
                }
            } catch (e) {
                console.warn('Could not parse BS date from input:', e);
                // Fallback to today
                this.gotoPickerToday();
            }
        } else {
            // If input is empty, use today
            this.gotoPickerToday();
        }
        
        // Show the picker modal
        this.bsDatePickerModal.classList.add('active');
        this.renderBsPicker();
    }

    closeBsDatePicker() {
        this.bsDatePickerModal.classList.remove('active');
    }

    renderBsPicker() {
        const bsYear = parseInt(this.pickerYearSelect.value);
        const bsMonth = parseInt(this.pickerMonthSelect.value) + 1;
        
        const yearData = this.BS_YEAR_DATA.find(item => item[0] === bsYear);
        if (!yearData) return;

        const daysInMonth = yearData[bsMonth];
        const firstDayDate = this.bsToAd(bsYear, bsMonth, 1);
        let firstWeekday = firstDayDate.getDay();

        // Clear the grid
        this.pickerGrid.innerHTML = '';

        // Add empty cells for days before first day of month
        for (let i = 0; i < firstWeekday; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.className = 'bs-picker-day disabled';
            this.pickerGrid.appendChild(emptyCell);
        }

        // Get today's date
        const today = new Date();
        const todayBs = this.adToBs(today);
        const isCurrentMonth = (bsYear === todayBs.year && bsMonth === todayBs.month);

        // Create day cells
        for (let day = 1; day <= daysInMonth; day++) {
            const dayCell = document.createElement('div');
            dayCell.className = 'bs-picker-day';
            dayCell.textContent = day;
            dayCell.dataset.day = day;

            // Check if today's date
            if (isCurrentMonth && day === todayBs.day) {
                dayCell.classList.add('today');
            }

            // Check if selected
            if (day === this.selectedBsDay) {
                dayCell.classList.add('selected');
            }

            // Add click event listener
            dayCell.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.selectBsPickerDay(day);
            });

            this.pickerGrid.appendChild(dayCell);
        }
    }

    selectBsPickerDay(day) {
        // Remove previous selection highlight
        const previousSelected = this.pickerGrid.querySelectorAll('.selected');
        previousSelected.forEach(el => el.classList.remove('selected'));
        
        // Add new selection highlight
        const dayCell = this.pickerGrid.querySelector(`[data-day="${day}"]`);
        if (dayCell) {
            dayCell.classList.add('selected');
            this.selectedBsDay = day;
        }

        // TRIGGER THE SELECTION IMMEDIATELY
        this.selectPickerDate(); 
    }

    navigatePickerMonth(direction) {
        let month = parseInt(this.pickerMonthSelect.value) + direction;
        let year = parseInt(this.pickerYearSelect.value);

        if (month < 0) {
            month = 11;
            year--;
        } else if (month > 11) {
            month = 0;
            year++;
        }

        // Boundary check
        if (year < 2000) year = 2000;
        if (year > 2091) year = 2091;

        this.pickerYearSelect.value = year;
        this.pickerMonthSelect.value = month;
        this.selectedBsDay = null; // Clear selection when changing month
        this.renderBsPicker();
    }

    gotoPickerToday() {
        const today = new Date();
        const bsDate = this.adToBs(today);
        this.pickerYearSelect.value = bsDate.year;
        this.pickerMonthSelect.value = bsDate.month - 1;
        this.selectedBsDay = bsDate.day;
        this.renderBsPicker();
    }

    selectPickerDate() {
        if (!this.selectedBsDay) {
            // If no date selected, use today
            const today = new Date();
            const bsDate = this.adToBs(today);
            this.selectedBsDay = bsDate.day;
        }

        const bsYear = parseInt(this.pickerYearSelect.value);
        const bsMonth = parseInt(this.pickerMonthSelect.value) + 1; // Convert back to 1-indexed
        const bsDay = this.selectedBsDay;

        // Set BS date input in numeric format: 2080-1-15
        this.bsDateInput.value = `${bsYear}-${bsMonth}-${bsDay}`;
        
        // Close the picker
        this.closeBsDatePicker();
        
        // Perform conversion to AD
        this.convertBStoAD();
        
        // Also update the picker dropdowns to show selected date
        this.pickerYearSelect.value = bsYear;
        this.pickerMonthSelect.value = bsMonth - 1;
    }

    handleBsQuickSelect(type) {
        const today = new Date();
        let bsDate;

        switch (type) {
            case 'today':
                bsDate = this.adToBs(today);
                break;
            case 'yesterday':
                const yesterday = new Date(today);
                yesterday.setDate(yesterday.getDate() - 1);
                bsDate = this.adToBs(yesterday);
                break;
            case 'tomorrow':
                const tomorrow = new Date(today);
                tomorrow.setDate(tomorrow.getDate() + 1);
                bsDate = this.adToBs(tomorrow);
                break;
            case 'newyear':
                bsDate = { year: this.currentBsYear, month: 1, day: 1 };
                break;
            case 'dashain':
                // Dashain is on Ashwin 10 (month 6, day 10)
                bsDate = { year: this.currentBsYear, month: 6, day: 10 };
                break;
            default:
                return;
        }

        // Set BS date input in numeric format: 2080-1-15
        this.bsDateInput.value = `${bsDate.year}-${bsDate.month}-${bsDate.day}`;
        
        // Update picker to show the selected date
        this.pickerYearSelect.value = bsDate.year;
        this.pickerMonthSelect.value = bsDate.month - 1;
        this.selectedBsDay = bsDate.day;
        
        // Perform conversion
        this.convertBStoAD();
    }
}

// Initialize the calendar when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    try {
        window.nepaliCalendar = new NepaliCalendar();
        console.log('Nepali Calendar initialized successfully');
    } catch (error) {
        console.error('Failed to initialize calendar:', error);
        document.getElementById('calendarGrid').innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 50px;">
                <h3 style="color: #e74c3c;">Error Loading Calendar</h3>
                <p>${error.message}</p>
                <button onclick="location.reload()" style="
                    padding: 10px 20px;
                    background: #3498db;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    margin-top: 20px;
                ">Retry</button>
            </div>
        `;
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // Only start if the main container exists
    if(document.getElementById('CalendarRoot') || document.querySelector('.utils-container')) {
        window.nepaliCalendar = new NepaliCalendar();
    }
});


