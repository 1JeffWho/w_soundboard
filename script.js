const songs = ['bimmm', 'bistdudeppert', 'danke', 'eini do', 'haha', 'haudieiniafoch', 'hunger', 'i fixed it', 'schnuppie', 'schwupp', 'so_patrick_lets_go', 'und eini', 'watsi watsi', 'woaahh', 'woopsie woopsie', 'schnopsn programmierer', 'der hot a pech kobt', 'warten hat ein ende', 'kein problem', 'hee des is jo der woerny', 'ausi', 'des ist jetzt des schnopsn', 'der tauscht do korten aus', 'a fehler'];

function playSound(sound) {
    if (sound == "random"){
        let a = Math.floor(Math.random() * songs.length);
        sound = songs[a];
        console.log(songs[a]);
    }

    var audio = new Audio('/sounds/' + sound + '.mp3');
    audio.play();
}
