var submitButton = document.getElementById("submitButton");
var outputContainer = document.getElementById("output");

submitButton.addEventListener("click", buttonFunc);

function buttonFunc(e) {
	const animalValue = document.getElementById("animal").value;
	const verbValue = document.getElementById("verb").value;
	const adjValue = document.getElementById("adj").value;
	const advValue = document.getElementById("adv").value;
	const output = `
	The ${adjValue} ${animalValue} ${verbValue} 
	very ${advValue}, in fact, thanks to that the 
	${adjValue} ${animalValue} gets all the popcorn that 
	an animal can ever wish for. And we all love popcorn 🍿!!
	`;
	document.getElementById("output").innerHTML = output;
	outputContainer.classList.remove("hide");
	e.preventDefault();
	
}


//Reset::::
var resetButton = document.querySelector(".play-again");
//Reset function
resetButton.addEventListener("click", function(){
	window.location.reload(true);
})


