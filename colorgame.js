var numSquares = 6;
var colors = [];
var pickedColor;
var h1 = document.querySelector("h1");
var messageDisplay = document.getElementById("message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");

init();

function init(){
	setupModeButtons();

	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
		//add click listeners to squares 
		squares[i].addEventListener("click", function(){
		//grab color of clicked square and compare color to picked color
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(pickedColor);
				h1.style.backgroundColor = pickedColor;
			}
			else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function reset(){
	//generate all new colors
	//pick a new random color from array
	//change colors of squares
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		colors[i] ? (squares[i].style.backgroundColor = colors[i], squares[i].style.display = "block"): squares[i].style.display = "none";
	}
	resetButton.textContent = "New Colors";
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
}

resetButton.addEventListener("click", function(){
	reset();
});



function changeColors(color){
	//loop through all squares
	//change each color to match given color
	for(var i = 0; i < colors.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor((Math.random() * colors.length));
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	//add num random colors to array
	//return that array
	var arr = []

	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}

	return arr;

}

function randomColor(){
	//pick R, G, B values between 0 - 255
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);

	return "rgb(" + r + ", " + g +", " + b + ")";

}