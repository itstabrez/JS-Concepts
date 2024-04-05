class React{
    constructor(){
        this.library = "React";
        this.server = "https://localHost:300";

        // Requirement

        document.querySelector("button")
        .addEventListener('click', this.handleClick.bind(this))
    }
        handleClick(){
            console.log(`Button Clicked`);
            console.log(this.server);
        }
}

const app = new React;