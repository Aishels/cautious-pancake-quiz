var quizStatus = true;
var questionNumber = 0;
var answerNumber = 0;
var score = 0;
var highscore = 50;
var finalAnswerCheck = 0;
var checkTime = 1;

var viewHighScoresBtnE1 = document.getElementById('view-high-scores');
var startQuizBtnEl = document.getElementById('start-quiz');
var answer1BtnE1 = document.getElementById('answer1');
var answer2BtnEl = document.getElementById('answer2');
var answer3BtnEl = document.getElementById('answer3');
var answer4BtnEl = document.getElementById('answer4');
var submitScoreE1 = document.getElementById('submitScore');
var questionsE1 = document.getElementById('questions');
var mainDivE1 = document.getElementById('MainDiv');
var htmlTimeLeft = document.getElementById('timeLeft');
var answerCorrectWrong = document.getElementById('answerCorrectWrong'); 
var questionDisplayEl = document.createElement("questionDisplay"); 
var finalScoreDisplayEl = document.createElement("finalScoreDisplay"); 
var enterInitialsEl = document.createElement("enterInitials"); 
var enterInitialsTextAreaEl = document.createElement("enterInitialsTextArea"); 
var button1234 = document.createElement("button"); 
var timeLeft = 100;

answer1BtnE1.style.display = 'none';
answer2BtnEl.style.display = 'none';
answer3BtnEl.style.display = 'none';
answer4BtnEl.style.display = 'none';
submitScoreE1.style.display = 'none';
answerCorrectWrong.style.display = 'none';
enterInitialsTextAreaEl.style.display = 'none';

// questions
var questionsObject = {
    correct: {
        0 : "2+2=?",
        1 : "4+0=?",
        2 : "4x3=?",
        3 : "0x0=?",
        4 : "Rapunzel is best princess because?"
    }
};

var answerObject = {
    answers: {
        0 : {
            0: "4",
            1: "5",
            2: "6",
            3: "7" },
        1 : {
            0: "4",
            1: "3",
            2: "2",
            3: "1" },
        2 : {
            0: "12",
            1: "13",
            2: "14",
            3: "15" },
        3 : {
            0: "0",
            1: "100",
            2: "120",
            3: "150" },
        4 : {
            0: "long hair",
            1: "pink dress",
            2: "or is purple dress",
            3: "marries to flynn rider" },
    }
};

htmlTimeLeft.textContent = timeLeft;

viewHighScoresBtnE1.addEventListener("click", function() {
    
    var quizUsers = "";
    var substringTest = "";
    var highScores = "";

    for (var i=0; i < localStorage.length; i++) {
        var checkUserValue = [];

        quizUsers = localStorage.getItem(localStorage.key(i));
        substringTest = quizUsers.substring(0,4) 
        if (substringTest == "quiz") {
            checkUserValue = quizUsers.split(",");
            var userName = checkUserValue[0]
            highScores += "User " + userName.substring(4) + " high score is: " + checkUserValue[1] + "\n";  
        }
    }
    window.alert(highScores);
});