 // Game logic will go here
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        let attemptsLeft = 10;

        function checkGuess(){
            const userGuess = Number(document.getElementById('guessInput').value);
            const messageElement = document.getElementById('message');
            const attemptsElement = document.getElementById('attempts'); 

            if(attemptsLeft <= 0) {
                messageElement.textContent = `Game Over! The correct number was ${randomNumber}.`;
                return;
            }
            attemptsLeft--;

            if(userGuess === randomNumber) {
                messageElement.textContent = 'Congratulations! You guessed the number!';
                attemptsElement.textContent = '';
            } else if(userGuess < randomNumber) {
                messageElement.textContent = 'Too low! Try again.';
                attemptsElement.textContent = "Attempts left: " + attemptsLeft;
            } else {
                messageElement.textContent = 'Too high! Try again.';
                attemptsElement.textContent = `Attempts left: ${attemptsLeft}`;
            }
        }