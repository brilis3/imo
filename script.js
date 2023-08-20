const animationButton = document.getElementById("animationButton");
const animationContainer = document.querySelector(".animationContainer");
const textAnimation = document.getElementById("textAnimation");
const heartsContainer = document.getElementById("hearts");
const decorationsContainer = document.getElementById("decorations");

animationButton.addEventListener("click", () => {
    animationButton.style.display = "none";
    animationContainer.style.display = "flex";
    textAnimation.innerHTML = "KIKOUUUUU DARLING (Imane CISSE)";
    heartsContainer.style.display = "block";
    decorationsContainer.style.display = "block";

    // Créez et animez des cœurs
    for (let i = 0; i < 20; i++) {
        createHeart();
    }

    // Créez des éléments de décoration
    for (let i = 0; i < 40; i++) {
        createDecoration();
    }

    // Effacez le texte après 5 secondes et affichez le poème d'amitié
    setTimeout(() => {
        animateText("Un ami, c'est quelqu'un qui te connaît bien et qui t'aime quand même.en plus je crush hehe");
    }, 5000);
});

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";

    // Positionnez le cœur de manière aléatoire sur l'écran
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    heartsContainer.appendChild(heart);

    // Supprimez le cœur après un certain temps
    setTimeout(() => {
        heart.remove();
    }, 3000);
}

function createDecoration() {
    const decoration = document.createElement("div");
    decoration.className = "decoration";

    // Positionnez l'élément de décoration de manière aléatoire sur l'écran
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    decoration.style.left = `${x}px`;
    decoration.style.top = `${y}px`;

    decorationsContainer.appendChild(decoration);
}

function animateText(newText) {
    const delay = 100; // Délai entre chaque lettre (en millisecondes)
    let i = 0;

    function typeLetter() {
        if (i < newText.length) {
            textAnimation.innerHTML += newText.charAt(i);
            i++;
            setTimeout(typeLetter, delay);
        }
    }

    textAnimation.innerHTML = ""; // Efface le texte actuel
    typeLetter();
}
