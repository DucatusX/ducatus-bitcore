import _ from 'lodash';
const config = require('../../config');

module.exports = {
  name: 'Ducatus',
  url: config.producationMode
    ? 'https://rates.ducatuscoins.com/api/v1/rates/'
    : 'https://ducexpl.rocknblock.io/api/v1/rates/',
  parseFn(raw) {
    const rates = _.compact(
      _.map(raw, d => {
        if (!d.code || !d.rate) return null;
        return {
          code: d.code,
          value: +d.rate
        };
      })
    );
    return rates;
  }
};
