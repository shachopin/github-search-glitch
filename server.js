var express = require('express');
var app = express();
const port = process.env.PORT || 3000

app.use(express.static('app'));

app.listen(port, function () {
  console.log('Your app is listening on port ' + port);
});
