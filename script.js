let digital = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');
let date = document.querySelector('.date');

function updateClock() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let dia = now.getDate().toString().padStart(2, '0');
    let mes = (now.getMonth() + 1).toString().padStart(2, '0');
    let ano = now.getFullYear();
    let dataCompleta = dia + '/' + mes + '/' + ano;


    digital.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    let sDeg = ((360 / 60) * second) - 90;
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) - 90;

    sElement.style.transform = `rotate(${sDeg}deg)`
    mElement.style.transform = `rotate(${mDeg}deg)`
    mElement.style.transform = `rotate(${hDeg}deg)`

    date.innerHTML = `${dataCompleta}`


}

function fixZero(time) {
    if (time < 10) {
        return '0' + time;
    } else {
        return time;
    }
}

setInterval(updateClock, 1000);
updateClock();