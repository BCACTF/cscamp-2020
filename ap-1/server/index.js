const Express = require("express");
const { json } = require("body-parser");

const app = new Express();
app.use(json());
app.set("json spaces", "  ")

const questions = [
    {
        title: "What color is this flag?",
        image: "https://www.theflagshop.co.uk/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/b/l/blue-flag-std_1.jpg",
        description: "Attribution: theflagshop.co.uk",
        response: {
            type: "multipleChoice",
            choices: ["Red", "Yellow", "Green", "Blue"],
            correct: "Blue"
        }
    },
    {
        title: "2 + 2 = 5",
        response: {
            type: "multipleChoice",
            choices: ["True", "False"],
            correct: "False"
        }
    },
    {
        title: "Time for some math!",
        image: "https://tapintoteenminds.com/wp-content/uploads/2017/05/Canada-150-Math-Challenge.043-Update-Prediction-After-20-Mr-Pearces.jpeg",
        description: "Attribution: tapintoteenminds.com. Sidenote: I don't think they understand teens.",
        response: {
            type: "multipleChoice",
            choices: ["-1", "20", "1337"],
            correct: "20"
        }
    },
    {
        title: "No more multiple choice! What country is this flag?",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/170px-Flag_of_Switzerland.svg.png",
        response: {
            type: "freeResponse",
            correct: "Switzerland"
        }
    },
    {
        title: "Only two more questions left until you get the flag! What is the answer to this question?",
        response: {
            type: "freeResponse",
            correct: "adopsgifuq09ituoiwudhfgopasfkhgcoizxjhbidsjfh0q9uw4y5roiasfjhvlkzxmvbnlzxkjcfhap9sidruq90weiryozxjchvlkzxcnbvzmxcvbalksdfhjasdfasdf"
        }
    },
    {
        title: "What are the last five characters of the flag?",
        response: {
            type: "freeResponse",
            correct: process.env.APH1_FLAG ? process.env.APH1_FLAG.slice(-5) : "None, this problem was misconfigured."
        }
    }
];

app.get("/totally/innocuous/api/questions", (req, res) => {
    res.json(questions);
});

app.post("/totally/innocuous/api/check", (req, res) => {
    if (!req.body || !Array.isArray(req.body.answers)) {
        return res.status(400).json({ok: false, error: "Bad request."});
    }

    if (req.body.answers.length !== questions.length) {
        return res.status(400).json({ok: false, error: `Answers array of length ${req.body.answers.length} does not match questions array of length ${questions.length}.`});
    }

    const correct = req.body.answers.map((answer, index) => answer === questions[index].response.correct);
    const score = correct.reduce((acc, val) => acc + (val ? 1 : 0), 0);
    if (score >= questions.length) {
        res.json({ok: true, score, correct, flag: process.env.APH1_FLAG ? {earned: true, configured: true, flag: process.env.APH1_FLAG} : {earned: true, configured: false}});
    } else {
        res.json({ok: true, score, correct, flag: {earned: false}});
    }
});

app.use(Express.static("static"));

app.listen(process.env.APH1_PORT || process.env.PORT || 1337);
