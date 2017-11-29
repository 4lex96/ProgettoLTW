setUpPage();
function setUpPage(){
	for(suindex = 0;suindex<questionArray.length;suindex++){
		document.write("<div class='exercise_row'><span class='exercise_number'>" + (suindex+1) + " </span><span class='exercise_text'>");
		document.write(questionArray[suindex][0]);
		document.write("</span><span class='exercise_gapfill'><input size=" + questionArray[suindex][3] + " name=ans" + (suindex+1) + "> </span><span class='exercise_text'>");
              		document.write(questionArray[suindex][2]);

		}
		{
			document.write("<div class='exercise_buttons'><input onClick=checkScore() type=button value='Score' name='button'> <input type=button value='See answers' onClick='reveal()' name='button2'> <input type='reset' onClick='again()' name='reset' value='Start again'></div>");
			}

}

var answerArray = new Array(document.form1.ans1,document.form1.ans2,document.form1.ans3,document.form1.ans4,document.form1.ans5,document.form1.ans6,document.form1.ans7,document.form1.ans8,document.form1.ans9,document.form1.ans10,document.form1.ans11,document.form1.ans12);
function checkScore() {
var answerArray = new Array(document.form1.ans1,document.form1.ans2,document.form1.ans3,document.form1.ans4,document.form1.ans5,document.form1.ans6,document.form1.ans7,document.form1.ans8,document.form1.ans9,document.form1.ans10,document.form1.ans11,document.form1.ans12);
	if(cheat){
		alert("Please press Start again to try again.")
	}else{
		var score = 0;
		for(csindex = 0;csindex<questionArray.length;csindex++){
			if (answerArray[csindex].value == questionArray[csindex][1]) {
				score++;
			}
		}
		alert("Your score is "+score+" / " + questionArray.length);
	}
}




function reveal() {
var answerArray = new Array(document.form1.ans1,document.form1.ans2,document.form1.ans3,document.form1.ans4,document.form1.ans5,document.form1.ans6,document.form1.ans7,document.form1.ans8,document.form1.ans9,document.form1.ans10,document.form1.ans11,document.form1.ans12);
	for(revindex = 0;revindex<questionArray.length;revindex++){
		if (answerArray[revindex].value == ""){
			answerArray[revindex].value = "Risposta esatta:" + " " + questionArray[revindex][1];
		}
		else{
			answerArray[revindex].value = "inserita: " + answerArray[revindex].value + " --> " + " esatta: " + questionArray[revindex][1];
		}
	}
	cheat = true;
}
function again() {
var answerArray = new Array(document.form1.ans1,document.form1.ans2,document.form1.ans3,document.form1.ans4,document.form1.ans5,document.form1.ans6,document.form1.ans7,document.form1.ans8,document.form1.ans9,document.form1.ans10,document.form1.ans11,document.form1.ans12);
	cheat = false;
	for(agindex = 0;agindex<questionArray.length;agindex++){
		answerArray[agindex].value = "";
	}

}
