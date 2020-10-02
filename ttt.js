/*
Array mit Buchstaben (X, O)
*/

var playerIcon = ['X', 'O'];

var activePlayer;
activePlayer = 0;

var gameActive = 0;

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

if(document.querySelector('.player-panel-0').textContent==="Winner!" || document.querySelector('.player-panel-1').textContent==="Winner!") {
    console.log("Teeeeeeeeeeeeeeeeeeeeeeeest");
    gameActive = 1;
}

if(gameActive === 0) {
    console.log('Spiel ist aktiv!');



function alleFelder(event) {
        var zielFeld = event.target; //Abfrage, wo das Event ausgelöst wurde
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
        winnerQuery();
        // change active Player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        
        document.querySelector('.player-panel-0').classList.toggle('active');
        document.querySelector('.player-panel-1').classList.toggle('active');
    };

    document.getElementById('felder').addEventListener('click', alleFelder);  
     
   
    //Funktionsabfrage, ob eine Reihe voll ist, sonst nächster Spieler*/
    function winnerQuery() {
        if(felder.feld1.textContent === playerIcon[0] && felder.feld2.textContent === playerIcon[0] && felder.feld3.textContent === playerIcon[0]) {
            document.querySelector('.player-panel-0').textContent="Winner!";
        } else if(felder.feld4.textContent === playerIcon[0] && felder.feld5.textContent === playerIcon[0] && felder.feld6.textContent === playerIcon[0]) {
            document.querySelector('.player-panel-0').textContent="Winner!";
        } else if(felder.feld7.textContent === playerIcon[0] && felder.feld8.textContent === playerIcon[0] && felder.feld9.textContent === playerIcon[0]) {
            document.querySelector('.player-panel-0').textContent="Winner!";
        } else if(felder.feld1.textContent === playerIcon[0] && felder.feld4.textContent === playerIcon[0] && felder.feld7.textContent === playerIcon[0]) {
            document.querySelector('.player-panel-0').textContent="Winner!";
        } else if(felder.feld2.textContent === playerIcon[0] && felder.feld5.textContent === playerIcon[0] && felder.feld8.textContent === playerIcon[0]) {
            document.querySelector('.player-panel-0').textContent="Winner!";
        } else if(felder.feld3.textContent === playerIcon[0] && felder.feld6.textContent === playerIcon[0] && felder.feld9.textContent === playerIcon[0]) {
            document.querySelector('.player-panel-0').textContent="Winner!";
        } else if(felder.feld1.textContent === playerIcon[0] && felder.feld5.textContent === playerIcon[0] && felder.feld9.textContent === playerIcon[0]) {
            document.querySelector('.player-panel-0').textContent="Winner!";
        } else if(felder.feld3.textContent === playerIcon[0] && felder.feld5.textContent === playerIcon[0] && felder.feld7.textContent === playerIcon[0]) {
            document.querySelector('.player-panel-0').textContent="Winner!";
        } else if(felder.feld1.textContent === playerIcon[1] && felder.feld2.textContent === playerIcon[1] && felder.feld3.textContent === playerIcon[1]) {
            document.querySelector('.player-panel-1').textContent="Winner!";
        } else if(felder.feld4.textContent === playerIcon[1] && felder.feld5.textContent === playerIcon[1] && felder.feld6.textContent === playerIcon[1]) {
            document.querySelector('.player-panel-1').textContent="Winner!";
        } else if(felder.feld7.textContent === playerIcon[1] && felder.feld8.textContent === playerIcon[1] && felder.feld9.textContent === playerIcon[1]) {
            document.querySelector('.player-panel-1').textContent="Winner!";
        } else if(felder.feld1.textContent === playerIcon[1] && felder.feld4.textContent === playerIcon[1] && felder.feld7.textContent === playerIcon[1]) {
            document.querySelector('.player-panel-1').textContent="Winner!";
        } else if(felder.feld2.textContent === playerIcon[1] && felder.feld5.textContent === playerIcon[1] && felder.feld8.textContent === playerIcon[1]) {
            document.querySelector('.player-panel-1').textContent="Winner!";
        } else if(felder.feld3.textContent === playerIcon[1] && felder.feld6.textContent === playerIcon[1] && felder.feld9.textContent === playerIcon[1]) {
            document.querySelector('.player-panel-1').textContent="Winner!";
        } else if(felder.feld1.textContent === playerIcon[1] && felder.feld5.textContent === playerIcon[1] && felder.feld9.textContent === playerIcon[1]) {
            document.querySelector('.player-panel-1').textContent="Winner!";
        } else if(felder.feld3.textContent === playerIcon[1] && felder.feld5.textContent === playerIcon[1] && felder.feld7.textContent === playerIcon[1]) {
            document.querySelector('.player-panel-1').textContent="Winner!";
        }

        else {
            console.log('Laaaaaaangweilig!');
        }
        
    };
    
} else {
    console.log('Spiel ist nicht aktiv!');
}
