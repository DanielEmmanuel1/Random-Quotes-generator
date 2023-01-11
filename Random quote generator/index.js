const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "The way to get started is to quit talking and begin doing.",
    "Your time is limited, don't waste it living someone else's life.",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    "If you want to live a happy life, tie it to a goal, not to people or things.",
    "The only way to do great work is to love what you do.",
    "If you can dream it, you can achieve it.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful."
]

const generateButton = document.getElementById("generate");
const quoteParagraph = document.getElementById("quote");


generateButton.addEventListener("click", function () {
    let randomNum = Math.floor(Math.random() * quotes.length);
    quoteParagraph.innerHTML = quotes[randomNum];
});