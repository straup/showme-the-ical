function smi_events_display(events){

	var now = new Date();
	var count = events.length;

	for (var i=0; i < count; i++){

		var e = events[i];
		
		var start = e.dtstart.value;
		var end = e.dtend.value;

		var yyyy = start.substring(0, 4);
		var mm = start.substring(4, 6);
		var dd = start.substring(6, 8);

		var ymd = yyyy + "-" + mm + "-" + dd;

		// var h = dt.substring(9, 11);
		// var m = dt.substring(11, 13);
		// var s = dt.substring(13, 15);
		// var hms = h + ":" + m + ":" + s;

		var iso = ymd;

		var ts = Date.parse(iso);

		if (ts < now.getTime()){
			continue;
		}

		var uid = e.uid.value;
		var loc = e.location.value;

		var pp = prettyPrint(e);

		document.getElementById('smi_events').appendChild(pp);
	}

	smi_form_toggle();
}
