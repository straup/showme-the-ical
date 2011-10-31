var has_filereader = 1;
var has_localstorage = 1;

function smi_init(){

	// just use modernizr? doesn't appear to have checks
	// for the File API so it's not clear what the benefit
	// would be (20111031/straup)

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

	// localstorage (caching)

	has_localstorage = (typeof(localStorage) !== "undefined") ? 1 : 0;	

	if (! has_localstorage){

		var input  = document.getElementById("cache_local");
		input.setAttribute("disabled", "disabled");

		var label = document.getElementById("cache_local_label");
		label.innerHTML = "caching is disabled (by your browser)";

		// sudo make me a class
		label.setAttribute("style", "font-style:italic;background-color:transparent;border:none;");

	}

	// put me in a separate library?

	if (has_localstorage){

		var calendar_list = localStorage.getItem('smi_calendars');		
		var calendars = {};

		if (calendar_list){
			calendar_list = JSON.parse(calendars);
			calendar_count = calendar_list.length;

			for (var i=0; i < calendar_count; i++){
				var calendar_name = calendar_list[i];
				var calendar_ics = localStorage.getItem(calendar_name);
				calendars[ calendar_name ] = calendar_ics;
			}
		}
	}

}
