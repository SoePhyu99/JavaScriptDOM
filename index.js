// JavaScript Quote Generator
let button = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

let quotes = [
    {
        quote: "If you are going through hell, keep going.",
        person: "Winston Churchill"
    },
    {
        quote: "Start where you are. Use what you have. Do what you can.",
        person: "Arthur Ashe"
    },
    {
        quote: "Well done is better than well said.",
        person: "Benjamin Franklin"
    },
    {
        quote: "When something is important enough, you do it even if the odds are not in your favor.",
        person: "Elon Musk"
    },
    {
        quote: "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.",
        person: "Norman Vincent Peale"
    },
]

button.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})

