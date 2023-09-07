// Function to get the current day of the week
function getCurrentDayOfWeek() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    return dayOfWeek;
}

// Function to get the current UTC time
function getCurrentUTCTime() {
    const currentDate = new Date();
    const utcTime = currentDate.toUTCString();
    return utcTime;
}

// Update the HTML elements with real-time data
document.getElementById('dayOfWeek').textContent = getCurrentDayOfWeek();
document.getElementById('utcTime').textContent = getCurrentUTCTime();
