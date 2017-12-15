/*
* Funzione che inizializza la pagina:
* - imposta sotto ogni riga l'icona trasparente, che verrà poi rimpiazzata da una spunta o una croce rispettivamente se la  risposta è corretta o errata.
* - inizializza dinamicamente l'array delle domande e la pagina html
* - inizializza dinamicamente l'array delle risposte
*/

setUpPage();
function setUpPage(){
	for(suindex = 0;suindex<questionArray.length;suindex++){
		document.write("<div class='exercise_row'><span class='exercise_number'>" + (suindex+1) + " </span><span class='exercise_text'>");
		document.write(questionArray[suindex][0]);
		document.write("</span><span class='exercise_gapfill'><input size=" + questionArray[suindex][3] + " name=ans" + (suindex+1) + "> </span><span class='exercise_text'>");
              		document.write(questionArray[suindex][2]);
            		document.write("</span><span class='exercise_marking'><img src='images/transparent.png' name='im" + (suindex +1) + "'></span> </div>");

		}
		{
			document.write("<div class='exercise_buttons'><input onClick=checkScore() type=button value='Punteggio' name='button'> <input type=button value='Risposte' onClick='reveal()' name='button2'> <input type='reset' onClick='again()' name='reset' value='Ricomincia'></div>");
			}

}

var answerArray = new Array(document.esercizio.ans1,document.esercizio.ans2,document.esercizio.ans3,document.esercizio.ans4,document.esercizio.ans5,document.esercizio.ans6,document.esercizio.ans7,document.esercizio.ans8,document.esercizio.ans9,document.esercizio.ans10,document.esercizio.ans11,document.esercizio.ans12);
var imageArray = new Array(document.images.im1,document.images.im2,document.images.im3,document.images.im4,document.images.im5,document.images.im6,document.images.im7,document.images.im8,document.images.im9,document.images.im10,document.images.im11,document.images.im12);
function checkScore() {
var answerArray = new Array(document.esercizio.ans1,document.esercizio.ans2,document.esercizio.ans3,document.esercizio.ans4,document.esercizio.ans5,document.esercizio.ans6,document.esercizio.ans7,document.esercizio.ans8,document.esercizio.ans9,document.esercizio.ans10,document.esercizio.ans11,document.esercizio.ans12);
var imageArray = new Array(document.images.im1,document.images.im2,document.images.im3,document.images.im4,document.images.im5,document.images.im6,document.images.im7,document.images.im8,document.images.im9,document.images.im10,document.images.im11,document.images.im12);
	if(cheat){

		/*
		* Cheat, variabile che controlla se l'utente cerca di imbrogliare il test cliccando mostra le risposte e subito dopo verifica punteggio.
		* Maggiori dettagli nelle funzioni reveal() e again()
		*/

		alert("Puoi vedere il punteggio solo se sei tu ad inserire le risposte.")
	}else{
		var score = 0;
		for(csindex = 0;csindex<questionArray.length;csindex++){
			if (answerArray[csindex].value == questionArray[csindex][1]) {
				imageArray[csindex].src="images/spunta_copia.png";
				score++;
			} else {
				imageArray[csindex].src="images/cross_copia.png";
			}
		}
		alert("Il tuo punteggio è "+score+" / " + questionArray.length);
	}
}




function reveal() {
var answerArray = new Array(document.esercizio.ans1,document.esercizio.ans2,document.esercizio.ans3,document.esercizio.ans4,document.esercizio.ans5,document.esercizio.ans6,document.esercizio.ans7,document.esercizio.ans8,document.esercizio.ans9,document.esercizio.ans10,document.esercizio.ans11,document.esercizio.ans12);
var imageArray = new Array(document.images.im1,document.images.im2,document.images.im3,document.images.im4,document.images.im5,document.images.im6,document.images.im7,document.images.im8,document.images.im9,document.images.im10,document.images.im11,document.images.im12);
	for(revindex = 0;revindex<questionArray.length;revindex++){
		answerArray[revindex].value = questionArray[revindex][1];
		imageArray[revindex].src="images/transparent.png";
	}
	cheat = true;
}
function again() {
var answerArray = new Array(document.esercizio.ans1,document.esercizio.ans2,document.esercizio.ans3,document.esercizio.ans4,document.esercizio.ans5,document.esercizio.ans6,document.esercizio.ans7,document.esercizio.ans8,document.esercizio.ans9,document.esercizio.ans10,document.esercizio.ans11,document.esercizio.ans12);
var imageArray = new Array(document.images.im1,document.images.im2,document.images.im3,document.images.im4,document.images.im5,document.images.im6,document.images.im7,document.images.im8,document.images.im9,document.images.im10,document.images.im11,document.images.im12);
	cheat = false;
	for(agindex = 0;agindex<questionArray.length;agindex++){
		answerArray[agindex].value = "";
		imageArray[agindex].src="images/transparent.png";
	}

}
