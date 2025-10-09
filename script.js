let numberOfQuestions = 2;
let questions = [];
let questionsList = [];
let count = 0;
let rightAnswers = 0;
let explosionSound = new Audio('audio/explosion.wav');
let correctSound = new Audio('audio/correct.wav');
let rainSound = new Audio('audio/rain.wav')
let travelingSound = new Audio('audio/traveling.wav')
let startSound = new Audio('audio/start.wav')
let allSounds = [rainSound, correctSound, travelingSound, explosionSound, startSound]
let soundOn = true;
let languageIsEnglish = true;

function chooseDifficulty(number) {
    numberOfQuestions = number;
    startSound.currentTime = 0;
    startSound.play();
    chooseQuestions(count);
}


function show(id){
    let idv = document.getElementById(`${id}`);
    idv.style.display = "flex";
}   


function hide(id){
    let idv = document.getElementById(`${id}`);
    idv.style.display = "none";
}

function explode(){
    document.getElementById('explosion').classList.remove('invisible');
    let exp = document.getElementById('explosion-image');
    exp.style.transform = "scale(4)";
}


function chooseQuestions(){
    if (languageIsEnglish) {
       for (let i = 0; i < allQuestionsEnglish.length; i++) {
        questionsList.push(allQuestionsEnglish[i]);
       }
    }
    else{
         for (let i = 0; i < allQuestions.length; i++) {
        questionsList.push(allQuestions[i]);
       }
    }
    for (let i = 0; i < numberOfQuestions; i++) {
        let random = Math.floor(Math.random() * (allQuestionsEnglish.length-i));
        questions.push(questionsList[random]);
        questionsList.splice(random, 1);
    }
    document.getElementById('language-icon').style.display = 'none';
    render(count);
}


function nextQuestion(){
    count++;
    if (count >= numberOfQuestions) {
        if (rightAnswers == numberOfQuestions) {
            end('won');
        } else {
            end('lost');
        }
    }
    else{
        render(count);
    }    
}


function answer(answer, q){
    if (answer == questions[count]['solution']) {
        correctSound.play();
        travelingSound.play();
        document.getElementById(`a${answer}`).classList.add('right-answer');
        rightAnswers++;
        travel();
        setTimeout(() => {
            nextQuestion()
        }, 300);
    }
    else{
        document.getElementById(`a${answer}`).classList.add('wrong-answer');
        explode()
        explosionSound.play();
        setTimeout(() => {
                end('lost');
            }, 300);
    }   
}
setInterval(() => {
    
}, 30);


function travel(){
     let traveled = document.getElementById('traveled');
     let miles = rightAnswers / numberOfQuestions;
     traveled.style.transform = `scaleY(${miles})`;
     let spacemiles = miles * 500;
     let earthCloser = 1 - miles;
     document.getElementById('earth').style.filter = `grayscale(${earthCloser})`;
     document.getElementById('earth').style.opacity = `${miles}`;
     let spaceship = document.getElementById('spaceship');
     spaceship.style.transform = `translate(-27px, -${spacemiles}px)`;
     document.getElementById('fire').style.opacity = "1";
     setTimeout(() => {fire.style.opacity = "0";  
     }, 300);
}


function end(wonorlost){   
    show (wonorlost);
    startSound.pause();
    document.getElementById(`${wonorlost}-text`).classList.add(`${wonorlost}-animation`);
    let traveled = document.getElementById('traveled');
    traveled.style.transform = `scaleY(0)`;
    let spaceship = document.getElementById('spaceship');
    spaceship.style.transform = `translate(-27px, 0)`; 
    if (wonorlost == 'lost'){
        showPlayAgain();
    }
    if (wonorlost == 'won'){
        rainSound.play();
        if (languageIsEnglish) {
            document.getElementById('won-text').innerHTML = `you made it home<button onclick="playAgain('won')" id="play-again-won">play again?</button>`;
        }
        else{
            document.getElementById('won-text').innerHTML = `nach Hause geschafft <button onclick="playAgain('won')" id="play-again-won">nochmal?</button>`;
        }
    }
}


