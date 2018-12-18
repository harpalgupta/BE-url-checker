const https = require('https');

exports.getUrl = (req, res, url) => {
  https.get(url, (output) => {
    let rawData = '';
    output.on('data', (data) => {
      rawData += data;
    });
    output.on('end', () => {
      const rawDataArray = rawData.split('\n');
      //   let matches = '';
      //   matches += rawData.match(/<a\s/);
      console.log(rawDataArray);
      const newArray = rawDataArray.reduce((acc, entry) => {
        if (entry.match(/<a/)) {
          return acc;
        }
      }, []);
      console.log(newArray);
    });
  });
  console.log('in get url');
  res.write('HI');
  res.end();
};
