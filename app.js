const http = require('http');
const { getUrl } = require('./controllers/controller');

const httpserver = http.createServer((req, res) => {
  const { url, method } = req;
  res.setHeader('Content-Type', 'text/json');
  if (method === 'GET') {
    if (url === '/api/url_checker') {
      const urlToCheck = 'https://broken-links-api.herokuapp.com';
      getUrl(req, res, urlToCheck);
    }
  }
});

module.exports = httpserver;
