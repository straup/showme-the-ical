function smi_ical_parse(data){
	icalParser.parseIcal(data);
	return icalParser.ical;
}
