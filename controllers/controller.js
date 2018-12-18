const http = require('http');

exports.getUrl = (req, res, url) => {
  http.get(url);


  console.log('in get url');
  res.write('HI');
  res.end();
};
