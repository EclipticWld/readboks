const parseXmlString = require('xml2js').parseString;

export function getUserItemList() {
  return fetch('https://www.goodreads.com/review/list', {
    mode: 'no-cors',
    method: 'POST',
    headers: {
      'Content-type': 'application/xml; charset=utf-8'
    },
    body: JSON.stringify({
      v: 2,
      id: 53482783,
      key: 'K2fnaRF8GZHJ1mXyYRfaQ'
    })
  })
    .then((response) => {
      return response.text();
    })
    .then((body) => {
      console.log(body);
      parseXmlString(body, (err, result) => {
        document.write(result);
      });
    })
    .catch((err) => {
      console.log('Error ', err);
    });
}
