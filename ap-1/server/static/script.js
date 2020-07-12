let state = 0;
let numQuestions = 0;
const timeLimit = 10 * 60 * 1000; // 10 minutes
let deadline;

function loadExam() {
    fetch("/totally/innocuous/api/questions").then(response => response.json()).then(result => {
        populateQuestions(result);

        state = 2;
        document.getElementById("intro").style.display = "none";
        document.getElementById("exam").style.display = "block";
    }).catch(e => {
        alert("An error occurred. Please contact CS Camp Staff.");
    });
}

function populateQuestions(questions) {
    numQuestions = questions.length;

    const container = document.getElementById("questions");

    questions.forEach((question, index) => {
        const element = document.createElement("div");
        element.classList.add("question");

        if (question.title) {
            const title = document.createElement("h3");
            title.innerText = `${index + 1}. ${question.title}`;
            element.appendChild(title);
        }

        if (question.image) {
            const image = document.createElement("img");
            image.setAttribute("src", question.image);
            element.appendChild(image);
        }

        if (question.description) {
            const description = document.createElement("p");
            description.innerText = question.description;
            element.appendChild(description);
        }

        const response = document.createElement("div");
        response.classList.add("response");

        if (question.response.type === "multipleChoice") {            
            question.response.choices.forEach((choice, choiceIndex) => {
                const div = document.createElement("div");
                div.classList.add("form-check");

                const radio = document.createElement("input");
                radio.type = "radio";
                radio.value = choice;
                radio.name = `question-${index}`;
                radio.id = `question-${index}-${choiceIndex}`;
                radio.classList.add("form-check-input");
                div.appendChild(radio);
                
                const label = document.createElement("label");
                label.setAttribute("for", radio.id);
                label.innerText = choice;
                label.classList.add("form-check-label");
                div.appendChild(label);

                response.appendChild(div);
            });
        } else {
            const input = document.createElement("input");
            input.name = `question-${index}`;
            input.classList.add("form-control")
            input.placeholder = "Type your answer";
            response.appendChild(input);
        }
        
        element.appendChild(response);

        container.appendChild(element);
    });

    deadline = new Date(Date.now() + timeLimit);
}

function submitExam() {
    const answers = [];
    for (let i = 0; i < numQuestions; i++) {
        const checked = Array.from(document.querySelectorAll(`input[name="question-${i}"]`)).find(r => r.checked);
        answers.push(checked ? checked.value : null);
    }

    console.log(answers);

    fetch("/totally/innocuous/api/check", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({answers: answers}, null, "    ")
    }).then(response => response.json()).then(data => {
        if (!data.ok) {
            throw new Error(data.error);
        }

        let message = "This is not enough to obtain the flag.";
        if (data.flag.earned) {
            if (data.flag.configured) {
                message = `Congratulations, your score was high enough to get a flag! ${data.flag.flag}`
            } else {
                message = `Congratulations, your score was high enough to get a flag! Unfortunately, this problem was misconfigured, so a flag cannot be given. Please contact CS Camp Staff.`
            }
        }
        finalResult(`You answered ${data.score} out of ${numQuestions} questions correctly. ${message}`, !!data.flag.flag)
    }).catch(e => {
        console.error(e);
        alert("An error occurred. Please contact CS Camp Staff.");
    })
}

function finalResult(text, isFlag) {
    document.getElementById("score-data").innerText = text;
    if (isFlag) {
        document.getElementById("score-data").classList.remove("bg-primary");
        document.getElementById("score-data").classList.add("bg-success");
    }
    document.getElementById("exam").style.display = "none";
    document.getElementById("completion").style.display = "block";
}

window.addEventListener("load", _ => {
    document.getElementById("start-button").addEventListener("click", e => {
        e.preventDefault();
        if (state === 0) {
            state = 1;
            e.target.classList.add("disabled");
            e.target.innerText = "Loading exam...";
            loadExam();
        }
    });

    document.getElementById("submit-button").addEventListener("click", e => {
        e.preventDefault();
        if (state === 2 && confirm("Ready to submit?")) {
            state = 3;
            e.target.classList.add("disabled");
            e.target.classList.remove("btn-warning");
            e.target.classList.add("btn-secondary");
            e.target.innerText = "Submitting...";
            submitExam();
        }
    });
});

setInterval(() => {
    if (deadline) {
        const now = new Date();
        if (now >= deadline && state !== 3) {
            state = 3;
            document.getElementById("timer").innerText = "0:00";

            const submit = document.getElementById("submit-button");
            submit.classList.add("disabled");
            submit.classList.remove("btn-warning");
            submit.classList.add("btn-secondary");
            submit.innerText = "Submitting...";
            submitExam();
        }
        if (now < deadline) {
            let secondsLeft = Math.floor((deadline.getTime() - now.getTime()) / 1000);
            let minutes = Math.floor(secondsLeft / 60);
            let seconds = secondsLeft % 60;
            let time = `${minutes}:${seconds}`;
            if (seconds < 10) {
                time = `${minutes}:0${seconds}`;
            }
            document.getElementById("timer").innerText = time;
        }
    }
}, 1000);
