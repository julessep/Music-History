var homeLink = document.getElementById("link-home");
var homeView = document.getElementById("wrapper");
var addView = document.getElementById("add-view");

function showHome(){
	homeLink.addEventListener("click", function() {
	  // homeView.classList.add("hidden");
	  addView.classList.add("hidden");
	  // homeView.classList.add("visible");
	  homeView.classList.remove("hidden");
	});
}

showHome()