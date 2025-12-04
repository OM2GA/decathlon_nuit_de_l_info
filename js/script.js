// Questionnaire Decathlon - JavaScript

document.addEventListener('DOMContentLoaded', function () {
    // Select all answer buttons
    const answerButtons = document.querySelectorAll('.btn-answer');
    const previousButton = document.querySelector('.btn-previous');

    // Handle answer button clicks
    answerButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove selected class from all buttons
            answerButtons.forEach(btn => btn.classList.remove('selected'));

            // Add selected class to clicked button
            this.classList.add('selected');

            // Get the selected answer
            const selectedAnswer = this.getAttribute('data-answer');
            console.log('Réponse sélectionnée:', selectedAnswer);
        });
    });

    // Handle previous button click
    if (previousButton) {
        previousButton.addEventListener('click', function () {
            console.log('Retour à la question précédente');
            // Add navigation logic here
        });
    }
});
