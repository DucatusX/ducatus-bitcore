import _ from 'lodash';
const Common = require('../common');
const Defaults = Common.Defaults;
const config = require('../../config');

const prodApi = config.sr_ip_addr === Defaults.IP_SERVER_ADDR;

module.exports = {
  name: 'Ducatus',
  url: prodApi ? 'https://rates.ducatuscoins.com/api/v1/rates/' : 'https://ducexpl.rocknblock.io/api/v1/rates/',
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
