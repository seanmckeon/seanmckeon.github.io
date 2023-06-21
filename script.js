window.onload = function() {
    var year = new Date().getFullYear();
    document.getElementById("year").innerText = year;
};


// Array of quotes
let quotes = [
"The only way to do great work is to love what you do. - Steve Jobs",
"Believe you can and you're halfway there. - Theodore Roosevelt",
"Don't watch the clock; do what it does. Keep going. - Sam Levenson",
"You miss 100% of the shots you don’t take. - Wayne Gretzky",

];

// Function to display a new quote
function newQuote() {
    let quoteDisplay = document.getElementById('quoteDisplay');
    // Randomly select a quote
    let quote = quotes[Math.floor(Math.random() * quotes.length)];
    // Update the display
    quoteDisplay.style.opacity = '0';
    setTimeout(function() {
        quoteDisplay.textContent = quote;
        quoteDisplay.style.opacity = '1';
    }, 1000);
}

// Display a new quote every 4 seconds
setInterval(newQuote, 4000);
