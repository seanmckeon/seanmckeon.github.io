window.onload = function() {
    var year = new Date().getFullYear();
    document.getElementById("year").innerText = year;
};


// Array of quotes
let quotes = [
“Have you ever noticed that anybody driving slower than you is an idiot, and anyone going faster than you is a maniac? — George Carlin“,
“I have many leather-bound books and my apartment smells of rich mahogany - Ron Burgundy“,
“You miss 100% of the shots you don’t take. - Wayne Gretzky - Michael Scott“,

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
