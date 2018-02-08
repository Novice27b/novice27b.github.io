var base = charset.length;

function shorten(url) {
	var id = parseInt(url.match(/\/([0-9]+)\//)[1]);
	var shorturl = "http://😸.tk/";
	var extension = "";
	while (id) {
		var digit = id % base;
		extension = charset[digit] + extension;
		id = Math.floor(id / base);
	}
	return shorturl + extension;
}

function expand(url) {
	var id = 0;
	for (var i = 0; i < url.length; i++) {
		id *= base;
		id += charset.indexOf(url[i]);
	}
	return "https://scratch.mit.edu/projects/" + id.toString() + "/";
}
