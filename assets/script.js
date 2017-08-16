window.onload = function(){
	var submitButton = document.getElementById("submitButton");
  	submitButton.addEventListener("click", buttonFunc());
	
	function buttonFunc(){
		var animal = document.getElementById("animal").value;
		var verb = document.getElementById("verb").value;
		var adj = document.getElementById("adj").value;
		var adv = document.getElementById("adv").value;
		var output = "The "+adj+" "+animal+" "+verb+" very "+adv+", in fact, thanks to that the "+adj+" "+animal+" gets all the popcorn that an animal can ever wish for. And we all love popcorn!!";
	    
	    document.getElementById("madLibsHeader").style.display = "block";
	    document.getElementById("output").innerHTML = output;
  	}
}

//Reset::::
var resetButton = document.querySelector(".play-again");
//Reset function
resetButton.addEventListener("click", function(){
	clearFields();
	clearoutput();
})
//clear input fields
function clearFields() {
    document.getElementById("animal").value = "";
	document.getElementById("verb").value = "";
	document.getElementById("adj").value = "";
	document.getElementById("adv").value = "";
}
// clear output
function clearoutput() {
	document.getElementById("output").innerHTML = "";
}

