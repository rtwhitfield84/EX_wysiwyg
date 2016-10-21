var textArea = document.getElementById("textArea");
var bioCards = document.getElementById("peopleBox"); 
var i =1;
var className;
var newCards;

 
  famousPeople.forEach(function(currentPerson) {
    // determine odd or even stylings
        if (i % 2) {
      className = "card1";
    } else {
      className = "card2";
    }

        //create new cards
        newCards = document.createElement("div");
        newCards.setAttribute("id", "card" + i);
        newCards.setAttribute("class", className);
        newCards.innerHTML =
    	   "<img class = 'pics' src='" + currentPerson.image + "''>" +   
         "<h2>" + currentPerson.title + "</h2>" +
         "<h4>" + currentPerson.name + "</h4>" +
         "<div class='bio'><p>" + currentPerson.bio + "</p><p></p></div>" +
         "<h5>" + "Birth: " + currentPerson.lifespan.birth + "</h5>" +
         "<h5>" + "Death: "+ currentPerson.lifespan.death + "</h5>";
         bioCards.appendChild(newCards);

                 //add event listeners
                 var selectedCard = document.getElementById("card" + i);
                 selectedCard.addEventListener("click", function(event) {
                  this.classList.toggle("border");
                  textArea.focus();
                  var newNEW = selectedCard.childNodes[3].childNodes[1];
                  textArea.addEventListener("keyup", function (event) {
                  newNEW.innerHTML = event.target.value;
                 if (event.keyCode === 13) {
                  textArea.value = '';
                }
            }); 
      
        });
    i++; 
});



 




























































