'use strict'

// Element area

let hrEl = document.getElementById('hr');
let minEl = document.getElementById('min');
let secEl = document.getElementById('sec');
let sessionEl = document.getElementById('session');
let ddEl = document.getElementById('dd');
let mmEl = document.getElementById('mm');
let yyyyEl = document.getElementById('yyyy');

// function area

function showTime() {

    let timeData = new Date(Date()).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' })

    let checkHavePmAm = /[A-z]/.test(timeData)

    let session, date, time, hr, min, sec, dd, mm, yyyy
    
    if (checkHavePmAm) {
        [date, time, session] = timeData.split(',').join('').split(' ');

        [hr, min, sec] = time.split(':');
        [dd, mm, yyyy] = date.split('/');

    } else {
        [date, time] = timeData.split(',').join('').split(' ')
        [hr, min, sec] = time.split(':');
        [dd, mm, yyyy] = date.split('/');

        if (hr < 12) {
            session = 'am';
        } else {
            session = 'pm';
        }

        if (hr > 12) {
            hr = hr - 12;
        }
    }

    

    switch (Number(mm)) {
        case 1:
            mm = 'Jan'
            break;
        case 2:
            mm = 'Feb'
            break;
        case 3:
            mm = 'Mar'
            break;
        case 4:
            mm = 'Apr'
            break;
        case 5:
            mm = 'May'
        break;
        case 6:
            mm = 'Jun'
        break;
        case 7:
            mm = 'Jul'
        break;
        case 8:
            mm = 'Aug'
        break;
        case 9:
            mm = 'Sep'
        break;
        case 10:
            mm = 'Oct'
        break;
        case 11:
            mm = 'Nov'
        break;
        case 12:
            mm = 'Dec'
        break;
        
    }
    
    hrEl.innerText = hr;
    minEl.innerText = min;
    secEl.innerText = sec;
    sessionEl.innerText = session;
    ddEl.innerText = dd;
    mmEl.innerText = mm;
    yyyyEl.innerText = yyyy;


    setTimeout(function () {
        showTime()
    },1000)
}

// run area

showTime();