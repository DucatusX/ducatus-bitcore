module.exports = {
  BTC: {
    lib: require('bitcore-lib'),
    p2p: require('bitcore-p2p')
  },
  BCH: {
    lib: require('bitcore-lib-cash'),
    p2p: require('bitcore-p2p-cash')
  },
  DUC: {
    lib: require('@ducatus/ducatus-core-lib-rev'),
    p2p: require('@ducatus/ducatus-core-p2p-rev')
  }
};
