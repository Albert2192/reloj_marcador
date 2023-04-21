const url_base = 'https://beckomecanica.com/ws/'

const currentTime = () => {
    const el = document.querySelector("h1");
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = hh < 10 ? `0${hh}` : hh;
    mm = mm < 10 ? `0${mm}` : mm;
    ss = ss < 10 ? `0${ss}` : ss;

    let time = `<span>${hh}</span>:<span>${mm}</span>:<span>${ss}</span>`;
    el.innerHTML = time;
};

currentTime();
setInterval(currentTime, 1000);