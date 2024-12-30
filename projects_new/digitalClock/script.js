const clockShowcase = document.querySelector("#clockShowcase");
setInterval(() => {
    let currentTime = new Date();
    return clockShowcase.innerHTML = currentTime.toLocaleTimeString();
}, 1000);
