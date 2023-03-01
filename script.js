const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quotes");
const authorEl = document.getElementById("author")
// add api
const apiURL = "https://api.quotable.io/random";


//function jab hum fetch api mein await use krte toh hum function mein async add krte..
async function getQuote(){

//if you are ofline then you use try and catch method
try {
    //uploading effect
    btnEl.innerText = "Loading...";
    btnEl.disabled = true;
    quoteEl.innerText = "Updating...";
    authorEl.innerText = "updating...";


    const response = await fetch(apiURL); //api call
    const data = await response.json();  // convert into json file
    const quoteContent = data.content;
    const quoteAuthor = data.author;
    quoteEl.innerText = quoteContent;
    authorEl.innerText =  "~ " + quoteAuthor;

    //after uploading effect
    btnEl.innerText = "Get a quote";
    btnEl.disabled = false;
    // console.log(data);
    
} catch (error) {
    console.log(error);
    quoteEl.innerText = "An error happened, try again latter..."; // if you are ofline
    authorEl.innerText = "An error happened";

    btnEl.innerText = "Get a quote";
    btnEl.disabled = false;
}
}

getQuote(); // calling a function

btnEl.addEventListener("click", getQuote); 