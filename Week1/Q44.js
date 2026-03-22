// Project - Guess Game

function guessGame() {
    let guess;
    let random = Math.floor(Math.random() * (10 - 1) + 1);

    do {

        guess = Number(prompt('GUESS NUMBER BETWEEN 1 TO 10'));

        if (!guess) continue;

        if (isNaN(guess)) {
            alert('Invalid Number, Try Again');
            continue;
        }

        if (guess === random) {
            alert('Congratulations')
        }
    } while (guess && guess !== random)
}

guessGame()