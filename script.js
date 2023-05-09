const songs = ['bimmm', 'bistdudeppert', 'danke', 'eini do', 'haha', 'haudieiniafoch', 'hunger', 'i fixed it', 'schnuppie', 'schwupp', 'so_patrick_lets_go', 'und eini', 'watsi watsi', 'woaahh', 'woopsie woopsie', 'schnopsn programmierer', 'der hot a pech kobt', 'warten hat ein ende', 'kein problem', 'hee des is jo der woerny', 'ausi', 'des ist jetzt des schnopsn', 'der tauscht do korten aus', 'a fehler', 'des is net ohne', 'ihr lacht jetzt net', 'nein', 'tut wos wollts', 'yes', 'no', 'sind de weiblich oder wos is los', 'Der Roboter'];

function playSound(sound) {
    if (sound == "random"){
        let a = Math.floor(Math.random() * songs.length);
        sound = songs[a];
        console.log(songs[a]);
    }

    var audio = new Audio('/sounds/' + sound + '.mp3');
    audio.play();
}

function searchFunction() {
  // Get input value and remove whitespaces and convert to lowercase
  var input = document.getElementById("searchBar").value.replace(/\s+/g, '').toLowerCase();
  // Get all the buttons
  var buttons = document.getElementsByClassName("box")[0].getElementsByTagName("button");
  // Loop through all the buttons and show only those that match the search input
  for (var i = 0; i < buttons.length; i++) {
    var buttonText = buttons[i].innerHTML.replace(/\s+/g, '').toLowerCase();
    if (buttonText.includes(input)) {
      buttons[i].style.display = "";
    } else {
      buttons[i].style.display = "none";
    }
  }
}
