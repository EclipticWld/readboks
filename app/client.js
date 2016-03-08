const http = require('http');
const xml2js = require('xml2js');

// TODO check key
const options = {
  host: 'www.goodreads.com',
  hostname: 'www.goodreads.com',
  path: `/review/list?v=2&id=53482783&key=`
};

const getRequest = http.request(options, (res) => {
    var tmp = [];
    var parserXml = new xml2js.Parser();
    res.setEncoding('utf8');

    res.on('data', (chunk) => {
      tmp.push(chunk);
    });

    res.on('end', () => {
      const bodyResponse = tmp.join();
      parserXml.parseString(bodyResponse);
    });

    parserXml.on('end', (result) => {
      console.log(result);
    });
}).end();

