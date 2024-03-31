//  UNLIMMITED COLOURS

// ------------------------>GENERATING RANDOM COLORS

const randomColor = () => {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0 ; i < 6 ; i++) {
      color += hex[Math.floor(Math.random() * 16)];             //ALWAYS CHOOSE MATH.FLOOR TO ROUND OFF
    }
    return color;
  };

const start = document.querySelector("#start")
const stop = document.querySelector("#stop")

let changeBgColor;

const startChangingColor = () => {
    if(!changeBgColor){
        changeBgColor = setInterval(() => {
            document.body.style.backgroundColor=randomColor();
        },1000)
    }
} 
const stopChangingColor = () => {
    clearInterval(changeBgColor);
    changeBgColor = null;
}

start.addEventListener('click' , startChangingColor)

stop.addEventListener("click" , stopChangingColor)