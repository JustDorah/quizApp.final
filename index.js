// test questionNumber
let questionNumber = 0;
//test score
let score = 0;

//start the quiz
function startQuiz(){
  $('.startQuiz').on('click','.startButton', function(event){
    $('.startQuiz').remove();
    $('.questionAnswerForm').removeClass('hidden');
    $('.keepingScore').removeClass('hidden');
    $('.questionNumber').text(1);
    //console.log('start button clicked!')
  });
}

// *******CREATING AND SHOWING THE QUESTION***********
// *****this creates the questions**********
function createQuestion(){
  if (questionNumber < test.length){
    return `<div class="question-${questionNumber}">
    <form>
    <fieldset name="questionAndAnswerOptions">
    <legend><p class="legend">${test[questionNumber].question}</p></legend>
    <label for="${test[questionNumber].answers[0]}" class="answerChoice">
      <input type="radio" name="question1" id="${test[questionNumber].answers[0]}" value="${test[questionNumber].answers[0]}" required/>
      <span>${test[questionNumber].answers[0]}</span>
    </label>
    <label for="${test[questionNumber].answers[1]}" class="answerChoice">
      <input type="radio" name="question1" id="${test[questionNumber].answers[1]}" value="${test[questionNumber].answers[1]}" required/>
      <span>${test[questionNumber].answers[1]}</span>
    </label>
    <label for="${test[questionNumber].answers[2]}" class="answerChoice">
      <input type="radio" name="question1" id="${test[questionNumber].answers[2]}" value="${test[questionNumber].answers[2]}" required/>
      <span>${test[questionNumber].answers[2]}</span>
    </label>
    <label for="${test[questionNumber].answers[3]}" class="answerChoice">
      <input type="radio" name="question1" id="${test[questionNumber].answers[3]}" value="${test[questionNumber].answers[3]}" required/>
      <span>${test[questionNumber].answers[3]}</span>
    </label>
    <button role="button" type="submit" class="submitButton">ENTER</button>
    </fieldset>
    </form>
    </div>`;
  }else{
    $('.keepingScore').addClass('hidden');
    $('.questionNumber').text(9);
    restartQuiz();
    finalPage();
  }
}
// ******showing the questions created above in the html page********
function renderQuestion(){
  $('.questionAnswerForm').html(createQuestion());
}


// ***************CHECKING IF ANSWER CORRECT********************
function userAnswerChoice() {
  $('form').on('submit', function (event) {
    event.preventDefault();
    let chosen = $('input:checked');
    let answer = chosen.val();
    //console.log(`the clicked answer is: ${answer}`);
    let correctAnswer = `${test[questionNumber].correctAnswer}`;
    //console.log(`the correct answer is:${test[questionNumber].correctAnswer}`);
        
    if (answer === correctAnswer) {
      answerIsCorrect();
      //console.log('answerIsCorrect')
    } else {
      answerIsWrong();
      //console.log('answerIsWrong')
    }
  });
}

// *********sends user to appropriate feedback and updates score *************
function answerIsCorrect(){
  userGotItCorrect();
  updateScore();
}
function answerIsWrong(){
  userGotItWrong();
}
// **********score update*********
function updateScore(){
  newScore();
  $('.score').text(score);
}
//increment the score
function newScore(){
  score ++;
}
// *******************************************


// *********FEEDBACK PAGE*****************
//correct
function userGotItCorrect(){
  let correctAnswer = `${test[questionNumber].correctAnswer}`;
  let correctAnswerFeedback = `${test[questionNumber].correctAnswerFeedback}`;
  $('.questionAnswerForm').html(`<div class="gotAnswerCorrect">
  <div class="icon">
    <img src="${test[questionNumber].icon}" alt="${test[questionNumber].alt}"/>
  </div>
  <p class="answer toShow">
    <span class="answerYay">Yes!</span><br/> The correct answer is <span class="correctAnswer"> "${correctAnswer}"</span>
    <br/>
    <button role="button" type="button" class="readMoreButton">...Read More</button>
    <span class = "readMore hidden">${correctAnswerFeedback}</span>
  </p>
  </div>
  <button role="button" type="button" class="nextQButton">On To The Next Win!</button>`);
}
//wrong
function userGotItWrong(){
  let correctAnswer = `${test[questionNumber].correctAnswer}`;
  let correctAnswerFeedback = `${test[questionNumber].correctAnswerFeedback}`;
  $('.questionAnswerForm').html(`<div class="gotAnswerWrong">
  <div class="icon">
    <img src="${test[questionNumber].icon}" alt="${test[questionNumber].alt}"/>
  </div>
  <p class="answer">Interesting ... but it is not exactly what I was looking for...</p>
  <br/>
  <p class="answer toShow"> The correct answer is: <span class="correctAnswer">"${correctAnswer}"</span>
    <br/>
    <button role="button" type="button" class="readMoreButton">...Read More</button>
    <span class="readMore hidden"> ${correctAnswerFeedback}</span>
  </div>
  <button role="button" type="button" class="nextQButton">Go ahead and try again</button>`);
}

//function to show extra info on answer 
function readMoreButtonClicked(){
  $('main').on('click', '.readMoreButton', function(event){
    //alert('readMoreButton clicked!');
    $(event.target).closest('.toShow').find('.readMore').toggleClass('hidden');
    $(event.target).closest('.toShow').find('.readMoreButton').toggleClass('hidden');
  });
}

//next question number
function updateQuestionNum(){
  questionNumber ++;
  $('.questionNumber').text(questionNumber+1);
}

//move onto the next question
function nextQuestion(){
  $('main').on('click', '.nextQButton',function(event){
    updateQuestionNum();
    renderQuestion();
    userAnswerChoice();   
  });
}

/*final page
  clears out the score at restart
*/
//the final page
function finalPage(){
  if(score >= 4){
    $('.questionAnswerForm').html(`<div class="winner">
      <img class="answerImg1" src="images.labheros.jpg.png" alt="Not all heros wear capes. Some wear lab coats. Super lab teams unite!">
      <p class="finalPage">You were born to be a safety Hero!<br/> Great Job!<br/>
      </p>
    </div>
    <button role="button" type="button" class="reStartButton">Play Again</button>`);
  } else {
    $('.questionAnswerForm').html(`<div class="powers">
      <img class="answerImg" src="images.forgetLabSafety3.png" alt="scientist mixing chemicals to get superpowers">
      <p class="finalPage">How...unexpected.<br/> It looks like you had other ideas in mind.</p>
    </div>
    <button role="button" type="button" class="reStartButton">Play Again</button>`)
  }
}
//restarts the quiz
function restartQuiz(){
  $('main').on('click', '.reStartButton', function(event){
    location.reload();
  })
}

//function to start the functions
function startTheFunctions(){
  startQuiz();
  renderQuestion();
  userAnswerChoice();
  readMoreButtonClicked();
  nextQuestion();
}

//load all functions when DOM rendered
$(startTheFunctions());