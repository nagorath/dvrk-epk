const express = require('express');
const path = require('path');
const secure = require('ssl-express-www');

const app = express();
app.use(secure);

app.use(express.static(__dirname + '/dist/bzaat-epk'));

app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+'/dist/bzaat-epk/index.html'));
});

app.listen(process.env.PORT || 8080);