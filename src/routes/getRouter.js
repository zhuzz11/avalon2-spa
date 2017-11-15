
var avalon = require('avalon2')
require('../mmRouter.js')

avalon.router.add("/aaa", function(param) {
	require.ensure([], function() {
		var init = require("./aaa");
		init();
	});
})


avalon.router.add("/bbb", function(param) {
	require.ensure([], function() {
		var init = require("./bbb/bbb.js");
		init();
	});
})


avalon.router.add("/ccc", function(param) {
	require.ensure([], function() {
		var init = require("./ccc/ccc.js");
		init();
	});
})