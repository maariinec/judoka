  // get user
  function getUserData(){

  // get user name
  var name = document.getElementById("validationServer05").value;

  //get user gender
  if (document.getElementById("H").checked == true){
  	var gender = document.getElementById("H").value;
  } else {
  	gender = document.getElementById("F").value;
  }

  // get user age
  var age = document.getElementById("validationServer06").value;

  // get user weight
  var  weight= document.getElementById("validationServer07").value;


  alert("Bonjour "+ name + "\n" + " votre genre est " + gender + " et vous etes dans la tranche d'âge des "+ age + " et votre poids est "+ weight);

 }	


  








