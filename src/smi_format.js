function smi_format_event(e){

	// return an HTML node

	var start = e.dtstart.value;
	var end = e.dtend.value;

	var start_ymd = smi_format_dt(start);
	var end_ymd = smi_format_dt(end);

	var uid = e.uid.value;
	var loc = e.location.value;
	var desc = e.description.value;
	var summ = e.summary.value;

	var anchor = document.createElement('a');
	anchor.setAttribute('name', uid);

	var what = document.createElement('div');
	what.setAttribute('class', 'smi_event_what');
	what.appendChild(document.createTextNode(summ + ' ' + desc));

	var when = document.createElement('div');
	when.setAttribute('class', 'smi_event_when');
	when.appendChild(document.createTextNode(start_ymd + ' - ' + end_ymd));

	var where = document.createElement('div');
	where.setAttribute('class', 'smi_event_where');
	where.appendChild(document.createTextNode(loc));

	var div = document.createElement('div');
	div.setAttribute('class', 'smi_event');
	div.setAttribute('id', uid);

	div.appendChild(anchor);
	div.appendChild(what);
	div.appendChild(when);
	div.appendChild(where);

	return div;
}

function smi_format_dt(dt){

	var y = dt.substring(0, 4);
	var m = dt.substring(4, 6);
	var d = dt.substring(6, 8);

	var ymd = y + "-" + m + "-" + d;

	// to do: account for HMS

	return ymd;
}
