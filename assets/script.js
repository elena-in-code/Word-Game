

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

