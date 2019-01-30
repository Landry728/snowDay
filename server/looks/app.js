//Set variables for everything
let inputEnabled = false;
let stepList = [];
let currentStep = 0;
let timeout;
let fields = document.querySelectorAll('.field');
let info = document.querySelector('#info');
let startButton = document.querySelector('#start');
//show possibilities that cpu can choose from to plan the current game (repeats pat)
for(var i=0; i<fields.length; i++) {
	const val = i; 
	fields[i].onclick = function() {
		if(!inputEnabled) return;
		if(val === stepList[currentStep]) {
			if(currentStep+1 === stepList.length) {
					inputEnabled = false;
					if(stepList.length < 20) {
						generateLastStep();
						timeout = setTimeout(showSteps, 2000);
						currentStep = 0;
					}
					else {
						timeout = setTimeout(reset, 2000);
					}	
			}
			else {
				currentStep++;
			}
		}
		}
	}
//begins process starting game cpu begin
startButton.onclick = function() {
	this.disabled = true;
	start();
}
//defines functions of showing previous step and starting new step +time
function start() {
	generateLastStep();
	timeout = setTimeout(showSteps, 2000);
}
function generateLastStep() {
	stepList.push(rand(0, 3));
}
//shows what field(s) cpu selected // tells cpu to make new step if players right
function showSteps() {
	if(currentStep > stepList.length-1) {
		currentStep = 0;
		inputEnabled = true;
		return;
    }
    
    var id = stepList[currentStep];
    
	fields[id].className += ' active';
//allows for the function to be ran after the fact of delay
	setTimeout(function() {

		fields[id].className = fields[id].className.replace(' active', '');
		currentStep++;
		timeout = setTimeout(showSteps, 0.3*1000); // Give more time for finish.

	}, 0.6*1000);  //MS
}
//adds new step to end of every round
function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
//only want to add the last move to the pat