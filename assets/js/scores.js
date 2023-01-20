function displayHighscores() {
    // either get scores from localstorage OR assign an empty array to highscores
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    
    // sort highscores by score property in descending order
    highscores.sort(function(a, b) {
      return b.score - a.score;
    });
  
    highscores.forEach(function(score) {
      // create a new li tag for each of the highscore values
      var newLiTag = document.createElement("li");    
      newLiTag.textContent = score.score + " - " + score.initials;
      
      // displays the highscores to page
      var olEl = document.getElementById("highscores");
      olEl.appendChild(newLiTag);
    });
  }
  
  // empties the local storage for highscores and refreshes (reloads) the page
  function clearHighscores() {
    localStorage.removeItem("highscores");
    location.reload();
  }
  
  //onclick acts a an event listener on the 'clear Highscores button that calls 
  //the clearHighScores function on click
  document.getElementById("clear").onclick = clearHighscores;
  
  // Makes the function execute when page loads (calls the function);
  displayHighscores();