const fetch = require('node-fetch');
const parseXmlString = require('xml2js').parseString;

module.exports = {

  getUserItemList: function() {
    return fetch(`http://www.goodreads.com/review/list?v=2&id=53482783&key=K2fnaRF8GZHJ1mXyYRfaQ`)
      .then((response) => {
        return response.text();
      })
      .then((body) => {
        parseXmlString(body, (err, result) => {
          console.log(result);
        });
      })
      .catch((err) => {
        console.log('Error ', err);
      });
  }

};

