// Questionnaire Decathlon - JavaScript

document.addEventListener('DOMContentLoaded', function () {

    // Données du QCM extraites du document
    const questionsData = [
        {
            question: "Quel est ton niveau sportif actuel ?",
            answers: [
                "Débutant(e) – Je démarre ou je reprends",
                "Intermédiaire – Je pratique régulièrement",
                "Avancé(e) – Je m’entraîne intensivement",
                "Expert(e) – Objectifs précis / compétition"
            ]
        },
        {
            question: "Quel est ton principal objectif ?",
            answers: [
                "Remise en forme légère",
                "Amélioration générale",
                "Performance physique",
                "Optimisation / compétition"
            ]
        },
        {
            question: "Quel type de sport pratiques-tu le plus souvent ?",
            answers: [
                "Activité douce (marche, yoga léger)",
                "Cardio modéré/ renforcement léger",
                "Musculation / cardio soutenu",
                "Entraînement intensif (HIIT, cardio intensif)"
            ]
        },
        {
            question: "Combien de séances par semaine fais-tu en général ?",
            answers: [
                "0- 1 fois par semaine",
                "2 - 3 fois par semaine",
                "4 - 5 fois par semaine",
                "plus de 6 fois par semaine"
            ]
        },
        {
            question: "Quelle est la durée moyenne de tes séances ?",
            answers: [
                "< 20min",
                "20-40 min",
                "40-60 min",
                "> 60 min"
            ]
        },
        {
            question: "Quel est ton lieu d'entraînement principal ?",
            answers: [
                "A la maison, sans matériel",
                "Maison / extérieur avec un petit matériel",
                "Salle de sport régulière",
                "Infrastructure complète (salle de sport …)"
            ]
        },
        {
            question: "Quel matériel as-tu à disposition ?",
            answers: [
                "Aucun",
                "Elastiques / petit matériel",
                "Haltères",
                "Machines / matériel avancé"
            ]
        },
        {
            question: "Quelles sont les zones que tu veux prioriser ?",
            answers: [
                "Mobilité / bien-être",
                "Tonicité globale",
                "Force / endurance",
                "Performance ciblée"
            ]
        },
        {
            question: "Intensité préférée ?",
            answers: [
                "Faible",
                "Modérée",
                "Elevée",
                "Très élevée"
            ]
        },
        {
            question: "Ton niveau de motivation ?",
            answers: [
                "Je veux commencer tranquillement",
                "Je veux progresser régulièrement",
                "Je veux me challenger",
                "Je veux aller au maximum"
            ]
        }
    ];

    let currentQuestionIndex = 0;
    const userAnswers = []; // Pour stocker les réponses de l'utilisateur

    // Sélection des éléments du DOM
    const questionTextEl = document.getElementById('question-text');
    const answersContainerEl = document.getElementById('answers-container');
    const prevButtonEl = document.getElementById('btn-previous');
    const currentStepEl = document.getElementById('current-step');
    const quizContainer = document.getElementById('quiz-container');
    const resultSection = document.getElementById('result-section');

    // Fonction pour charger une question
    function loadQuestion(index) {
        const currentData = questionsData[index];

        // Mise à jour du texte de la question et du compteur
        questionTextEl.textContent = `Question ${index + 1} : ${currentData.question}`;
        currentStepEl.textContent = index + 1;

        // Vider les anciennes réponses
        answersContainerEl.innerHTML = '';

        // Créer les boutons pour chaque réponse
        currentData.answers.forEach((answer, i) => {
            const button = document.createElement('button');
            button.classList.add('btn-answer');
            button.textContent = answer;
            button.setAttribute('data-index', i);

            // Ajouter l'événement de clic
            button.addEventListener('click', () => handleAnswerClick(i, answer));

            answersContainerEl.appendChild(button);
        });

        // Gérer l'affichage du bouton "Précédent"
        if (index === 0) {
            prevButtonEl.style.display = 'none';
        } else {
            prevButtonEl.style.display = 'inline-block';
        }
    }

    // Gestion du clic sur une réponse
    function handleAnswerClick(selectedIndex, answerText) {
        // Enregistrer la réponse
        userAnswers[currentQuestionIndex] = answerText;
        console.log(`Réponse Q${currentQuestionIndex + 1}: ${answerText}`);

        // Passer à la question suivante ou finir
        if (currentQuestionIndex < questionsData.length - 1) {
            currentQuestionIndex++;
            loadQuestion(currentQuestionIndex);
        } else {
            finishQuiz();
        }
    }

    // Gestion du bouton précédent
    prevButtonEl.addEventListener('click', function () {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            loadQuestion(currentQuestionIndex);
        }
    });

    // Fonction de fin de quiz
    function finishQuiz() {
        console.log("Quiz terminé. Réponses :", userAnswers);
        quizContainer.style.display = 'none';
        resultSection.style.display = 'block';
        // Ici, vous pourrez ajouter la logique pour calculer le profil (A, B, C, D) 
        // basé sur les réponses stockées dans userAnswers.
    }

    // Initialisation : charger la première question
    loadQuestion(currentQuestionIndex);
});