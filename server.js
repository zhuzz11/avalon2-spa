const express = require('express');

const app = express();

app.get('/api/ccc', function(req, res) {
  res.send(require('./src/mock/ccc.js').text);
});

// Serve the files on port 3000.
const port = 3009;
app.listen(port, function () {
  console.log('Mock server app listening on port '+ port +  '!\n');
});