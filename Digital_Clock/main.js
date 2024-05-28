"use strict";
function clock() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const hrs = document.getElementById("hours");
    const min = document.getElementById("minutes");
    const sec = document.getElementById("seconds");
    const period = document.getElementById("ampm");
    const day = document.getElementById("dd");
    const dateElement = document.getElementById("ddmmyy");
    if (!hrs || !min || !sec || !period || !day || !dateElement) {
        return;
    }
    const time = new Date();
    let hr = time.getHours();
    let mi = time.getMinutes();
    let se = time.getSeconds();
    const dy = time.getDay();
    const dt = time.getDate();
    const mt = time.getMonth();
    const yr = time.getFullYear();
    const ampm = hr >= 12 ? 'PM' : 'AM';
    hr = hr % 12;
    hr = hr ? hr : 12; // the hour '0' should be '12'
    hr = hr < 10 ? "0" + hr : hr;
    mi = mi < 10 ? "0" + mi : mi;
    se = se < 10 ? "0" + se : se;
    hrs.innerHTML = hr.toString();
    min.innerHTML = mi.toString();
    sec.innerHTML = se.toString();
    period.innerHTML = ampm;
    day.innerHTML = days[dy];
    dateElement.innerHTML = `${months[mt]} ${dt}, ${yr}`;
}
document.addEventListener("DOMContentLoaded", () => {
    clock();
    setInterval(clock, 1000);
});
