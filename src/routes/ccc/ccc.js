
var home = require("../../index.js");
var b = require('./tab3.html');

var model = avalon.define({
	$id: 'ccc',
	text: '',
	get:function(){
		alert("123");
	}
});

module.exports = function(){
	home.main = b;
	$.get("/api/ccc",function(data){
		model.text = data;
	});
};