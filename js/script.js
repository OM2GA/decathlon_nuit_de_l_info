

document.addEventListener('DOMContentLoaded', function () {


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
    const userAnswers = [];


    const questionTextEl = document.getElementById('question-text');
    const answersContainerEl = document.getElementById('answers-container');
    const prevButtonEl = document.getElementById('btn-previous');
    const currentStepEl = document.getElementById('current-step');
    const imagePlaceholderEl = document.querySelector('.image-placeholder');


    function loadQuestion(index) {
        const currentData = questionsData[index];


        questionTextEl.textContent = `Question ${index + 1} : ${currentData.question}`;
        currentStepEl.textContent = index + 1;



        imagePlaceholderEl.innerHTML = '';
        const img = document.createElement('img');
        img.src = currentData.image;
        img.alt = `Illustration pour la question ${index + 1}`;
        img.classList.add('question-image');
        imagePlaceholderEl.appendChild(img);


        answersContainerEl.innerHTML = '';
        currentData.answers.forEach((answer, i) => {
            const button = document.createElement('button');
            button.classList.add('btn-answer');
            button.textContent = answer;

            button.addEventListener('click', () => handleAnswerClick(i));
            answersContainerEl.appendChild(button);
        });


        if (index === 0) {
            prevButtonEl.style.display = 'none';
        } else {
            prevButtonEl.style.display = 'inline-block';
        }
    }


    function handleAnswerClick(selectedIndex) {
        userAnswers.push(selectedIndex);

        if (currentQuestionIndex < questionsData.length - 1) {
            currentQuestionIndex++;
            loadQuestion(currentQuestionIndex);
        } else {
            finishQuiz();
        }
    }


    prevButtonEl.addEventListener('click', function () {
        if (currentQuestionIndex > 0) {
            userAnswers.pop();
            currentQuestionIndex--;
            loadQuestion(currentQuestionIndex);
        }
    });


    function finishQuiz() {

        let counts = [0, 0, 0, 0];
        userAnswers.forEach(index => {
            if (index >= 0 && index <= 3) counts[index]++;
        });


        let maxScore = -1;
        let winningIndex = 0;

        for (let i = 0; i < counts.length; i++) {
            if (counts[i] > maxScore) {
                maxScore = counts[i];
                winningIndex = i;
            }
        }


        const anchors = ['profil-a', 'profil-b', 'profil-c', 'profil-d'];
        const targetAnchor = anchors[winningIndex];


        console.log(`Profil gagnant : ${winningIndex} -> Redirection vers conseils.html#${targetAnchor}`);
        window.location.href = `conseils.html#${targetAnchor}`;
    }


    loadQuestion(0);
});