

window.onload = function(){
  var submitButton = document.getElementById("submitButton");
  submitButton.addEventListener("click", buttonFunc);

  function buttonFunc(){
    var animal = document.getElementById("animal").value;
 	var verb = document.getElementById("verb").value;
 	var adj = document.getElementById("adj").value;
 	var adv = document.getElementById("adv").value;
    var output = "The "+adj+" "+animal+" "+verb+" very "+adv+".";
		
	document.getElementById("madLibsHeader").style.display = "block";
    document.getElementById("Output").innerHTML = output;

  }
}

//Reset feature::WIP::
var resetButton = document.querySelector(".play-again");

//Reset button
resetButton.addEventListener("click", function(){
	clearFields();
})

function clearFields() {
    document.getElementById("Output").value = ""; //this one it is not working
    document.getElementById("animal").value = "";
	document.getElementById("verb").value = "";
	document.getElementById("adj").value = "";
	document.getElementById("adv").value = "";
}