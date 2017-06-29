var addLink = document.getElementById("link-add");
var addView = document.getElementById("add-view");
var homeView = document.getElementById("wrapper");
var listView = document.getElementById("list-view");
var outputSongs = document.getElementById("output-songs")


function showMusicAdd(){
	addLink.addEventListener("click", function() {
	  homeView.classList.add("hidden");
	  addView.classList.remove("hidden");
	});

}

showMusicAdd()

function addSongsArr(){
	
}