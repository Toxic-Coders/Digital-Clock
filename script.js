const hours = document.querySelector('[data-hours]')
const minutes = document.querySelector('[data-minutes]')
const seconds = document.querySelector('[data-seconds]')


function setClock() {
    const currentTime = new Date();
    hours.textContent = currentTime.getHours() % 12 || 12 ;

    if (hours.textContent < 10) {
        hours.textContent = "0" + hours.textContent;
    }

    minutes.textContent = currentTime.getMinutes();
    if (minutes.textContent < 10) {
        minutes.textContent = "0" + minutes.textContent;
    }

    seconds.textContent = currentTime.getSeconds();
    if (seconds.textContent < 10) {
        seconds.textContent = "0" + seconds.textContent;
    }

}

setInterval(setClock,1000);

setClock();

