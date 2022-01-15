const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const nextMonthBtn = document.querySelector('.next')
const prevMonthBtn = document.querySelector('.previous')


const today = new Date();
let currentMonth = today.getMonth();

let currentYear = today.getFullYear();
const selectMonth = document.querySelector(".month");

function daysInMonth(iMonth, iYear) 
{ 
    return 32 - new Date(iYear, iMonth, 32).getDate();
}

function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentYear,currentMonth);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentYear,currentMonth);
}


function showCalendar(currentYear, currentMonth) {
    selectMonth.innerText = `${months[currentMonth]} - ${currentYear}`;
    createDays();

}

function createDays() {
    removeDays();
    let dayCounter = 0;
    let firstDay = (new Date(currentYear, currentMonth)).getDay();
    let totalDays = daysInMonth(currentMonth,currentYear);
    let totalDivs = parseInt(totalDays) +7;
    const days = document.querySelector('.days');
    for(i = 0; i < totalDivs; i++) {
        const newDiv = document.createElement('div');
        if (i >= firstDay && dayCounter < totalDays) {
            dayCounter++;
            newDiv.innerText = dayCounter;
            if(today.getDate() === dayCounter && currentYear === today.getFullYear() && currentMonth === today.getMonth()) {
                newDiv.classList.add('today');
            }
        }
        days.appendChild(newDiv);
    }

}

function removeDays() {
    const days = document.querySelector('.days').querySelectorAll('div');
    days.forEach(day => day.remove());
}

showCalendar(currentYear,currentMonth);

nextMonthBtn.addEventListener('click', () => {
    next();
})
prevMonthBtn.addEventListener('click', () => {
    previous();
})





