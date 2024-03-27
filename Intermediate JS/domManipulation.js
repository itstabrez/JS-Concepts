// console.dir(document)                //WILL GIVE INFORMATION ABOUT PROTOTYPES AND FUNCTION THAT CAN BE USED

//--------------------------DOCUMENT SELECTORS----------------------------

// document.getElementById(" ID ")          

// document.getElementByClassName(" Class Name ")

// document.getAttribute(" class ")

// Selected Class or ID.setAttribute(" class , "test heading" ")        //BOTH TEST AND HEADING WILL BE THE CLASS OF 

// titleOrClassName.style.backgroundColor = "Red"

//--------------------SOME DOM MANIPULATION FUNCTIONS-----------------

// titleOrClassName.innerHTML               //Support HTML Tags also

// titleOrClassName.innerText               //Can't Support Hidden text by CSS properties

// titleOrClassName.textContent             //Can Support Hidden text by CSS properties

//----------------------------QUERY SELECTORS---------------------------------

// document.querySelector("p")                 //Will Select First Paragraph or whatever argument is passed

// document.querySelector("#title")             //Will Select Id named title

// document.querySelector(".heading")             //Will Select class named heading

// document.querySelector('input [type = "password"]')             //Will Select input type CSS selectors

// document.querySelector(p:first-child)             //Will Select first paragraph

//--------------------------------QUERY SELECTOR ALL---------------------------------------

// document.querySelectorAll("h1")             //Will Select all headlines
// h1[0].style.color="red"                  //Will change color of all headlines to red


// const mySelector = document.querySelectorAll("h1")
// mySelector.forEach((value) => {
    // h1.style.color="Black";
// }) 

//----------------------------------------CONVERTING HTML COLLECTION TO ARRAY------------------------

//const myElement = document.getElementByClassName("list-item")       //Can't use for each loop in elements selected by Class Name
// ----------------------->>>>>>>>>TO USE FOR EACH LOOP WE WILL CONVERT THIS TO AN ARRAY>>>>>>>>>>>------------------------
// const convertedArray = Array.from(myElement) 

// convertedArray.forEach((list) => {
    //  list.style.color = "orange"             //NOW WE CAN USE FOR EACH LOOP AFTER CONVERSION
// })





