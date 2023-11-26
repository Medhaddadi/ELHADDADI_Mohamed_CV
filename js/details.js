Array.from(document.getElementsByClassName("details")).map((element) => {
  element.addEventListener("click", (e) => {
    if (e.target.nextElementSibling.style.display === "block") {
      e.target.nextElementSibling.style.display = "none";
      console.log(e.target.nextElementSibling.style.display);
    } else {
      e.target.nextElementSibling.style.display = "block";
      growElement(e.target.nextElementSibling, 200, 20, 10);
      console.log(e.target.nextElementSibling.style.display);

      Array.from(document.getElementsByClassName("detailsFormation")).map(
        (element) => {
          if (element !== e.target.nextElementSibling) {
            element.style.display = "none";
          }
        }
      );
    }
  });
});

function growElement(element, maxHeight, intervalTime, step) {
  var height = 0;

  var intervalId = setInterval(function () {
    height += step;
    element.style.height = height + "px";

    if (height >= maxHeight) {
      clearInterval(intervalId);
      element.style.height = maxHeight + "px";
    }
  }, intervalTime);
}
const skillVsDescription = {
  java: "un langage de programmation orienté objet ",
  php: "un langage de programmation de scripts principalement utilisé pour produire des pages Web dynamiques via un serveur HTTP",
  c: "un langage de programmation impératif généraliste",
  "c++":
    "un langage de programmation compilé permettant la programmation sous de multiples paradigmes",
  python:
    "un langage de programmation interprété, multi-paradigme et multiplateformes",
  javascript:
    "un langage de programmation de scripts principalement utilisé dans les pages web interactives",
  typescript:
    "un langage de programmation libre et open source développé par Microsoft qui a pour but d’améliorer et de sécuriser la production de code JavaScript",
  bootstrap: "un framework CSS et JavaScript",
  jquery:
    "une bibliothèque JavaScript libre et multiplateforme créée pour faciliter l’écriture de scripts côté client dans le code HTML des pages web",
  tailwindcss: "un framework CSS",
  "react js":
    "une bibliothèque JavaScript libre développée par Facebook depuis 2013",
  "angular js":
    "un framework JavaScript open-source, développé par Google, qui assiste les développeurs dans la création d'applications web monopage",
  "spring boot": "un framework libre écrit en Java",
  mvc: "un framework libre écrit en Java",
  jee: "un framework libre écrit en Java",
  laravel:
    "un framework web open-source écrit en PHP respectant le principe modèle-vue-contrôleur",
  "node.js": "un environnement d'exécution JavaScript open source",
  spring: "un framework libre écrit en Java",
  jpa: "une interface de programmation Java qui permet aux développeurs de définir des classes dont les instances deviennent persistantes dans une base de données relationnelle",
  security: "un framework libre écrit en Java",
  webflux: "un framework libre écrit en Java",
  mysql: "un système de gestion de bases de données relationnelles",
  sql: "un langage informatique normalisé servant à exploiter des bases de données relationnelles",
  oracle: "un système de gestion de base de données relationnelle",
  mongodb: "un système de gestion de base de données orientée documents",
  git: "un logiciel de gestion de versions décentralisé",
  npm: "un gestionnaire de paquets pour le langage de programmation JavaScript",
  composer: "un gestionnaire de dépendances libre écrit en PHP",
  maven:
    "un outil de gestion et d'automatisation de production des projets logiciels Java en général et Java EE en particulier",
  docker:
    "un logiciel libre permettant de lancer des applications dans des conteneurs logiciels",
  postman: "un logiciel servant à tester, développer et documenter une API",
  junit:
    "un framework open source de test unitaire pour le langage de programmation Java",
  mockito: "un framework de tests unitaires Java open source",
  uml: "un langage de modélisation graphique à base de pictogrammes conçu pour fournir une méthode normalisée pour visualiser la conception d'un système",
  merise:
    "une méthode d'analyse, de conception et de gestion de projet informatique",
};
const skillsLi = document.querySelectorAll(".tooltip");
const tooltip = document.createElement("div");
tooltip.classList.add("tooltip-content");
document.body.appendChild(tooltip);
skillsLi.forEach((skill) => {
  console.log(skill.textContent.toLowerCase());
  skill.addEventListener("mousemove", (e) => {

    tooltip.textContent = skillVsDescription[skill.textContent.toLowerCase()];
    tooltip.style.left = e.pageX + 15 + "px";
    tooltip.style.top = e.pageY + 15 + "px";
    tooltip.style.visibility = "visible";
  });
  skill.addEventListener("mouseleave", () => {
    tooltip.style.visibility = "hidden";
  });
});



