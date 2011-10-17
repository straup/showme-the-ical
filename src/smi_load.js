function smi_load_local(id){
	// sudo write me (do local storage hoohah)
	// var data = smi_ical_parse(local_storage_result);
	// smi_events_display(data.events);
}

function smi_load_url(url){
	// sudo write me (do XHR request)
	// var data = smi_ical_parse(xhr_result);
	// smi_events_display(data.events);

}

function smi_load_files(files){

	var count_files = files.length;

	for (var i=0; i < count_files; i++){
		smi_load_file(files[i]);
	}
}

function smi_load_file(file){

	var file_reader;

	try {
		file_reader = new FileReader();
	}

	catch(e){
		return;
	}

	file_reader.onloadend = function(e){

		var target = e.target;

		if (target.error){
			alert('your browser failed to load that document, with the following error: ' + target.error.code);
			return;
		}

		try {
			var data = smi_ical_parse(target.result);
			smi_events_display(data.events);
		}

		catch(e) {
			alert('failed to parse your file (' + file.name + '), the error was: ' + e);
			return;
		}
	};

	file_reader.readAsBinaryString(file);
	return;
}
