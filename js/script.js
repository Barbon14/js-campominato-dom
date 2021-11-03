// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
// in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro(o simili, l’importante è dare all’utente il feedback che ha scoperto una casella che rimarrà scoperta, con il numero relativo).

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
    generateGrid(100, "size-lvl-1")
} else if (difficultySet === 2) {
    generateGrid(81, "size-lvl-2")
} else if (difficultySet === 3) {
    generateGrid(49, "size-lvl-3")
}

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