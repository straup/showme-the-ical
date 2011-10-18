function smi_events_display(events, skip_old){

	var now = new Date();
	var count = events.length;

	var list = document.createElement('ul');

	for (var i=0; i < count; i++){

		var e = events[i];
		
		var start = e.dtstart.value;

		var start_y = start.substring(0, 4);
		var start_m = start.substring(4, 6);
		var start_d = start.substring(6, 8);

		var start_ymd = start_y + "-" + start_m + "-" + start_d;

		var start_ts = Date.parse(start_ymd);

		if ((skip_old) && (start_ts < now.getTime())){
			continue;
		}

		var html = smi_format_event(e);

		var item = document.createElement('li');

		item.appendChild(html);
		list.appendChild(item);
	}

	if (list.children.length){

		var events = document.getElementById('smi_events');
		events.appendChild(list);
		smi_form_toggle();
	}

}
