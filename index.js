function calculate() {
	var weight = document.getElementById("yourWeight").value;
	var planet = document.getElementById("planetSelection").value;
	var newWeight = weight*planet;
	document.getElementById("results").innerHTML = "Your weight on this planet is " + newWeight;
};