var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var squares = document.querySelectorAll(".square");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	messageDisplay.textContent = "";
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++){
		if (colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	messageDisplay.textContent = "";
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change color display to match current color
	colorDisplay.textContent = pickedColor;
	//change colors of the page
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	this.textContent = "New Colors";
});


colorDisplay.textContent = pickedColor;




for (var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	//add click Listeners
	squares[i].addEventListener("click", function(){
		//Grab color of square
		var clickedColor = this.style.backgroundColor;
		//Compare color to picked color
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct";
			changeColors(pickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?"
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try again";
		}
	});
}

function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//repeat num times
	for (var i = 0; i < num; i ++){
	arr.push(randomColor());
	}
	//return the array
	return arr;
}


function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}











