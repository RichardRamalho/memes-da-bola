const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const clickOnBall = document.querySelector("#closedBall");
const btnTry = document.querySelector("#btnTry");

const phrases = [
  "A mão que aplaude é a mesma que váia. - Carlinhos Bala",
  "Clássico é clássico e vice-versa - Jardel",
  "Que interessante,  aqui no Japão só tem carros importados. - Jardel",
  "Eu peguei a bola no meio e fui fondo, fui fondo, fui fondo e chutei pro gol. - Jardel",
  "Tanto na minha vida futebolística, quanto com minha vida ser humana. - Nunes",
  "O difícil, como vocês sabem, não é fácil. - Vicente Matheus",
  "Haja o que hajar, o Corinthians será campeão. - Vicente Matheus",
  "O clube estava a beira do precipício, mas tomou a decisão certa, deu um passo a frente. - João Pinto",
  "Tenho muito orgulho de jogar na terra onde Cristo nasceu, Belém do Pará. - Claudiomiro",
  "A Partir de agora meu coração só tem uma cor: preto e vermelho. - Fabão",
  "O novo apelido do Aloísio Chulapa é CB, Sangue Bom. - Souza",
  "O Fernando está correndo o tempo, parece até que tem dois pulmões - Neto.",
  "Eu, o Paulo Nunes e o Dinho vamos fazer uma dupla sertaneja. - Jardel",
  "Nem que eu tivesse dois pulmões eu alcançava essa bola. - Bradock",
  "No México que é bom. Lá a gente recebe semanalmente de 15 em 15 dias. - Ferreira",
  "Que merda, hein? Sabia não. - Marinho",
  "Só posso resumir essa derrota com duas palavras: A-zar! - Nunes",
  "Só existem três coisas que param no ar: beija-flor, helicóptero e Dadá. - Dadá Maravilha",
  "As pessoas querem que o Brasil vença e ganhe. - Dunga",
  "Estou de regime, o doutor me proibiu de comer bicarbonato. _ Jardel",
  "Fiz que fui,não fui e acabei fondo. - Nunes",
  "Quando o jogo está a mil, minha naftalina sobe. - Jardel",
];

let randomPhrase = document.querySelector("#randomPhrase");
let generateRandomPhrase;

clickOnBall.addEventListener("click", generatePhrase);
document.addEventListener("keydown", pressEnterKey);

function generatePhrase() {
  toggleScreen();

  generateRandomPhrase = Math.floor(Math.random() * phrases.length);

  randomPhrase.innerText = phrases[generateRandomPhrase];
}

function buttonTry(event) {
  event.preventDefault();
  toggleScreen();
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function pressEnterKey(e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    toggleScreen();
  }
}