# Decathlon - Guide Sportif Personnalisé (Nuit de l'Info)

Bienvenue sur le projet "Decathlon Profiler". Cette application web interactive a pour but d'aider les utilisateurs à déterminer leur profil sportif via un questionnaire dynamique et de leur proposer des programmes d'entraînement sur mesure.

---

## Instructions pour lancer le projet

Ce projet est conçu comme un site web statique (HTML/CSS/JS), ce qui le rend très simple à déployer et à tester. Aucune installation de dépendances (npm, composer, etc.) n'est requise.

### 1. Lancement local simple
1. Téléchargez ou clonez le dossier du projet sur votre ordinateur.
2. Naviguez vers la racine du dossier.
3. Ouvrez le fichier **`index.html`** avec votre navigateur web préféré (Chrome, Firefox, Safari, Edge).

### 2. Lancement via un serveur local (Recommandé)
Pour une expérience optimale (et pour simuler un environnement de production), il est conseillé d'utiliser un serveur local (ex: extension "Live Server" sur VS Code) :
1. Ouvrez le dossier du projet dans votre éditeur de code.
2. Faites un clic droit sur `index.html`.
3. Choisissez l'option "Open with Live Server".

---

## Commentaires sur la réalisation

### Choix Techniques

* **Architecture :**
    * Site statique pur pour garantir une **rapidité de chargement maximale** et une simplicité d'hébergement.
    * Structure multi-pages : `index.html` (Landing), `questionnaire.html` (Quiz interactif), `conseils.html` (Résultats).

* **Front-End & Design :**
    * **Bootstrap 5 (CDN) :** Utilisé pour la grille responsive (Grid system), la gestion de la barre de navigation mobile (`navbar-toggler`) et la mise en page rapide.
    * **CSS Personnalisé (`style.css`) :** Surcouche graphique pour respecter l'identité visuelle de Decathlon.
        * Utilisation de **variables CSS** (`:root`) pour la couleur emblématique `var(--decathlon-blue)` (#3643BA) et les polices.
        * Typographie : Intégration de **Roboto** et **Roboto Condensed** via Google Fonts pour coller à la charte "sportive" et dynamique.
    * **Animations :** Transitions douces au survol des boutons (hover effects) et animation de surbrillance (`@keyframes highlight`) lors de l'arrivée sur la section de résultat.

* **Logique (JavaScript - `script.js`) :**
    * **Vanilla JS :** Choix de ne pas utiliser de framework JS (React/Vue) pour garder le projet léger vu sa portée.
    * **Structure des données :** Les questions et réponses sont stockées dans un tableau d'objets `questionsData`. Cela permet d'ajouter ou modifier des questions sans toucher au code HTML.
    * **Algorithme de profilage :**
        * Chaque réponse a un index de 0 à 3, correspondant aux profils A, B, C ou D.
        * À la fin du quiz, le script calcule la majorité des réponses.
        * **Redirection intelligente :** L'utilisateur est redirigé vers `conseils.html` avec une ancre URL spécifique (ex: `#profil-c`), ce qui déclenche un scroll automatique et une animation CSS sur la section concernée.

### Difficultés rencontrées et Solutions

1.  **Gestion de la redirection et des ancres :**
    * *Problème :* Transmettre le résultat du quiz d'une page à l'autre sans back-end.
    * *Solution :* Utilisation des paramètres de hachage d'URL (`window.location.href = ...#profil-x`). Sur la page de destination, le CSS `:target` est utilisé pour mettre en évidence visuellement le profil sélectionné.

2.  **Expérience Utilisateur (UX) du Quiz :**
    * *Challenge :* Rendre le passage des questions fluide.
    * *Solution :* Mise en place d'un chargement dynamique du DOM (remplacement du texte et de l'image) plutôt que de recharger la page à chaque question. Ajout d'un bouton "Retour" pour permettre la correction.

---

## Lien vers la page développée

* **Accès direct au fichier source :** [`index.html`](./index.html)
    *(Cliquez ici si vous visualisez ce README en local)*

* **URL de déploiement (Exemple) :**
    *Si le projet est mis en ligne :* `https://votre-projet-decathlon.vercel.app`

---

*Projet réalisé dans le cadre de la Nuit de l'Info.*
