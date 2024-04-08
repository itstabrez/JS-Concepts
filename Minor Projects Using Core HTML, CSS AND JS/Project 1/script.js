const listItem = document.querySelector("#item");           // Selecting Input Form 
const toDoBox = document.querySelector("#to-do-box");       // Selecting unordered list 

listItem.addEventListener('keyup',function(event) {         //Adding event listener so that if user press enter the written text will move to list and deleted from input form
    if(event.key == "Enter"){
        addToDo(this.value);
        this.value = "";
    }
})

const addToDo = (data) => {                                 //Creating a function so that a new list is created and inside that list the written text get stored
    const toDoText = document.createElement("li");
    toDoText.innerHTML = `
        ${data}
        <i class="fa-solid fa-xmark"></i>
    `
    toDoText.addEventListener('click' , function(event){            //Again Creating a function so that by clicking on added list it will add and remove the text
        this.classList.toggle("done")
    })

    toDoText.querySelector('i').addEventListener('click' , function(event) {    //Now at last we will select icon and add event listener so if icon is clicked the added text gets removed
        toDoText.remove();
    })
    toDoBox.appendChild(toDoText);              //This is most important stage so that all above work will take place inside Unordered list
}


