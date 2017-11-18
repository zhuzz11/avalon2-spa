require('es6-promise').polyfill();

var avalon = require('avalon2');
require('./lib/mmRouter.js');

require('./index.css');

avalon.config({
	debug: false
});

var vm = avalon.define({
	$id: 'test',
	main: '',
	aaa: "第1页的内容",
	bbb: "第22344页的内容",
	ccc: "第三页的内容",
	go: function() {
		avalon.router.navigate('/bbb', 2);
	}
});
var a =1;

avalon.router.add("/pager-{count:\\d+}", function(count) {
	//返回新的hash用于设置地址栏
	return '/aaa?pager-' + count;
});

//路由配置文件，按需加载
var router = require("./routes/getRouter.js");

avalon.history.start({
	root: "/mmRouter",
	hashPrefix: ""
});

var hash = location.hash.replace(/#!?/, '');
avalon.router.navigate(hash || '/aaa', 2); //默认打开

avalon.scan(document.body);

module.exports = vm;