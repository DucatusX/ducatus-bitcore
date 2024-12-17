const testConfig = require('./ducatuscore-test.config.json');

testConfig.ducatuscoreNode.chains.BTC.regtest.trustedPeers[0].host = 'bitcoin';
testConfig.ducatuscoreNode.chains.BTC.regtest.rpc.host = 'bitcoin';

testConfig.ducatuscoreNode.chains.ETH.regtest.trustedPeers[0].host = 'geth';
testConfig.ducatuscoreNode.chains.ETH.regtest.trustedPeers[0].port = 30303;
testConfig.ducatuscoreNode.chains.ETH.regtest.providers[0].host = 'erigon';
testConfig.ducatuscoreNode.chains.ETH.regtest.providers[0].port = 8545;
testConfig.ducatuscoreNode.chains.ETH.regtest.providers[1].host = 'geth';
testConfig.ducatuscoreNode.chains.ETH.regtest.providers[1].port = 8546;

testConfig.ducatuscoreNode.chains.DUCX.regtest.trustedPeers[0].host = 'geth';
testConfig.ducatuscoreNode.chains.DUCX.regtest.trustedPeers[0].port = 30303;
testConfig.ducatuscoreNode.chains.DUCX.regtest.providers[0].host = 'geth';
testConfig.ducatuscoreNode.chains.DUCX.regtest.providers[0].port = 8546;

testConfig.ducatuscoreNode.chains.XRP.testnet.provider.host = 'rippled';
testConfig.ducatuscoreNode.chains.XRP.testnet.provider.port = 6006;
testConfig.ducatuscoreNode.chains.XRP.testnet.provider.dataHost = 'rippled';

testConfig.ducatuscoreNode.chains.BNB.regtest.trustedPeers[0].host = 'geth';
testConfig.ducatuscoreNode.chains.BNB.regtest.trustedPeers[0].port = 30303;
testConfig.ducatuscoreNode.chains.BNB.regtest.providers[0].host = 'geth';
testConfig.ducatuscoreNode.chains.BNB.regtest.providers[0].port = 8546;

module.exports = testConfig;
