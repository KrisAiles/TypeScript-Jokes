interface JokeObj {
    readonly joke: string;
    readonly answer: string;
}

// object containing the jokes
const jokes: JokeObj[] =[
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

const jokeContainer = document.getElementById('joke-container');
const answerContainer = document.getElementById('answer-container');
const button = document.getElementById('joke-button');

const jokeP = document.createElement('p');
const answerP = document.createElement('p');


// function to pick a random joke from the joke object, display the joke then after a delay display the answer and make the button inactive until the answer displays
function handleJokeClick() {
    button?.removeEventListener("click", handleJokeClick);
    jokeP.textContent = '';
    answerP.textContent = '';
    let i = Math.floor(Math.random() * jokes.length);
    jokeP.textContent = jokes[i].joke;
    jokeContainer?.appendChild(jokeP);
    setTimeout(() => {
        answerP.textContent = jokes[i].answer;
        answerContainer?.appendChild(answerP);
    }, 3000);
    setTimeout(() => {
        button?.addEventListener("click", handleJokeClick);
    }, 5000);
}

// add a click event listener to the tell me a joke button
button?.addEventListener("click", handleJokeClick);