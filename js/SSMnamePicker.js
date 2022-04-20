////////////////////////////////////////////////////////////////////////////////////////
// AUTHOR: Malyn Mawby
// DATE: Feb 2022                                                             //
// DESCRIPTION: Simple random name picker with names pre-loaded already      //
////////////////////////////////////////////////////////////////////////////////////////


let namesList = ["Alanna","Ameer","Amira","Brydan","Chay","Christoffer","Emily", "Frankie","Jason", "Leila","Luchia","Malyn","Maria", "Olena","Paul B", "Paul K","Ricardo", "Toni"];
let currentWinner;
let pickedNames = [];

function displayList() {
    let content = "<h2>List of Names</h2>";
    content +="<ul>";
    for (var i = 0; i < namesList.length; i++) {
        content += "<li>";
        content += namesList[i];
        content += "</li>";
    }
    content +="</ul>";
    let output = document.getElementById('result');
    output.innerHTML = content;

}
function pickOne() {
      let min = 0;
      let max = namesList.length;
      let otpt = document.getElementById('picked');
      if (max > 0){
      	let winnerIndex = Math.floor(Math.random() * (max - min)) + min;

    	  currentWinner = namesList[winnerIndex];
        if (currentWinner == "Luchia"){
          otpt.innerHTML = currentWinner + ", Welcome!"
        }
        else {
          otpt.innerHTML = currentWinner;
        }
      	pickedNames.push(namesList[winnerIndex]);
      	removeName(winnerIndex);
      	showAllpicked();
      	displayList();
  	}
  	else {
  		otpt.innerHTML = "All done!";
  	}
}


function removeName(winnerIndex) {
    namesList.splice(winnerIndex, 1);
}

function showAllpicked() {
    let content = "<h2>Thou hast spoken</h2>";
    content += "<ul>";
    for (let i = 0; i < pickedNames.length; i++) {
      content += "<li>";
      content += pickedNames[i];
      content += "</li>";
    }
    content += "</ul>";
    content += "<br><br><p><a onClick=\"location.reload()\" class=\"btn btn-info\" href=\"#\" role=\"button\">Reset</a></p>";
    let otpt = document.getElementById('pickedlist');
    otpt.innerHTML = content;

}

function cueConfetti(){
  var element = document.getElementById("mainBody");
  element.classList.toggle("confetti26");
  var mygif = document.getElementById("friyay");

  mygif.classList.toggle("friyay");
}
