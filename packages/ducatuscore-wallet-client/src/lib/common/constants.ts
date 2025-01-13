'use strict';
import * as CWC from '@ducatus/ducatuscore-crypto';

export const Constants = {
  SCRIPT_TYPES: {
    P2SH: 'P2SH',
    P2PKH: 'P2PKH',
    P2WPKH: 'P2WPKH',
    P2WSH: 'P2WSH'
  },
  // not used, since Credentials 2.0
  DERIVATION_STRATEGIES: {
    BIP44: 'BIP44',
    BIP45: 'BIP45',
    BIP48: 'BIP48'
  },
  PATHS: {
    SINGLE_ADDRESS: 'm/0/0',
    REQUEST_KEY: "m/1'/0",
    //  TXPROPOSAL_KEY: "m/1'/1",
    REQUEST_KEY_AUTH: 'm/2' // relative to BASE
  },
  BIP45_SHARED_INDEX: 0x80000000 - 1,

  DUCATUSCORE_SUPPORTED_COINS: [
    'btc',
    'bch',
    'eth',
    'duc',
    'ducx',
    'xrp',
    'usdc',
    'matic',
    'usdp',
    'pax', // backwards compatibility
    'gusd',
    'busd',
    'dai',
    'wbtc',
    'shib',
    'ape',
    'euroc',
    'usdt',
    'jamasy',
    'nuyasa',
    'sunoba',
    'dscmed',
    'pog1',
    'wde',
    'mdxb',
    'g.o.l.d.',
    'jwan',
    'tkf',
    'AA+',
    'QMN',
    'mpe',
    'balisol',
    'x-gen',
    'bnb'
  ],

  DUCATUSCORE_SUPPORTED_ETH_ERC20: [
    'usdc',
    'pax',
    'gusd',
    'busd',
    'dai',
    'wbtc',
    'shib',
    'ape',
    'euroc',
    'usdt',
    'matic',
    'bnb'
  ],
  DUCATUSCORE_SUPPORTED_DUCX_ERC20: [
    'jamasy',
    'nuyasa',
    'sunoba',
    'dscmed',
    'pog1',
    'wde',
    'mdxb',
    'g.o.l.d.',
    'jwan',
    'tkf',
    'AA+',
    'QMN',
    'mpe',
    'balisol',
    'x-gen'
  ],

  CHAINS: ['btc', 'bch', 'eth', 'duc', 'ducx', 'xrp', 'bnb'],
  UTXO_CHAINS: ['btc', 'bch', 'duc'],
  EVM_CHAINS: ['eth', 'ducx', 'bnb'],
  ETH_TOKEN_OPTS: CWC.Constants.ETH_TOKEN_OPTS,
  DUCX_TOKEN_OPTS: CWC.Constants.DUCX_TOKEN_OPTS,
  BNB_TOKEN_OPTS: CWC.Constants.BNB_TOKEN_OPTS,
  UNITS: CWC.Constants.UNITS,
  EVM_CHAINSUFFIXMAP: {
    eth: 'e',
    ducx: 'd',
    bnb: 'b'
  },
  BTC_URL: 'https://api.bitcore.io',
  MAX_MAIN_ADDRESS_GAP: 20,
};
