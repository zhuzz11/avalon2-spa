
avalon.router.add("/aaa", function(param) {
	require.ensure([], function() {
		var init = require("./aaa");
		init();
	},"aaa");
})


avalon.router.add("/bbb", function(param) {
	require.ensure([], function() {
		var init = require("./bbb/bbb.js");
		init();
	},"bbb");
})


avalon.router.add("/ccc", function(param) {
	require.ensure([], function() {
		var init = require("./ccc/ccc.js");
		init();
	},"ccc");
})