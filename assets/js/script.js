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