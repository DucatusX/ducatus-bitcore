import { DucatuscoreLib, DucatuscoreLibCash } from '@ducatus/ducatuscore-crypto';
import _ from 'lodash';
import { IChain } from '..';
import { BtcChain } from '../btc';
const config = require('../../../config');

const Errors = require('../../errors/errordefinitions');

export class BchChain extends BtcChain implements IChain {
  constructor() {
    super(DucatuscoreLibCash);
    this.sizeEstimationMargin = config.bch?.sizeEstimationMargin ?? 0.01;
    this.inputSizeEstimationMargin = config.bch?.inputSizeEstimationMargin ?? 2;
  }
  getSizeSafetyMargin(opts: any): number {
    return 0;
  }

  getInputSizeSafetyMargin(opts: any): number {
    return 0;
  }

  validateAddress(wallet, inaddr, opts) {
    const A = DucatuscoreLibCash.Address;
    let addr: {
      network?: string;
      toString?: (cashAddr: boolean) => string;
    } = {};
    try {
      addr = new A(inaddr);
    } catch (ex) {
      throw Errors.INVALID_ADDRESS;
    }
    if (addr.network.toString() != wallet.network) {
      throw Errors.INCORRECT_ADDRESS_NETWORK;
    }
    if (!opts.noCashAddr) {
      if (addr.toString(true) != inaddr) throw Errors.ONLY_CASHADDR;
    }
    return;
  }
}
