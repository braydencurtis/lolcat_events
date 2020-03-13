var lolcatButtonJS = document.getElementById("lolcatButton");

var lolcatImageJS = document.getElementById("lolcatImage");

var image = "https://cdn.theatlantic.com/static/mt/assets/science/lolcat-crocs.jpg";

var changeImage = function () {
	lolcatImageJS.src= image;
};

lolcatButtonJS.addEventListener("click", changeImage);