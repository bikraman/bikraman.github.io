function setFocusToSection(event){

	if(event.keyCode === 13){
		event.preventDefault();

		document.getElementById("writingPad").focus();
		
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
	var s = document.getElementById("writingPad").innerText;
	var wordCountP = document.getElementById("wordCount");

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

window.onload = function(){


	countWords();

	document.getElementById("writingPad").focus();

	document.getElementById("title").addEventListener('keydown', function(event){

		setFocusToSection(event);

	});

	document.getElementById("writingPad").addEventListener('keydown',function(event){

		countWords();
		consumeDisruptiveKeyEvents(event);

	});

	document.getElementById("writingPad").addEventListener('contextmenu', function(event){

		event.preventDefault();

	});


	document.getElementById("writingPad").addEventListener('mousedown', function(event){


		event.preventDefault();

		document.getElementById("writingPad").focus();

		
	});

	document.getElementById("save").addEventListener("click", function(){
    
    	var text = document.getElementById("writingPad").innerText;
    	var filename = document.getElementById("title").innerText;
    
    	download(filename, text);
    	

    	document.getElementById("writingPad").focus();
	}, false);

}




