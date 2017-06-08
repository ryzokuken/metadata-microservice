var express = require('express');
var multer  = require('multer')

var app = express();
var upload = multer({ dest: 'uploads/' })

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post("/file", upload.single('mdfile'), (req, res) => {
  res.json({ size: req.file.size });
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
