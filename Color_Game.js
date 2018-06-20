var numSquares=6;
var colors=generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var givenColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var result=document.querySelector("#result");
var heading= document.querySelector("#heading");
var reset= document.querySelector("#reset");
var easybtn= document.querySelector("#easybtn");
var hardbtn= document.querySelector("#hardbtn");

colorDisplay.textContent = givenColor;

for(var i = 0; i < squares.length; i++){
	
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.backgroundColor;
		
		if(clickedColor === givenColor) {
			result.textContent="Correct!";
			changeColor(clickedColor);
			heading.style.backgroundColor=clickedColor;
			reset.textContent="Play Again?"
		} else {
			this.style.backgroundColor="#232323";
			result.textContent="Try Again!";
		}
	});
}

reset.addEventListener("click",resetColor);

easybtn.addEventListener("click",function(){
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	numSquares=3;
	colors=generateRandomColors(numSquares);
	givenColor=pickColor();
	colorDisplay.textContent = givenColor;
	for(var i = 0; i < squares.length; i++){
		
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}

});

hardbtn.addEventListener("click",function(){
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	numSquares=6;
	colors=generateRandomColors(numSquares);
	givenColor=pickColor();
	colorDisplay.textContent = givenColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display="block";
	}
});


function changeColor(clickedColor){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=clickedColor;
	}
}

function pickColor(){
	var randomColor= Math.floor(Math.random()* colors.length);
	console.log(colors[randomColor]);
	return colors[randomColor];

}

function generateRandomColors(num){
	var arr=[];
	for(var i=0; i<num;i++){
		var r= Math.floor(Math.random()*256);
		var g= Math.floor(Math.random()*256);
		var b= Math.floor(Math.random()*256);
		var random="rgb("+r+", "+g+", "+b+")";
		arr.push(random);
		console.log(arr);
	}
	return arr;
}


function resetColor(){
	colors= generateRandomColors(numSquares);
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	givenColor=pickColor();
	colorDisplay.textContent = givenColor;
	reset.textContent="Change Colors";
	heading.style.backgroundColor="steelblue";
	result.textContent="";
}
