const express = require('express');
const path = require("path");
const app = express();

app.get('/api/*', function(req, res, next) {
	console.log("request url:" + req.url);
	next();
});

app.get('/api/ccc', function(req, res) {
	res.send(require('./src/mock/ccc.js').text);
});

// Serve the files on port 3000.

// 设置静态文件 目录
app.use(express.static(path.join(__dirname, 'dist')));

const port = 80;
app.listen(port, function() {
	console.log('Mock server app listening on port ' + port + '!\n');
});