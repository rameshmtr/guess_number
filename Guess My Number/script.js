secretNumber = Math.trunc(Math.random() * 20) + 1;
score = 20
highScore = 0

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    //When there is no number
    if (!guess){
        document.querySelector('.message').textContent = 'No Number'
    
    //When The Player Wins
    } else if (guess === secretNumber){
        document.querySelector('.message').textContent = 'Correct Number';
        
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width='30rem';
        document.querySelector('.number').textContent = secretNumber;
        if (score> highScore){
            highScore = score
            document.querySelector('.highscore').textContent = highScore;
        }

    //When Guess is too high
    } else if (guess > secretNumber){
        if (score > 1) {
        document.querySelector('.message').textContent = 'Too High';
        score--
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Lost the game';
        }

    //When Guess is too Low    
    } else if (guess < secretNumber){
        if (score > 1) {
        document.querySelector('.message').textContent = 'Too Low';
        score--
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Lost the game';
        }
    }
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = ''
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start Guessing...'
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width='15rem';
});


