// document.getElementById('owl').onclick = () => {
//     alert("Owl CLicked");
// }

// attachEvent()
// jQuery - on

// type , timestamp , defaultPrevented
// target , toElement , srcElement , currentTarget,
// clientX , clientY , screenX , screenY , tiltX , tiltY
// altKey , ctrlKey , shiftKey , keyCode

// false --- Event Bubbling
// true --- Event Capturing

// Event Bubbling  (By using False which is default parameter in event listener function) --- Event occuring from inside element to outside element is know as Event propagation
// --For Example -- if we are using click event listener in whole html lists under unordered lists and also using one more event listener
// on a specific list so the listener will first track the specific element listening then the lists listenings common for all

// Event Capturing (By using True parameter in event listener function ) --- Vice Versa of Event Bubbling from outer element to inside element

// document.getElementById('owl').addEventListener('click',() => {         //Without Passing Arguments in Function
//     alert('OWL CLICKED');
//     console.log("Owl Clicked");
// },false)                                               //False Parameeter is Default we can delete this as well


// document.getElementById('owl').addEventListener('click',(event) => {     //Passing Arguments in Function
//     console.log(event); 
// },true)   

// document.getElementById('images').addEventListener('click',(event) => {     //Passing Arguments in Function
//     console.log("Clicked Inside ul");   
//     event.stopPropagation();                                         //WILL STOP EVENT PROPAGATION
// },false)  

// document.getElementById('google').addEventListener('click',(event) => {     //Passing Arguments in Function
//     event.preventDefault();
//     console.log("Clicked on google");   
// })  

document.querySelector('#images').addEventListener('click',(event) => {     //Passing Arguments in Function
    console.log(event.target.parentNode);               //this will select event target parents (i.e. here in this example if we click on images we will get list in which image is stored )
    let removeIt = event.target.parentNode;
    if(event.target.tagName === 'IMG'){
        removeIt.remove();
    }
    
    //removeIt.parentNode.removeChild(removeIt)             //this method can also be used to remove clicked images
})  







