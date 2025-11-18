const quotes = {
    romance: [
        "Love is composed of a single soul inhabiting two bodies. - Aristotle",
        "To love and be loved is to feel the sun from both sides. - David Viscott",
        "The best thing to hold onto in life is each other. - Audrey Hepburn",
        "I am yours, don’t give myself back to me. - Rumi",
    ],
    motivation: [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Don’t watch the clock; do what it does. Keep going. - Sam Levenson",
        "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
        "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    ],
    life: [
        "Life is what happens when you’re busy making other plans. - John Lennon",
        "In three words I can sum up everything I’ve learned about life: It goes on. - Robert Frost",
        "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. - Buddha",
        "Turn your wounds into wisdom. - Oprah Winfrey",
    ],
    happiness: [
        "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
        "The most important thing is to enjoy your life—to be happy—it’s all that matters. - Audrey Hepburn",
        "Happiness depends upon ourselves. - Aristotle",
        "The purpose of our lives is to be happy. - Dalai Lama",
    ],
};

function generateQuote(category) {
    const categoryQuotes = quotes[category];
    const randomIndex = Math.floor(Math.random() * categoryQuotes.length);
    document.getElementById('quote').textContent = categoryQuotes[randomIndex];
}
