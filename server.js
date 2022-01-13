
const express = require('express');
const app = express();


app.use(express.static('./dist/testapp'));

app.get( '/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/testapp/'}
  );
  });

  app.listen(process.env.PORT || 8080);
