var p1button= document.querySelector("#p1button");
var p2button= document.querySelector("#p2button");
var reset=document.querySelector("#reset");
var numInput= document.querySelector("input");
var p1display= document.querySelector("#p1display");
var p2display= document.querySelector("#p2display");
var winnerScoreDisplay= document.querySelector("#winnerScoreDisplay");
var p1score=0;
var p2score=0;
var winnerScore=5;
var gameOver=false;

p1button.addEventListener("click",function(){
	if(!gameOver){
		p1score++;
		
		if(p1score===winnerScore){
			gameOver=true;
			p1display.classList.toggle("success");
			console.log("Game Over!");
		}
		p1display.textContent=p1score;
	}
		
});

p2button.addEventListener("click",function(){
	if(!gameOver){
		p2score++;
		
		if(p2score===winnerScore){
			gameOver=true;
			p2display.classList.toggle("success");
			console.log("Game Over!");
		}
		p2display.textContent=p2score;
	}
});

reset.addEventListener("click",function(){
	p1score=0;
	p2score=0;
	p1display.textContent=0;
	p2display.textContent=0;
	gameOver=false;
	p1display.classList.remove("success");
	p2display.classList.remove("success");
});


numInput.addEventListener("change",function(){
	winnerScoreDisplay.textContent=numInput.value;
	winnerScore=Number(numInput.value);
});




