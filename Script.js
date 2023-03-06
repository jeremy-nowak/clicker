let coinClick = document.querySelector("#coinClick");
let resetCoin = document.querySelector("#resetCoin");
let mine = document.querySelector("#mine");
let upgrade = document.querySelector("#upgrade");
let shop = document.querySelector("#shop");
let score = document.querySelector("#score");
let upgradeOne = document.querySelector("#upgradeOne");
let upgradeTwo = document.querySelector("#upgradeTwo");
let message = document.querySelector("#message");
let prixItem1 = 10;
let prixItem2 = 15;
let prixMine = 20;
let price1Display = document.querySelector("#price1Display");
let price2Display = document.querySelector("#price2Display");
let multiplicateurDisplay = document.querySelector("#multiplicateur");
let increDisplay = document.querySelector("#increDisplay");
let passifInc = document.querySelector("#passifInc");
let incre = document.querySelector("#incre");

// Affichage de mon contenu dans mon local storage dans mon HTML
function load() {
  if (localStorage.getItem("coin") === null) {
    // on set la valeur à 0 puis dans tous les cas on récup
    localStorage.setItem("coin", "0");
  } else {
    // on a besoin de rien faire
  }
  setInterval(function () {
    score.innerHTML = localStorage.getItem("coin");
  }, 10);

  // récupérer le passif income
  if (localStorage.getItem("passifInc") !== null) {
    passifInc.textContent = localStorage.getItem("passifInc");
  }

  // récup le multiplicateur
  if (localStorage.getItem("multiplicateur") !== null) {
    multiplicateurDisplay.textContent = localStorage.getItem("multiplicateur");
  }
  if (localStorage.getItem("incrementationPassifInc") !== null) {
    incre.textContent = localStorage.getItem("incrementationPassifInc");
  }
  if (localStorage.getItem("incrementationPrice3Display") !== null) {
    price3Display.textContent = localStorage.getItem(
      "incrementationPrice3Display"
    );
  }
  if (localStorage.getItem("incrementationPrice2Display") !== null) {
    price2Display.textContent = localStorage.getItem(
      "incrementationPrice2Display"
    );
  }
  if (localStorage.getItem("incrementationPrice1Display") !== null) {
    price1Display.textContent = localStorage.getItem(
      "incrementationPrice1Display"
    );
  }

  //je cache la boutique pour la faire apparaitre plus tard boutique

  upgradeOne.style.display = "none";
  upgradeTwo.style.display = "none";
  mine.style.display = "none";
  gifImage.style.display = "none";
}
function displayShop() {
  if (localStorage.getItem("coin") < 10) {
    let msg = " ";
    message.innerHTML = msg;
  }

  if (localStorage.getItem("coin") >= 10) {
    upgradeOne.style.display = "block";

    if (localStorage.getItem("coin") >= 15) {
      upgradeTwo.style.display = "block";

      if (localStorage.getItem("coin") >= 20) {
        mine.style.display = "block";
      }
    }
  }
}

function verifyCoin() {
  if (localStorage.getItem("coin") < 10) {
    let msg = " Il vous faut plus de Ziggurat....";
    message.innerHTML = msg;
  }
}

function click() {
  let multiplicateur = parseInt(multiplicateurDisplay.textContent);
  let tirelire = parseInt(localStorage.getItem("coin"));
  let hache = tirelire + multiplicateur;
  localStorage.setItem("coin", hache);
}

function resetCoins() {
  localStorage.clear();
  localStorage.setItem("multiplicateur", "1");
  localStorage.setItem("passifInc", "0");
  localStorage.setItem("coin", "0");
  localStorage.setItem("incrementationPassifInc", "20");
  localStorage.setItem("incrementationPrice2Display", "15");
  localStorage.setItem("incrementationPrice1Display", "10");

  incre = 0;
  alert("PLUS AUCUN COIN !");
  location.reload();
}
// FAIRE CA POUR LES AUTRES GENRE MULTIPLICATEUR ET PASSIVINC

