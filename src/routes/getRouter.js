module.exports = function(param){
	switch(param){
		case "aaa":
			require("./aaa.js");
			break;
		case "bbb":
			require("./bbb.js");
			break;
		case "ccc":
			require("./ccc.js");
			break;
	}

}