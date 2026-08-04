const quizData = [
{
question:" What does HTML stand for?",
options:["Hyper Text Markup Language","High Text Machine Language","Hyperlinks and Text Markup Language","Home Tool Markup Language"],
answer:"Hyper Text Markup Language"
},
{
question:" Which tag creates a hyperlink?",
options:["<link>","<a>","<href>","<url>"],
answer:"<a>"
},
{
question:" Which language is used for styling web pages?",
options:["Python","HTML","CSS","Java"],
answer:"CSS"
},
{
question:" Which language adds interactivity to web pages?",
options:["Java","JavaScript","C++","PHP"],
answer:"JavaScript"
},
{
question:" Which HTML tag is used for the largest heading?",
options:["<h6>","<heading>","<h1>","<head>"],
answer:"<h1>"
},
{
question:" Which CSS property changes text color?",
options:["font-color","text-color","color","background"],
answer:"color"
},
{
question:" Which HTML tag inserts an image?",
options:["<image>","<img>","<pic>","<src>"],
answer:"<img>"
},
{
question:" Which symbol is used for ID selector in CSS?",
options:[".","#","*","@"],
answer:"#"
},
{
question:" Which symbol is used for Class selector?",
options:["#",".","*","&"],
answer:"."
},
{
question:" Which HTML element is used for line break?",
options:["<break>","<br>","<lb>","<hr>"],
answer:"<br>"
},
{
question:" Which company developed JavaScript?",
options:["Google","Microsoft","Netscape","Apple"],
answer:"Netscape"
},
{
question:" Which HTML tag creates a table?",
options:["<tb>","<table>","<tr>","<td>"],
answer:"<table>"
},
{
question:" Which method displays a popup message in JavaScript?",
options:["console.log()","prompt()","alert()","confirm()"],
answer:"alert()"
},
{
question:" Which CSS property changes background color?",
options:["bgcolor","background-color","color","background-image"],
answer:"background-color"
},
{
question:" Which HTML tag is used for unordered list?",
options:["<ol>","<ul>","<li>","<list>"],
answer:"<ul>"
},
{
question:" Which JavaScript keyword declares a variable?",
options:["int","var","string","define"],
answer:"var"
},
{
question:" Which HTML tag contains page title?",
options:["<body>","<meta>","<title>","<head>"],
answer:"<title>"
},
{
question:" Which CSS property changes font size?",
options:["font-style","font-size","text-size","size"],
answer:"font-size"
},
{
question:" Which protocol is used for web pages?",
options:["FTP","SMTP","HTTP","POP"],
answer:"HTTP"
},
{
question:" Which HTML tag creates a paragraph?",
options:["<para>","<pg>","<p>","<text>"],
answer:"<p>"
}
];

// Shuffle and select 10 random questions
function shuffleQuestions(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

const selectedQuestions = shuffleQuestions(quizData).slice(0, 10);

let currentQuestion = 0;
let score = 0;

// Get HTML elements
const question = document.getElementById("question");
const options = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");

// Load question
function loadQuestion() {

    const q = selectedQuestions[currentQuestion];

    question.innerText = q.question;
    options.innerHTML = "";

    q.options.forEach(option => {

        const btn = document.createElement("button");
        btn.innerText = option;
        btn.classList.add("option");

        btn.onclick = function () {

            // Disable all buttons after one click
            const allButtons = document.querySelectorAll(".option");
            allButtons.forEach(button => button.disabled = true);

            if (option === q.answer) {
                score++;
                btn.style.backgroundColor = "green";
                btn.style.color = "white";
            } else {
                btn.style.backgroundColor = "red";
                btn.style.color = "white";

                // Highlight correct answer
                allButtons.forEach(button => {
                    if (button.innerText === q.answer) {
                        button.style.backgroundColor = "green";
                        button.style.color = "white";
                    }
                });
            }

            // Move to next question after 1 second
            setTimeout(() => {
                currentQuestion++;

                if (currentQuestion < selectedQuestions.length) {
                    loadQuestion();
                } else {
                    showResult();
                }
            }, 1000);
        };

        options.appendChild(btn);
    });
}

// Show result
function showResult() {
    document.getElementById("quiz").classList.add("hide");
    document.getElementById("result").classList.remove("hide");

    document.getElementById("score").innerHTML =
        `Your Score: <b>${score}</b> / ${selectedQuestions.length}`;
}

// Hide unused Next button
nextBtn.style.display = "none";

// Start quiz
loadQuestion();