function item1() {
  let scoreDisplay = score.textContent;
  price1 = parseInt(price1Display.textContent);
  if (price1 > scoreDisplay) {
    let msg = "Not enough coin to buy this upgrade!";
    message.innerHTML = msg;
  } else {
    let coin = parseInt(localStorage.getItem("coin")) - price1;
    price1 = price1 * 2;
    multiplicateurDisplay.textContent =
      parseInt(multiplicateurDisplay.textContent) + 1;
    score.innerHTML = coin;
    price1Display.innerHTML = price1;
    localStorage.setItem("coin", coin.toString());
    let msg = "Encore du travail ??";
    message.innerHTML = msg;
    console.log(localStorage.getItem("multiplicateur"));
    localStorage.setItem("multiplicateur", multiplicateurDisplay.textContent);

    localStorage.setItem(
      "incrementationPrice1Display",
      price1Display.textContent
    );
  }
}

function item2() {
  let scoreDisplay = score.textContent;
  price2 = parseInt(price2Display.textContent);
  if (price2 > scoreDisplay) {
    let msg = "Not enough coin to buy this upgrade!";
    message.innerHTML = msg;
  } else {
    let coin = parseInt(localStorage.getItem("coin")) - price2;
    price2 = price2 * 3;
    multiplicateurDisplay.textContent =
      parseInt(multiplicateurDisplay.textContent) + 3;
    score.innerHTML = coin;
    price2Display.innerHTML = price2;
    localStorage.setItem("coin", coin.toString());
    let msg = " VRrrouuummm VRrrouuummmmm";
    message.innerHTML = msg;

    localStorage.setItem("multiplicateur", multiplicateurDisplay.textContent);

    // Stockage dans le localStorage du prix de l'upgrade2
    localStorage.setItem(
      "incrementationPrice2Display",
      price2Display.textContent
    );
  }
}

function item3() {
  let scoreDisplay = score.textContent;
  price3 = parseInt(price3Display.textContent);
  if (price3 > scoreDisplay) {
    let msg = "Not enough coin to buy this upgrade!";
    message.innerHTML = msg;
    console.log(scoreDisplay);
  } else {
    // Retrait des points et mutliplication du prix de l'upgrade
    let coin = parseInt(localStorage.getItem("coin")) - price3;
    price3 = price3 * 4;

    //  valeur d'incrementation pour pouvoir l'afficher
    let increDisplay = document.querySelector("#incre").textContent;

    //   affichage de la valeur d'incrementation
    passifInc.textContent = increDisplay;

    // Mise a jour de la valeur de score VIA la variable "coin"
    score.innerHTML = coin;
    price3Display.innerHTML = price3;
    localStorage.setItem("coin", coin.toString());
    let msg = "";
    message.innerHTML = msg;

    // Recuperation de l'affichage de valeur d'incrementation et multiplication de celle-ci
    document.querySelector("#incre").textContent = parseInt(increDisplay) * 2;

    // Stockage de la valeur d'incrementation de l'afficgage de passifInc
    localStorage.setItem("passifInc", passifInc.textContent);

    // Stockage dans le localStorage des differentes incrementations
    localStorage.setItem("incrementationPassifInc", incre.textContent);
    localStorage.setItem(
      "incrementationPrice3Display",
      price3Display.textContent
    );
  }
}

// ajout de valeur via le bouton
coinClick.addEventListener("click", click);

// remise a zero des coins
resetCoin.addEventListener("click", resetCoins);

// chargement de la page
load();

// Appel de mes function via mes addEventListener:

upgradeOne.addEventListener("click", item1);

upgradeTwo.addEventListener("click", item2);

mine.addEventListener("click", item3);

function iddle() {
  let add =
    parseInt(localStorage.getItem("coin")) + parseInt(passifInc.textContent);
  localStorage.setItem("coin", add);
}
setInterval(iddle, 1000);
setInterval(displayShop, 10);

// Mais aussi stock mon shop dans le localstorage

// ajouter en local storage les multiplicateur et le passiv incom

function activateGif() {
  // Démarrez le gif et désactivez le bouton
  gifImage.src = gifImage.src;

  // Attendez la fin du cycle de lecture et réactivez le bouton
  setTimeout(() => {}, gifImage.duration * 800);
}

coinClick.addEventListener("click", activateGif);
