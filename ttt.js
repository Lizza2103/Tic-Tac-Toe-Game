/*
Array mit Buchstaben (X, O)
*/

var playerIcon = ['X', 'O'];

var activePlayer;
activePlayer = 1;

var felder = {
    feld1: document.getElementById('feld-1'),
    feld2: document.getElementById('feld-2'),
    feld3: document.getElementById('feld-3'),
    feld4: document.getElementById('feld-4'),
    feld5: document.getElementById('feld-5'),
    feld6: document.getElementById('feld-6'),
    feld7: document.getElementById('feld-7'),
    feld8: document.getElementById('feld-8'),
    feld9: document.getElementById('feld-9')
};

function alleFelder(event) {
        console.log(event.target);
        var zielFeld = event.target;
        //For Loop für jedes Feld: bei Klick entweder turn textcontent to X (Player 0) oder turn textcontent to O (Player 1)
        for (feld in felder) {
            
            switch(activePlayer) { 
                case 0:
                zielFeld.textContent = playerIcon[0];
                break;
                case 1:
                zielFeld.textContent = playerIcon[1];
                break;
                default:
                zielFeld.textContent = 'Nope'; 
            }
            
        }
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        // change active Player
        document.querySelector('.player-panel-0').classList.toggle('active');
        document.querySelector('.player-panel-1').classList.toggle('active');
    };

   document.getElementById('felder').addEventListener('click', alleFelder); 
     
    /*//Funktion change active Player
    function nextPlayer() {
       activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
       // change active Player
       document.querySelector('.player-0-panel').classList.toggle('active');
       document.querySelector('.player-1-panel').classList.toggle('active');
    };
    //Funktionsabfrage, ob eine Reihe voll ist, sonst nächster Spieler*/
    
    