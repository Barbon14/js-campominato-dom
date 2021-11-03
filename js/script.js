// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
// in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49

// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.

// In seguito l’utente clicca su ogni cella:
// se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina,
// altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
// (come detto sull’effetiva interfaccia fate voi, non ci son specifiche vincolanti, ma partite semplici)

// La partita termina quando il giocatore clicca su una bomba
// o raggiunge il numero massimo possibile di numeri consentiti.

// chiedo all'utente di scegliere la difficoltà
let difficultySet = parseInt(prompt(`Seleziona il livello di difficoltà:
1 per facile
2 per medio
3 per difficile`));
console.log(difficultySet);

// il numero dei quadrati varia in base alla difficoltà scelta
// - difficulty == 1 , genero 100 quadrati
// - difficulty == 2 , genero 81 quadrati
// - difficulty == 3 , genero 49 quadrati
if (difficultySet === 1) {
    squareNum = 100;
    squareSize = "size-lvl-1";
} else if (difficultySet === 2) {
    squareNum = 81;
    squareSize = "size-lvl-2";
} else if (difficultySet === 3) {
    squareNum = 49;
    squareSize = "size-lvl-3";
}

generateGrid(squareNum, squareSize);

const bombs = [];

// genero numeri per riempire l'array fino a quando non ha 50 elementi
while (bombs.length < 16) {
    let num = ramdomNum(1, squareNum);

    // controllo che il numero non sia già presente all'interno dell'array
    if (bombs.includes(num) === false) {
        bombs.push(num);
    }
}

console.log(bombs);


// funzioni

// genera elemento html con una classe
function newElement (newElementTag, newElementClass) {
    let element = document.createElement(newElementTag);
    element.classList.add(newElementClass);
    return element;
}

// genera la griglia in base al livello selezionato,
// la dimensione dei quadrati varia in base alla quantità generata
function generateGrid(squareNum, squareSize) {
    const squareCont = document.getElementById("grid")
    for (let i = 1; i <= squareNum; i++) {

        let node = newElement("div", "square");
        node.classList.add(squareSize);

        // rendo ogni quadrato cliccabile
        node.addEventListener('click',

            function () {
                this.classList.add("clicked-true");
                node.innerHTML = i;
            }
        );

        squareCont.append(node);
    }
}

// genera numero casuale
function ramdomNum(min, max) {
    let rNum = Math.floor(Math.random() * max) + min;
    return rNum;
}
