// Questionnaire Decathlon - JavaScript

document.addEventListener('DOMContentLoaded', function () {

    // Données du QCM avec les images associées
    const questionsData = [
        {
            question: "Quel est ton niveau sportif actuel ?",
            image: "../images/question_1.png",
            answers: [
                "Débutant(e) – Je démarre ou je reprends",
                "Intermédiaire – Je pratique régulièrement",
                "Avancé(e) – Je m’entraîne intensivement",
                "Expert(e) – Objectifs précis / compétition"
            ]
        },
        {
            question: "Quel est ton principal objectif ?",
            image: "../images/question_2.png",
            answers: [
                "Remise en forme légère",
                "Amélioration générale",
                "Performance physique",
                "Optimisation / compétition"
            ]
        },
        {
            question: "Quel type de sport pratiques-tu le plus souvent ?",
            image: "../images/question_3.png",
            answers: [
                "Activité douce (marche, yoga léger)",
                "Cardio modéré/ renforcement léger",
                "Musculation / cardio soutenu",
                "Entraînement intensif (HIIT, cardio intensif)"
            ]
        },
        {
            question: "Combien de séances par semaine fais-tu en général ?",
            image: "../images/question_4.png",
            answers: [
                "0- 1 fois par semaine",
                "2 - 3 fois par semaine",
                "4 - 5 fois par semaine",
                "plus de 6 fois par semaine"
            ]
        },
        {
            question: "Quelle est la durée moyenne de tes séances ?",
            image: "../images/question_5.png",
            answers: [
                "< 20min",
                "20-40 min",
                "40-60 min",
                "> 60 min"
            ]
        },
        {
            question: "Quel est ton lieu d'entraînement principal ?",
            image: "../images/question_6.png",
            answers: [
                "A la maison, sans matériel",
                "Maison / extérieur avec un petit matériel",
                "Salle de sport régulière",
                "Infrastructure complète (salle de sport …)"
            ]
        },
        {
            question: "Quel matériel as-tu à disposition ?",
            image: "../images/question_7.png",
            answers: [
                "Aucun",
                "Elastiques / petit matériel",
                "Haltères",
                "Machines / matériel avancé"
            ]
        },
        {
            question: "Quelles sont les zones que tu veux prioriser ?",
            image: "../images/question_8.png",
            answers: [
                "Mobilité / bien-être",
                "Tonicité globale",
                "Force / endurance",
                "Performance ciblée"
            ]
        },
        {
            question: "Intensité préférée ?",
            image: "../images/question_9.png",
            answers: [
                "Faible",
                "Modérée",
                "Elevée",
                "Très élevée"
            ]
        },
        {
            question: "Ton niveau de motivation ?",
            image: "../images/question_10.png",
            answers: [
                "Je veux commencer tranquillement",
                "Je veux progresser régulièrement",
                "Je veux me challenger",
                "Je veux aller au maximum"
            ]
        }
    ];

    let currentQuestionIndex = 0;
    const userAnswers = []; // Stocke les index des réponses (0, 1, 2, 3)

    // Sélection des éléments du DOM
    const questionTextEl = document.getElementById('question-text');
    const answersContainerEl = document.getElementById('answers-container');
    const prevButtonEl = document.getElementById('btn-previous');
    const currentStepEl = document.getElementById('current-step');
    const imagePlaceholderEl = document.querySelector('.image-placeholder');

    // Fonction pour charger une question
    function loadQuestion(index) {
        const currentData = questionsData[index];

        // 1. Mise à jour du texte
        questionTextEl.textContent = `Question ${index + 1} : ${currentData.question}`;
        currentStepEl.textContent = index + 1;

        // 2. Mise à jour de l'image
        // On vide le conteneur puis on ajoute l'image
        imagePlaceholderEl.innerHTML = '';
        const img = document.createElement('img');
        img.src = currentData.image;
        img.alt = `Illustration pour la question ${index + 1}`;
        img.classList.add('question-image'); // Classe CSS pour le style
        imagePlaceholderEl.appendChild(img);

        // 3. Création des boutons de réponse
        answersContainerEl.innerHTML = '';
        currentData.answers.forEach((answer, i) => {
            const button = document.createElement('button');
            button.classList.add('btn-answer');
            button.textContent = answer;
            // On passe l'index de la réponse (0 pour A, 1 pour B...)
            button.addEventListener('click', () => handleAnswerClick(i));
            answersContainerEl.appendChild(button);
        });

        // 4. Gestion du bouton précédent
        if (index === 0) {
            prevButtonEl.style.display = 'none';
        } else {
            prevButtonEl.style.display = 'inline-block';
        }
    }

    // Gestion du clic sur une réponse
    function handleAnswerClick(selectedIndex) {
        userAnswers.push(selectedIndex);

        if (currentQuestionIndex < questionsData.length - 1) {
            currentQuestionIndex++;
            loadQuestion(currentQuestionIndex);
        } else {
            finishQuiz();
        }
    }

    // Gestion du bouton précédent (Annuler l'action)
    prevButtonEl.addEventListener('click', function () {
        if (currentQuestionIndex > 0) {
            userAnswers.pop(); // Retire la dernière réponse du tableau
            currentQuestionIndex--;
            loadQuestion(currentQuestionIndex);
        }
    });

    // Fonction finale : calcul et redirection
    function finishQuiz() {
        // 1. Calculer le profil majoritaire
        let counts = [0, 0, 0, 0]; // [A, B, C, D]
        userAnswers.forEach(index => {
            if (index >= 0 && index <= 3) counts[index]++;
        });

        // Trouver l'index gagnant
        let maxScore = -1;
        let winningIndex = 0;

        for (let i = 0; i < counts.length; i++) {
            if (counts[i] > maxScore) {
                maxScore = counts[i];
                winningIndex = i;
            }
        }

        // 2. Définir les ancres correspondantes (doivent matcher les IDs dans conseils.html)
        const anchors = ['profil-a', 'profil-b', 'profil-c', 'profil-d'];
        const targetAnchor = anchors[winningIndex];

        // 3. Redirection vers la page conseils à l'endroit précis
        console.log(`Profil gagnant : ${winningIndex} -> Redirection vers conseils.html#${targetAnchor}`);
        window.location.href = `conseils.html#${targetAnchor}`;
    }

    // Démarrage
    loadQuestion(0);
});