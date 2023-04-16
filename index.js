// const dropdowns = document.querySelectorAll('#menu ul li');

// for (let i = 0; i < dropdowns.length; i++) {
//   dropdowns[i].addEventListener('click', function(event) {
//     event.stopPropagation();
//     if (this.querySelector('.sub-menu')) {
//       const subMenu = this.querySelector('.sub-menu');
//       if (subMenu.style.display === 'block') {
//         subMenu.style.display = 'none';
//       } else {
//         subMenu.style.display = 'block';
//       }
//     }
//   });
// }

// document.addEventListener('click', function(event) {
//   const subMenus = document.querySelectorAll('.sub-menu');
//   for (let i = 0; i < subMenus.length; i++) {
//     subMenus[i].style.display = 'none';
//   }
// });
//Search

// $(document).ready(function(){
//     $(".searchBtn").on("click", function(){
//       let searchInput = $(".searchInput").val().toLowerCase();
//       $(".container *").filter(function() {
//         $(this).toggle($(this).text().toLowerCase().indexOf(searchInput) > -1)
//       });
//     });
//   });
  
$(document).ready(function(){
    $(".searchBtn").on("click", function(){
      let searchInput = $(".searchInput").val().toLowerCase();
      $(".container *").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(searchInput) > -1)
      }).addClass("highlight"); // Thêm class "highlight" vào các phần tử đã tìm thấy
    });
  });
  
  //tooltip
  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
  });


  function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0;
}

Quiz.prototype.guess = function(answer) {
    if(this.getCurrentQuestion().isCorrectAnswer(answer)) {
        this.score++;
    }
    this.currentQuestionIndex++;
};

Quiz.prototype.getCurrentQuestion = function() {
    return this.questions[this.currentQuestionIndex];
};

Quiz.prototype.hasEnded = function() {
    return this.currentQuestionIndex >= this.questions.length;
};
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function (choice) {
    return this.answer === choice;
};
var QuizUI = {
    displayNext: function () {
        if (quiz.hasEnded()) {
            this.displayScore();
        } else {
            this.displayQuestion();
            this.displayChoices();
            this.displayProgress();
        }
    },
    displayQuestion: function() {
        this.populateIdWithHTML("question", quiz.getCurrentQuestion().text);
    },
    displayChoices: function() {
        var choices = quiz.getCurrentQuestion().choices;

        for(let i = 0; i < choices.length; i++) {
            this.populateIdWithHTML("choice" + i, choices[i]);
            this.guessHandler("guess" + i, choices[i]);
        }
    },
    displayScore: function() {
        let gameOverHTML = "<h4>Finished</h4>";
        gameOverHTML += "<h4> Your score is: " + quiz.score + "</h4>";
        this.populateIdWithHTML("quiz", gameOverHTML);
    },
    
    populateIdWithHTML: function(id, text) {
        let element = document.getElementById(id);
        element.innerHTML = text;
    },
    guessHandler: function(id, guess) {
        let button = document.getElementById(id);
        button.onclick = function() {
            quiz.guess(guess);
            QuizUI.displayNext();
        }
    },
    
    displayProgress: function() {
        var currentQuestionNumber = quiz.currentQuestionIndex + 1;
        this.populateIdWithHTML("progress", "Question " + currentQuestionNumber + " of " + quiz.questions.length);
    }
};
//Create Questions
var questions = [
    new Question("What is the longest word in the English language?", [ "Litter", "Smiles", "Cry", "Mother" ], "Smiles"),
    new Question("Why is the letter E so important?", ["Because it is in the alphabet","Because it's common", "Because it is very popular", "Because it is the beginning of everything"], "Because it is the beginning of everything"),
    new Question("What is higher without a head than with a head?", ["A pillow","A blanket", "A pen", "A car"], "A pillow"),
    new Question("What has arms but can not hug?", ["Couch","Armchair", "Support table", " Shelf"], "Armchair"),
    new Question("What has a face and two hands but no arms, legs or head?", ["A shirt","A pair of pants", "A box", "A leg"], "A shirt")
];

//Create Quiz
let quiz = new Quiz(questions);

//Display Quiz
QuizUI.displayNext();