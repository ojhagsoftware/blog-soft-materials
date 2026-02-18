// CalendarMaterial.js - Local Tithi and Festival Data
class CalendarMaterial {
    constructor() {
        this.TITHI_NAMES = [
            "प्रतिपदा", "द्वितीया", "तृतीया", "चतुर्थी", "पञ्चमी",
            "षष्ठी", "सप्तमी", "अष्टमी", "नवमी", "दशमी",
            "एकादशी", "द्वादशी", "त्रयोदशी", "चतुर्दशी", "पूर्णिमा",
            "प्रतिपदा", "द्वितीया", "तृतीया", "चतुर्थी", "पञ्चमी",
            "षष्ठी", "सप्तमी", "अष्टमी", "नवमी", "दशमी",
            "एकादशी", "द्वादशी", "त्रयोदशी", "चतुर्दशी", "अमावस्या"
        ];

        this.BS_MONTHS = [
            "बैशाख", "जेठ", "असार", "श्रावण", 
            "भाद्र", "आश्विन", "कार्तिक", "मंसिर", 
            "पुष", "माघ", "फाल्गुन", "चैत्र"
        ];

        // Festival and Event Data
        this.FESTIVAL_DATA = {
            '1-1': { name: "नेपाली नयाँ वर्ष", type: "festival" },
            '1-8': { name: "लोकतन्त्र दिवस", type: "holiday" },
            '1-15': { name: "मजदुर दिवस", type: "holiday" },
            '2-29': { name: "बुद्ध जयन्ती", type: "festival" },
            '3-15': { name: "गुरु पूर्णिमा", type: "festival" },
            '4-3': { name: "नाग पञ्चमी", type: "festival" },
            '4-15': { name: "जनै पूर्णिमा", type: "festival" },
            '4-30': { name: "गाई जात्रा", type: "festival" },
            '5-1': { name: "तेझी", type: "festival" },
            '5-5': { name: "ऋषि पञ्चमी", type: "festival" },
            '5-15': { name: "इन्द्र जात्रा", type: "festival" },
            '5-23': { name: "संक्रान्ति", type: "festival" },
            '6-1': { name: "घटस्थापना", type: "festival" },
            '6-7': { name: "फुलपाती", type: "festival" },
            '6-8': { name: "महा अष्टमी", type: "festival" },
            '6-9': { name: "महा नवमी", type: "festival" },
            '6-10': { name: "विजया दशमी", type: "festival" },
            '6-15': { name: "कोजाग्रत पूर्णिमा", type: "festival" },
            '7-1': { name: "काग तिहार", type: "festival" },
            '7-2': { name: "कुकुर तिहार", type: "festival" },
            '7-3': { name: "गाई तिहार", type: "festival" },
            '7-4': { name: "लक्ष्मी पूजा", type: "festival" },
            '7-5': { name: "गोवर्धन पूजा", type: "festival" },
            '7-6': { name: "भाई टीका", type: "festival" },
            '7-8': { name: "छठ पर्व", type: "festival" },
            '8-15': { name: "योमरी पूर्णिमा", type: "festival" },
            '9-15': { name: "माघी", type: "festival" },
            '9-29': { name: "सरस्वती पूजा", type: "festival" },
            '10-14': { name: "शिवरात्री", type: "festival" },
            '10-15': { name: "फागु पूर्णिमा", type: "festival" },
            '11-15': { name: "फागु पूर्णिमा", type: "festival" },
            '11-17': { name: "होली", type: "festival" },
            '12-9': { name: "राम नवमी", type: "festival" },
            '12-15': { name: "संविधान दिवस", type: "holiday" },
            '12-29': { name: "गणतन्त्र दिवस", type: "holiday" },
            '12-30': { name: "लोकतन्त्र दिवस", type: "holiday" }
        };

        this.PUBLIC_HOLIDAYS = [
            '1-1', '1-8', '1-15', '6-8', '6-9', '6-10',
            '7-4', '7-6', '10-14', '12-15', '12-29', '12-30'
        ];
    }

    getTithi(bsYear, bsMonth, bsDay) {
        // Simple calculation based on day of month
        const dayOfMonth = bsDay;
        const tithiNumber = ((dayOfMonth - 1) % 30) + 1;
        
        return {
            number: tithiNumber,
            name: this.TITHI_NAMES[tithiNumber - 1],
            isEkadashi: tithiNumber === 11 || tithiNumber === 26
        };
    }

    getFestival(bsMonth, bsDay) {
        const key = `${bsMonth}-${bsDay}`;
        return this.FESTIVAL_DATA[key] || null;
    }

    isHoliday(bsYear, bsMonth, bsDay) {
        const key = `${bsMonth}-${bsDay}`;
        
        // Check if Saturday
        const adDate = this.bsToAd(bsYear, bsMonth, bsDay);
        const isSaturday = adDate.getDay() === 6;
        
        // Check if public holiday
        const isPublicHoliday = this.PUBLIC_HOLIDAYS.includes(key);
        
        // Check if festival holiday
        const festival = this.getFestival(bsMonth, bsDay);
        const isFestivalHoliday = festival && festival.type === "festival" && 
                                  ['6-8', '6-9', '6-10', '7-4', '7-6', '10-14'].includes(key);
        
        return isSaturday || isPublicHoliday || isFestivalHoliday;
    }

    getMonthName(monthIndex) {
        return this.BS_MONTHS[monthIndex] || "";
    }

    bsToAd(bsYear, bsMonth, bsDay) {
        // Find year data
        const yearData = window.BS_YEAR_DATA?.find(item => item[0] === bsYear);
        if (!yearData) return new Date();

        let totalDays = 0;
        
        // Add days from previous years
        for (let y of window.BS_YEAR_DATA) {
            if (y[0] < bsYear) {
                totalDays += y.slice(1).reduce((a, b) => a + b, 0);
            } else {
                break;
            }
        }

        // Add days from previous months in current year
        for (let m = 1; m < bsMonth; m++) {
            totalDays += yearData[m];
        }

        // Add days in current month
        totalDays += (bsDay - 1);

        // Calculate AD date from start date
        const startDate = new Date('1943-04-14T00:00:00');
        const adDate = new Date(startDate);
        adDate.setDate(adDate.getDate() + totalDays);
        
        return adDate;
    }

    convertToNepaliDigits(number) {
        const nepaliDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
        return number.toString().split('').map(digit => {
            const num = parseInt(digit);
            return isNaN(num) ? digit : nepaliDigits[num];
        }).join('');
    }
}
