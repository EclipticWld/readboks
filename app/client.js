http = require('http');

const key = '';
const userID = '53482783';

http.get(`http://www.goodreads.com/review/list?v=2&id=${userID}&key=${key}`, (res) => {
  res.setEncoding('utf8');
  console.log(`Got response: ${res.statusCode}`);

  res.on('data', (data) => {
    console.log(data);
  });
}).on('error', (e) => {
  console.log(`Got error: ${e.message}`);
});
