const quotes = [
    "Believe in yourself and you can achieve anything.",
    "Success is the sum of small efforts repeated every day.",
    "Dream big, work hard, stay focused.",
    "Don't stop when you're tired. Stop when you're done.",
    "Great things take time.",
    "Your only limit is your mind.",
    "Every day is a new opportunity to grow.",
    "Failure is not the opposite of success; it is part of success.",
    "Discipline is the bridge between goals and accomplishment.",
    "Work hard in silence, let success make the noise.",
    "Believe you can and you're halfway there.",
    "Small progress is still progress.",
    "Stay positive, work hard, make it happen.",
    "The future depends on what you do today.",
    "Difficult roads often lead to beautiful destinations.",
    "Don't be afraid to start over. It's a new beginning.",
    "Success doesn't come overnight.",
    "Focus on your goals, not your obstacles.",
    "Learn from yesterday, live for today, prepare for tomorrow.",
    "Keep going. Your hard work will pay off."
];

const button = document.querySelector("button");
const quote = document.querySelector("h1");

button.addEventListener('click', ()=> {
    const index = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[index];
})