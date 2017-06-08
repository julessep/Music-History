// ************* Attempt and fail #1 **************
// var songs = [];

// songs[songs.length] = "Legs > by Z*Z Top on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// for(var i = 0; i <= songs.length; i++) {
	// *****I could not figure out how to not get an error message for my bracket*****
// var songs[i] = songs[i].replace (/@/g, ''); 

// *************** Attempt and fail #2 *************** Not even sure what I was trying to do here??????
// songList = getElementById("main")
// const songList = {
// 	makeSongString: function() {
// 		return `${song.title} by ${song.artist} on the album ${song.album}`
// 	}
// }
// let song1 = Object.create(songList);
// song.title = "Legs"
// song.artist = "ZZ Top"
// song.album = "Eliminator"
// (song1)

// ********** Attempt #3 ************* I think I did the requirements of the assignment? 
var songs = [
	{title: "Legs" ,
	artist: "ZZ Top  " ,
	album: "Eliminator  ",
	genre: "Rock"
	},
	{title: "The Logical Song  ",
	artist: "Supertramp  " ,
	album: "Breakfast in America  ",
	genre: "Rock"
	},
	{title: "Another Brick in the Wall" ,
	artist: "Pink Floyd " ,
	album: "The Wall ",
	genre: "Rock"
	},
	{title: "Welcome to the Jungle" ,
	artist: "Guns & Roses " ,
	album: "Appetite for Destruction " ,
	genre: "Rock"
	},
	{title: "Ironic",
	artist: "Morisette " ,
	album: "Jagged Little Pill ",
	genre: "Rock"
	}
]

var songList = document.getElementById("main") 
	for (var i = 0; i < songs.length; i++) {
		songList.innerHTML += "<h1>" + songs[i].title + "</h1>"+
		"<p>" + songs[i].artist + " | " + songs[i].album + " | " + songs[i].genre + "</p>"
}

















