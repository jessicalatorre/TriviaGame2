var panel = $('#quiz-container');

$(document).on('click', '.btn', function (e) {
  game.start();
});

$(document).on('click', '#done', function (e) {
  game.done();
});

//try creating literal objects for each question using comma separated pairs and answer set within one large array
var questionAnswerPairs = [{
  question: "1 . On average, how many aluminum soda cans are used in the United States each year?",
  answers: ["90 million", "80 billion", "120 million", "3 billion"],
  correctAnswer: "80 billion"
}, {
  question: "2 . What percentage of monetary purchasing goes to packaging materials?",
  answers: ["$1 for every $10 spent", "$1 for every $50 spent", "$1 for every $100 spent", "$1 for every $1,000 spent"],
  correctAnswer: "$1 for every $10 spent"
}, {
  question: "3 . How much energy does recycling just one aluminum can save?",
  answers: ["Enough to power a microwave for 30 minutes", "Enough to power the average American home for 4 days", "Enough to power a computer for 15 minutes", "Enough to power a TV for 3 hours"],
  correctAnswer: "Enough to power a TV for 3 hours"
}, {
  question: "4 . Recycling plastic saves ______ times as much energy as burning it in an incinerator.",
  answers: ["a. 2 times", "0.5 times", "3 times", "it takes more energy to recycle"],
  correctAnswer: "a. 2 times"
}, {
  question: "5 . A typical glass bottle would take _____ years or more to decompose.",
  answers: ["20 years", "150 years", "4000 years", "It will never break down"],
  correctAnswer: "4000 years"
}, {
  question: "6 . The US Department of Energy (DOE) recommends turning off the monitor and placing the computer on sleep mode if you are not going to use it for more than___.",
  answers: ["2 hours", "6 hours", "45 minutes", "20 minutes"],
  correctAnswer: "20 minutes"
}, {
  question: "7 . Do items such as cell phone chargers, fans, coffeemakers, desktop printers, radios, etc. consume energy even when they are turned off?",
  answers: ["Yes", "No", "No idea"],
  correctAnswer: "Yes"
}, {
  question: "8 . Compact Florescent Lighting -CFLs- use ______ of the energy needed for incandescent bulbs.",
  answers: ["25%", "50%", "75%", "100%"],
  correctAnswer: "25%"
}, {
  question: "9 . How many gallons of motor gasoline does the average American consume in one year?",
  answers: ["150 gallons", "500 gallons", "310 gallons", "750 gallons"],
  correctAnswer: "500 gallons"
}, {
  question: "10 . How much does the average American consume in paper, wood, and other products made from trees each year?",
  answers: ["1 tree", "5 trees", "7 trees", "15 trees"],
  correctAnswer: "7 trees"
}];

//assign a variable and try creating an object with 
var game = {
  correct: 0,
  incorrect: 0,
  counter: 45,
  countdown: 45,
  countdown: function () {
    game.counter--;
    $('#counter-number').html(game.counter);

    if (game.counter === 0) {
      console.log('TIME UP');
      game.done();
    }
  },
  start: function () {
    timer = setInterval(game.countdown, 1000);

    //need to prepend H2 Time Remaining element with counter. 
    $('#quiz-container').prepend('<h2>Time Remaining: <span id="counter-number">60</span> Seconds </h2>');
    $('#start').remove();//remove start button when interval starts

    //create two for loops to run through your questionAnswerPairs array, so you can dynamically append the questions to the H2 element, and so you can add in radio buttons for each j index (answer set).
    for (var i = 0; i < questionAnswerPairs.length; i++) {
      panel.append('<h2>' + questionAnswerPairs[i].question + '</h2>'); //
      for (var j = 0; j < questionAnswerPairs[i].answers.length; j++) {
        panel.append('<input type="radio" name="question' + '-' + i + '" value="' + questionAnswerPairs[i].answers[j] + '">' + questionAnswerPairs[i].answers[j]);
      }
    }
    // starting conditional statements for each question by looking at each object name. If a question is checked, the value of the answer will be compared with the specific index within the questionAnswerPair array and the correct paired object for the answer.
    panel.append('<button id="done">Done</button>');
    },
    done: function () {
    
      $.each($("input[name='questions-0']:checked"), function () {
        if ($(this).val() == questionAnswerPairs[0].correctAnswer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      });
      $.each($("input[name='question-1']:checked"), function () {
        if ($(this).val() == questionAnswerPairs[1].correctAnswer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      });
      $.each($("input[name='question-2']:checked"), function () {
        if ($(this).val() == questionAnswerPairs[2].correctAnswer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      });
      $.each($("input[name='question-3']:checked"), function () {
        if ($(this).val() == questionAnswerPairs[3].correctAnswer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      });
      $.each($("input[name='question-4']:checked"), function () {
        if ($(this).val() == questionAnswerPairs[4].correctAnswer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      });
      $.each($("input[name='question-5']:checked"), function () {
        if ($(this).val() == questionAnswerPairs[5].correctAnswer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      });
      $.each($("input[name='question-6']:checked"), function () {
        if ($(this).val() == questionAnswerPairs[6].correctAnswer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      });
      $.each($("input[name='question-7']:checked"), function () {
        if ($(this).val() == questionAnswerPairs[7].correctAnswer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      });

      $.each($("input[name='question-8']:checked"), function () {
        if ($(this).val() == questionAnswerPairs[7].correctAnswer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      });
      $.each($("input[name='question-9']:checked"), function () {
        if ($(this).val() == questionAnswerPairs[7].correctAnswer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      });
      $.each($("input[name='question-10']:checked"), function () {
        if ($(this).val() == questionAnswerPairs[7].correctAnswer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      });

      this.result();
    },
    
    result:function () {

      clearInterval(timer);

      $('#quiz-container h2').remove();
      panel.html("<h2>Let's see how you did</h2>");
      panel.append('<h3>Correct Answers: ' + this.correct + '</h3>');
      panel.append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
      panel.append('<h3>Unanswered: ' + (questionAnswerPairs.length - (this.incorrect + this.correct)) + '</h3>');
    }
  };
