const monthYearElement = document.getElementById("monthYear");
const datesElement = document.getElementById("dates");
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const updateCalendar = (currentDate) => {
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentMonthFirstDay = new Date(currentYear, currentMonth, 1);
    const currentMonthLastDay = new Date(currentYear, currentMonth + 1, 0);
    const previousMonthLastDay = new Date(currentYear, currentMonth, 0);

    return {
        currentYear,
        currentMonth,
        currentMonthFirstDayIndex: (currentMonthFirstDay.getDay() + 6) % 7,
        currentMonthTotalDays: currentMonthLastDay.getDate(),
        totalDaysInPreviousMonth: previousMonthLastDay.getDate()
    };
};

const buildUI = (offset) => {
    const today = new Date();
    const displayedDate = new Date(today.getFullYear(), today.getMonth() + offset, 1);
    const UIData = updateCalendar(displayedDate);

    monthYearElement.textContent = `${months[UIData.currentMonth]} ${UIData.currentYear}`;
    datesElement.innerHTML = "";
    const totalBlocks = 6 * 7;

    for (let i = 0; i < totalBlocks; i++) {
        const dayUIElement = document.createElement("div");

        if (i < UIData.currentMonthFirstDayIndex) {
            dayUIElement.textContent = UIData.totalDaysInPreviousMonth - UIData.currentMonthFirstDayIndex + i + 1;
            dayUIElement.classList.add("muted");
        } else if (i < UIData.currentMonthTotalDays + UIData.currentMonthFirstDayIndex) {
            const day = i - UIData.currentMonthFirstDayIndex + 1;
            dayUIElement.textContent = day;

            if (day === today.getDate() && UIData.currentMonth === today.getMonth() && UIData.currentYear === today.getFullYear()) {
                dayUIElement.classList.add("todaysdate");
            }
        } else {
            dayUIElement.textContent = i - UIData.currentMonthTotalDays - UIData.currentMonthFirstDayIndex + 1;
            dayUIElement.classList.add("muted");
        }

        datesElement.classList.add("days");
        datesElement.append(dayUIElement);
    }
};

let initialOffset = 0;

buildUI(initialOffset);

const prevMonth = () => {
    initialOffset--;
    buildUI(initialOffset);
};

const nextMonth = () => {
    initialOffset++;
    buildUI(initialOffset);
};

const originalMonth = () => {
    initialOffset = 0;
    buildUI(initialOffset);
};
