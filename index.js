/*function calculate(event) {
	var weight = document.getElementById("yourWeight").value;
	var planet = document.getElementById("planetSelection").value;
	var newWeight = weight*planet;
	document.getElementById("results").innerHTML = "Your weight on this planet is " + newWeight;

	event.stopPropogation();
};*/
    

    var AstroCalculatorApp = angular.module('AstroCalculatorApp', []);

    AstroCalculatorApp.controller('AstroCalculatorCtrl', [function () {
        var vm = this;
        vm.weight = 150;
        vm.planet = 1;
        vm.planetName = 'Earth';
  
        vm.calculate = calculate;
        vm.planets = [
        	{
        		name: "Sun",
        		multiplier: "27.9"
        	},
        	{
        		name: "Mercury",
        		multiplier: ".377"
        	},
        	{
        		name: "Venus",
        		multiplier: ".9032"
        	},
        	{
        		name: "Earth",
        		multiplier: "1"
        	},
        	{
        		name: "Moon",
        		multiplier: ".1655"
        	},
        	{
        		name: "Mars",
        		multiplier: ".3895"
        	},
        	{
        		name: "Jupiter",
        		multiplier: "2.640"
        	},
        	{
        		name: "Saturn",
        		multiplier: "1.139"
        	},
        	{
        		name: "Uranus",
        		multiplier: ".917"
        	},
        	{
        		name: "Neptune",
        		multiplier: "1.148"
        	},
        	{
        		name: "Pluto",
        		multiplier: ".06"
        	}        	
        ]


        ////////////////
         function calculate() {
         	vm.planets.forEach( function (element) {
         		if (element.multiplier === vm.planet) {
         			vm.planetName = element.name;
         		}
         	});
	    	vm.newWeight = vm.weight * vm.planet;
        };

        function activate() {
        	vm.calculate();
        };
      	activate();

	    }
    ]); 

 