// setting the date!
let dateText = document.querySelector('.date');
let quote = document.querySelector("#quote");
let author = document.querySelector("#author");

let date = new Date();
let dateString = date.getDate() + " | " + date.getMonth() + " | " + date.getFullYear();
dateText.textContent = dateString;

let topics = [
    'love',
    'meditation',
    'motivation',
    'encouragement',
    'happiness'
];

let randomIndex = Math.floor(Math.random()*topics.length);

// getting the api data
URL =  `https://quote-garden.herokuapp.com/api/v3/quotes?genre=${topics[randomIndex]}`;
fetchData();

let quoteBtn = document.querySelector('.quote-btn');
quoteBtn.addEventListener('click',e=>{
    e.preventDefault();
    fetchData();
})

function fetchData(){
    fetch(URL)
    .then(response=>response.json())
    .then(data=>{
        setRandomQuote(data.data);
    })
    .catch(error=>{
        console.log(error);
    })
}

function setRandomQuote(listOfQuotes){
    let listLength = listOfQuotes.length;
    let randomIndex = Math.floor(Math.random()*listLength);
    quote.textContent = listOfQuotes[randomIndex].quoteText;
    author.textContent = listOfQuotes[randomIndex].quoteAuthor;
}