const url = "https://api.github.com/users/itstabrez";
const xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.onreadystatechange = function()  {          //Don't Use Arrow Function
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText);
        console.log(typeof data);
        console.log(data);
        console.log(`Tabrez is having ${data.followers} followers on GitHub`);
        console.log(data.avatar_url);
    }
}
xhr.send();