function showPlayAgain(){
    setTimeout(() => {
        document.getElementById('lost-text').classList.remove('lost-animation')
        document.getElementById('lost-text').style.fontSize = '44px';
        if (languageIsEnglish) {
            document.getElementById('lost-text').innerHTML = `<div class="play-again" onclick="playAgain('lost')">Play Again?</div>`;
        }   
        else{
            document.getElementById('lost-text').innerHTML = `<div class="play-again" onclick="playAgain('lost')">Nochmal?</div>`;
        }
    }, 3000);
}

function playAgain(wonorlost){
    hide (wonorlost);
    rainSound.pause();
    document.getElementById(`${wonorlost}-text`).classList.remove(`${wonorlost}-animation`);
    reset();
    startGame()
}


function reset(){
    count = 0;
    rightAnswers = 0;
    questions = [];
    questionsList = [];
    let exp = document.getElementById('explosion-image');
    exp.style.transform = "scale(1)";
    document.getElementById('explosion').classList.add('invisible');
    document.getElementById('lost-text').innerHTML = 'Lost in Space';
    document.getElementById('earth').style.filter = `grayscale(1)`;
    document.getElementById('earth').style.opacity = 0;
    document.getElementById('language-icon').style.display = 'flex';
    languageIsEnglish = true;
    document.getElementById('language-icon').innerHTML = 'EN';

}

function turnSoundOnOff(){
    if (soundOn) {
        soundOn = false;
        document.getElementById('sound-on-off').src = "icon/sound-off.png"
        toggleSound(0);
    }
    else{
        soundOn = true;
        document.getElementById('sound-on-off').src = "icon/sound.png"
        toggleSound(1);

    }
}

function toggleSound(muteOrUnmute){
    for (let i = 0; i < allSounds.length; i++) {
        let sound = allSounds[i];
        sound.volume = muteOrUnmute;
    }
}

function changeLanguage(){
    if(languageIsEnglish){
        languageIsEnglish = false;
        document.getElementById('language-icon').innerHTML = 'DE'
        changeCardContentLanguage();
    }
    else{
        languageIsEnglish = true;
        document.getElementById('language-icon').innerHTML = 'EN'
        changeCardContentLanguage();

    }
}
///////////////// render HTML-functions /////////////////////////////////////////////////////////////////////


function startGame(){
    hide ('start');
    hide ('attributes');
    document.getElementById('main-sub').style.display = "flex";
    changeCardContentLanguage();
}


function changeCardContentLanguage(){
    if (languageIsEnglish) {
         let cardContent = document.getElementById('card-content');
            cardContent.innerHTML = `
         <h4>Choose diffiulty</h4>
         <div class="answer-button" onclick="chooseDifficulty(3)">
            easy (3 questions)
         </div>
         <div class="answer-button" onclick="chooseDifficulty(6)">
            normal (6 questions)
         </div>
         <div class="answer-button" onclick="chooseDifficulty(9)">
            hard (9 questions)
         </div>
         <div class="answer-button" onclick="chooseDifficulty(15)">
            extreme (15 questions)
         </div>
        `; 
    }
    else{
        let cardContent = document.getElementById('card-content');
        cardContent.innerHTML = `
         <h4>Schwieriegkeitsgrad</h4>
         <div class="answer-button" onclick="chooseDifficulty(3)">
            einfach (3 Fragen)
         </div>
         <div class="answer-button" onclick="chooseDifficulty(6)">
            normal (6 Fragen)
         </div>
         <div class="answer-button" onclick="chooseDifficulty(9)">
            schwer (9 Fragen)
         </div>
         <div class="answer-button" onclick="chooseDifficulty(15)">
            extrem (15 Fragen)
         </div>
        `;  
    }
}

function render(q){
    let cardContent = document.getElementById('card-content');
    cardContent.innerHTML = `
    <h4>${questions[q]['question']}</h4>
    <div class="answer-button" id="a1" onclick="answer(1, ${q})">
        ${questions[q]['answer_1']}
    </div>
    <div class="answer-button" id="a2" onclick="answer(2, ${q})">
        ${questions[q]['answer_2']}
    </div>
    <div class="answer-button" id="a3" onclick="answer(3, ${q})">
        ${questions[q]['answer_3']}
    </div>
    <div class="answer-button" id="a4" onclick="answer(4, ${q})">
        ${questions[q]['answer_4']}
    </div>
    <div class="card-footer" id="footer">
        <div>
        Frage <b>${count+1}</b> von <b>${numberOfQuestions}</b>
        </div>
    </div>
    `;
}