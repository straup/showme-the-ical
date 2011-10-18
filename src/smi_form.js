function smi_form_handler(){

	var url = document.getElementById("load_url");
	var file = document.getElementById("load_file");

	var skip_old = document.getElementById("skip_old");
	skip_old = skip_old.checked;

	var something = 0;

	// fix me...WTF

	/*
	if (url.value){

		something = 1;

		if (url.value.indexOf("http") == 0){
			off_load_url(url.value, skip_old);
			url.value = '';
		}

		else {
			alert("Invalid URL!");
		}
	}
	*/

	if ((has_filereader) && (file.files.length)){
		something = 1;
		smi_load_files(file.files, skip_old);
		file.value = '';
	}

	if (something == 0){
		alert("Unable to find anything to show!");
	}
}

function smi_form_toggle(){

	var f = document.getElementById("smi_form");
	f.style.display = (close) ? 'none' : 'block';	
}
