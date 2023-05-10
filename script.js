function getSounds() {
  const buttons = document.querySelectorAll("button");
  const sounds = [];

  buttons.forEach(function(button) {
    const onclickAttribute = button.getAttribute("onclick");
    const parameter = onclickAttribute.replace("playSound('", "").replace("')", "");
    sounds.push(parameter);
  });

  return sounds;
}

function playSound(sound) {
  const sounds = getSounds();
  if (sound == "random"){
    let a = Math.floor(Math.random() * sounds.length);
    sound = sounds[a];
    console.log("Random Sound: " + sounds[a]);
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
