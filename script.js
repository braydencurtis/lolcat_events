var lolcatButtonJS = document.getElementById("lolcatButton");

var lolcatImageJS = document.getElementById("lolcatImage");

var changeImage = function () {
	lolcatImageJS.src="https://cdn.theatlantic.com/static/mt/assets/science/lolcat-crocs.jpg";
};

lolcatButtonJS.addEventListener("click", changeImage);