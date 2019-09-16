function setFocusToSection(event){

	if(event.keyCode === 13){
		event.preventDefault();

		document.getElementById("writing-pad").focus();
		
	}
}


function consumeDisruptiveKeyEvents(event){

	var kCode = event.keyCode;

	if(kCode == 8){
		event.preventDefault();
	}
	if (kCode == 46){
		event.preventDefault();
	}
	if(event.ctrlKey && (kCode == 65 || kCode == 67 || kCode == 86 )){
		event.preventDefault();
	}
	if(kCode == 45){
		event.preventDefault();
	}
}

function countWords() {
	var s = document.getElementById("writing-pad").innerText;
	var wordCountP = document.getElementById("word-count");

	var noOfWords = s.trim().split(/\s+/).length;

	if(s === ""){
		wordCountP.innerHTML = "0 words";
	}
	else{
		wordCountP.innerHTML = noOfWords + " words";
	}
   
}


function download(filename, text) {
    var element = document.createElement("a");

    text.replace(/\n\s*\n/g, "\n");

    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(filename + "\n \n" + text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function GoInFullscreen(element) {
	if(element.requestFullscreen)
		element.requestFullscreen();
	else if(element.mozRequestFullScreen)
		element.mozRequestFullScreen();
	else if(element.webkitRequestFullscreen)
		element.webkitRequestFullscreen();
	else if(element.msRequestFullscreen)
		element.msRequestFullscreen();
}

window.onload = function(){

	var mouseDown = false;
	var lightMode = false;

	var writingPad = document.getElementById("writing-pad");
	var title = document.getElementById("title");
	var saveLink = document.getElementById("save");
	var fullscreenLink = document.getElementById("fullscreen");
	var changeColorModeLink = document.getElementById("change-color-mode");

	var dropdownButton = document.getElementById("dropdown-button");





	countWords();

	writingPad.focus();

	title.addEventListener('keydown', function(event){

		setFocusToSection(event);

	});

	writingPad.addEventListener('keydown',function(event){

		countWords();
		consumeDisruptiveKeyEvents(event);

	});

	writingPad.addEventListener('contextmenu', function(event){

		event.preventDefault();

	});


	writingPad.addEventListener('mousedown', function(event){


		mouseDown = true;
	
	});

	writingPad.addEventListener('mouseup', function(event){

		mouseDown = false;

	});


	writingPad.addEventListener('mousemove', function(event){

		if(mouseDown){

			console.log("mouse dragged");
			window.getSelection().removeAllRanges();

		}
		
	});

	
	saveLink.addEventListener("click", function(event){
    
    	var text = document.getElementById("writing-pad").innerText;
    	var filename = document.getElementById("title").innerText;
    
    	download(filename, text);
    	
    	document.getElementById("writing-pad").focus();
    	
	}, false);

	fullscreen.addEventListener("click", function(event){

		GoInFullscreen(document.documentElement);

	},false);

	changeColorModeLink.addEventListener("click", function(event){


		if(!lightMode){
			lightMode = true;
			changeColorModeLink.innerHTML = "Dark Mode";
			document.body.style.background = "white";
			document.body.style.color = "black";

			dropdownButton.style.backgroundColor = "white";
			dropdownButton.style.color = "black";


		}
		else{
			lightMode = false;
			changeColorModeLink.innerHTML = "Light Mode";
			document.body.style.background = "black";
			document.body.style.color = "white";

			dropdownButton.style.backgroundColor = "black";
			dropdownButton.style.color = "white";



		}

	},false);

}




