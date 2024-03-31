//Breaking Control Flow Of JS Code USing Async Functions (Set Time Out)
// const changeMe = setTimeout(() => {                         //We Can Also Derive FUnction Outside the setTimeout ;
//     const heading = document.querySelector('h1');
//     heading.innerHTML = "Learning Web Development"
// },2000)

// document.querySelector("#stop").addEventListener('click', (event) => {
//     clearTimeout(changeMe);                 
//     console.log("Stopped");
// } )

// -----------------------------------------Async Functions (Set Time Interval)

// setInterval(() => {
    //     console.log("Tabrez", Date.now());
    // }, 1000);

const dateFormat = new Date;
dateFormat.toLocaleDateString;

let timerId;

const myDate = (str) => {
    console.log(str , dateFormat);
}


document.querySelector("#start").addEventListener("click" , (event) => {
    timerId = setInterval(myDate , 1000 , "Tabrez");
})

document.querySelector("#stop").addEventListener("click" , (event) => {
    clearInterval(timerId);
})







