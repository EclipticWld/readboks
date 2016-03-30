require('es6-promise').polyfill();
require('isomorphic-fetch');
const Q = require('q');
const xml2js = require('xml2js');

function convert2js(input) {
  const deferred = Q.defer();
  const parser = new xml2js.Parser();
  parser.parseString(input, function (err, stdout, stderr) {
    if (err)  {
      return deferred.reject(err);
    }
    return deferred.resolve(stdout);
  });
  return deferred.promise;
}

function callApi() {
  return fetch('http://www.goodreads.com/review/list/?v=2&id=53482783&key=K2fnaRF8GZHJ1mXyYRfaQ')
    .then((response) => {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.text();
    })
    .then((xml) => {
      return convert2js(xml);
    });
}

module.exports = { callApi };
