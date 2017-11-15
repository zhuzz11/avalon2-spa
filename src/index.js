var avalon = require('avalon2')
require('./mmRouter.js')


var vm = avalon.define({
	$id: 'test',
	main: '',
	aaa: "第一页的内容",
	bbb: "第二页的内容",
	ccc: "第三页的内容",
	go: function() {
		avalon.router.navigate('/bbb', 2)
	}
})

avalon.router.add("/pager-{count:\\d+}", function(count) {
	//返回新的hash用于设置地址栏
	return '/aaa?pager-' + count
})


var routeUrl = ["aaa", "bbb", "ccc"];

/*routeUrl.forEach(function(item,i,array){
	avalon.router.add("/"+item, function(param) {
		require.ensure([],function(){
                var init = require("./routes/"+item+".js");
                init();
            });
	});
})*/
avalon.router.add("/:tab", function(param) {
	if (param === routeUrl[0]) {
		require.ensure([], function() {
			var init = require("./routes/aaa.js");
			init();
		});
	} else if (param === "bbb") {
		require.ensure([], function() {
			var init = require("./routes/bbb.js");
			init();
		});
	} else if (param === "ccc") {
		require.ensure([], function() {
			var init = require("./routes/ccc.js");
			init();
		});
	}
})



avalon.history.start({
	root: "/mmRouter",
	hashPrefix: ""
})

var hash = location.hash.replace(/#!?/, '')
avalon.router.navigate(hash || '/bbb', 2) //默认打开

avalon.scan(document.body)

fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(json => {
		console.log('We retrieved some data! AND we\'re confident it will work on a variety of browser distributions.')
		console.log(json)
	})
	.catch(error => console.error('Something went wrong when fetching this data: ', error))

module.exports = vm;