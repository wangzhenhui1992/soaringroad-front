const url = require('url');
module.exports = [
  {
    url: /\/api\/v1\/article\/id\/\d/,
    method: 'get',
    res: function (req, res, callback) {
      let paths = url.parse(req.url).pathname.split('\/')
      const id = paths[paths.length-1];
      setTimeout(function () {
        callback(null, {
          status: 202,
          headers: { 'Content-type': 'text/json' },
          body: JSON.stringify({
            id: id ,
            title: 'TestArticle',
            author:'wzh',
            time: '2018/02/02 10:30',
            content:'## Test',
            category:'AWS',
            tags:['AWS','Test','Angular']
          })
        });
      }, 200);
    }
  }
];
