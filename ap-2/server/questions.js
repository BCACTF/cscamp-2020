module.exports = [
    {
        title: "Um",
        description: "Yes or no?",
        response: {
            type: "multipleChoice",
            choices: ["Yes", "No", "Yesn't"],
            correct: "Yesn't"
        }
    },
    {
        title: "Next one! Multiple choice! Um...",
        description: "We need to do something harder than 2 + 2 = 5.",
        response: {
            type: "multipleChoice",
            choices: ["Um, are we going to just stick with the um theme for all of these?", "Okay", "Thank you very cool."],
            correct: "Okay"
        }
    },
    {
        title: "NO it was thank you thank you very cool.",
        description: "There were two thank yous in there, okay?",
        response: {
            type: "freeResponse",
            correct: "something. You wanted it. *coughs* *coughs some more*"
        }
    },
    {
        title: "Alright, no more quotes from Edward! How many flags are in this picture?",
        description: "Credit: https://redd.it/hzqbk3/",
        image: "https://i.redd.it/f05u6kt9vod51.png",
        response: {
            type: "multipleChoice",
            choices: ["A positive integer", "A nonpositive integer", "An imaginary number", "A fake number"],
            correct: "A positive integer"
        }
    },
    {
        title: "Only two more questions left until you get the flag! What question is Anthony going to put here?",
        response: {
            type: "freeResponse",
            correct: "What question is Anthony going to put here?"
        }
    },
    {
        title: "What are the last five characters of the flag?",
        response: {
            type: "freeResponse",
            correct: process.env.APH2_FLAG ? process.env.APH2_FLAG.slice(-5) : "None, this problem was misconfigured."
        }
    }
];