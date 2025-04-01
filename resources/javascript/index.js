var jokes = [
    {
        joke: "What happens if you spot errors running the TypeScript compiler?",
        answer: "You'd better go catch them."
    },
    {
        joke: "Why did the number and string break up?",
        answer: "They weren't each other's type."
    },
    {
        joke: "Why are const variables so serious?",
        answer: "They take themselves too literally."
    },
    {
        joke: "How does a lawyer declare TypeScript type?",
        answer: "I object."
    },
    {
        joke: "What makes a TypeScript project good?",
        answer: "It functions well."
    },
    {
        joke: "What's a pirate's favorite data structure?",
        answer: "Arrrrr-ays!"
    },
    {
        joke: "Why are interfaces good drivers?",
        answer: "They're great at merging."
    },
    {
        joke: "Why do object-oriented programming developers always wear suits?",
        answer: "Because they've got class."
    },
    {
        joke: "Why was the literal type being stubborn?",
        answer: "It had a narrow mind."
    },
    {
        joke: "Why do generics anger developers?",
        answer: "They're always typing arguments."
    },
    {
        joke: "What do TypeScript types say in the American South?",
        answer: "Why, I do declare!"
    },
    {
        joke: "What do IDEs in love say to each other?",
        answer: "You complete me!"
    },
    {
        joke: "What is a disciplinarian's favourite TypeScript compiler option?",
        answer: "Strict."
    },
    {
        joke: "What do you call the cost of supporting legacy JavaScript extensions in TypeScript?",
        answer: "Sin tax."
    },
    {
        joke: "When you're in the type system, what do you use?",
        answer: "A mapped type!"
    }
];
var jokeContainer = document.getElementById('joke-container');
var answerContainer = document.getElementById('answer-container');
var button = document.getElementById('joke-button');
var jokeP = document.createElement('p');
var answerP = document.createElement('p');
function handleJokeClick() {
    button === null || button === void 0 ? void 0 : button.removeEventListener("click", handleJokeClick);
    jokeP.textContent = '';
    answerP.textContent = '';
    var i = Math.floor(Math.random() * jokes.length);
    jokeP.textContent = jokes[i].joke;
    jokeContainer === null || jokeContainer === void 0 ? void 0 : jokeContainer.appendChild(jokeP);
    setTimeout(function () {
        answerP.textContent = jokes[i].answer;
        answerContainer === null || answerContainer === void 0 ? void 0 : answerContainer.appendChild(answerP);
    }, 5000);
    setTimeout(function () {
        button === null || button === void 0 ? void 0 : button.addEventListener("click", handleJokeClick);
    }, 8000);
}
button === null || button === void 0 ? void 0 : button.addEventListener("click", handleJokeClick);
