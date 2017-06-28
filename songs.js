let request = new XMLHttpRequest();

function executeIfXHRFails(){
	console.log("fail")
}

function executeFileLoaded() {
	console.log("event.target", event.target);
	var data = JSON.parse(event.target.responseText);
	console.log("data", data);
	outputSongs(data.songs);
}

request.addEventListener("load", executeFileLoaded);
request.addEventListener("error", executeIfXHRFails);

request.open("GET", "songs.json");
request.send();

// var songList = document.getElementById("main") 
// 	for (var i = 0; i < songs.length; i++) {
// 		songList.innerHTML += "<h1>" + songs[i].title + "</h1>"+
// 		"<p>" + songs[i].artist + " | " + songs[i].album + " | " + songs[i].genre + "</p>"
// }

function outputSongs (songsArr){
	let songList = document.getElementById("main");
    songsArr.forEach(function(song){
		songList.innerHTML += `<h1>  ${song.title} </h1>
		<p> ${song.artist} | ${song.album} | ${song.genre} </p>`
	});
}












