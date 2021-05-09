let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

const disMessage = function(message){
	document.querySelector('.msg').textContent = message;
};

/*---------------------CHECK button------------------------*/
document.querySelector('.check').addEventListener('click',function(){
	
	const guess = Number(document.querySelector('.guess').value);
	//When there is no input
	if(!guess){
		disMessage('⛔ No Number!!!');
	}//When player wins!
	else if(guess === secretNumber){
		disMessage('🥇 Correct Number ✔✔✔');
		document.querySelector('.number').textContent=secretNumber;
		document.querySelector('body').style.backgroundColor = '#60b347';
		if (score>highscore) {
			highscore = score;
			document.querySelector('.highscore').textContent = highscore;
		}

	}//When the guess is wrong!
	else if(guess != secretNumber){
		if (score>1) {
			disMessage(guess>secretNumber ? '📈 Too High!!!' : '📉 Too Low!!!');
			score--;
			document.querySelector('.score').textContent=score;
		}else{
			disMessage('😢 You Lost');
			document.querySelector('.score').textContent=0;
		}
		
	}
});

/*---------------------AGAIN button------------------------*/

document.querySelector('.again').addEventListener('click',function(){
	secretNumber = Math.trunc(Math.random()*20)+1;
	document.querySelector('.number').textContent='?';
	document.querySelector('body').style.backgroundColor='#222';
	disMessage('Start guessing...');
	score=20;
	document.querySelector('.score').textContent=score;
	document.querySelector('.guess').value='';
});