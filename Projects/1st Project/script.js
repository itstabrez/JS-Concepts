const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
const h1 = document.querySelectorAll("h1");
const h2 = document.querySelectorAll("h2");
console.log("Hello World" , h2);

buttons.forEach((colors) => {
    console.log(colors);
    colors.addEventListener('click' ,  (event) =>{
        console.log(event);
        console.log(event.target);
        switch(event.target.id){
            case "grey":
            body.style.backgroundColor = event.target.id;
            break;
            case "green":
            body.style.backgroundColor = event.target.id;
            // h1.style.color="white";
            // h2.innerText.style.color="white";
            break;
            case "blue":
            body.style.backgroundColor = event.target.id
            break;
            case "red":
            body.style.backgroundColor = event.target.id
            break;          
        }
    })
})