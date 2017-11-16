var home = require("../../index.js");

var img = require('./a.png');
var img2 = require('./b.jpg');
var a = require('./tab1.html');

var avalon = require("avalon2");

avalon.define({
	$id: 'aaa',
	content: '我是按需加载里面的内容',
	get:function(){
		alert("123");
	}
});

module.exports = function(){
	home.main = a;
};