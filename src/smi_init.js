var has_filereader = 1;

function smi_init(){

	// safari doesn't support FileReader at all but Chrome does
	// except for the part where it won't read local files...wtf

	has_filereader = (typeof(FileReader) !== "undefined") ? 1 : 0;

	if (navigator.userAgent.toLowerCase().indexOf('chrome') !== -1){
		has_filereader = 0;
	}

	if (! has_filereader){
		var input = document.getElementById("load_file");
		input.setAttribute("type", "text");
		input.setAttribute("value", "disabled (by your browser)");
		input.setAttribute("disabled", "disabled");
		// sudo make me a class
		input.setAttribute("style", "font-style:italic;background-color:transparent;border:none;");
	}
}
