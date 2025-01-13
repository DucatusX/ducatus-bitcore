import { EthValidation } from '../eth';
const utils = require('web3-utils');

export class BnbValidation extends EthValidation {
  validateUri(addressUri: string): boolean {
    if (!addressUri) {
      return false;
    }
    const address = this.extractAddress(addressUri);
    const bnbPrefix = /bnb/i.exec(addressUri);
    return !!bnbPrefix && utils.isAddress(address);
  }

  protected extractAddress(data) {
    const prefix = /^[a-z]+:/i;
    const params = /([\?\&](value|gas|gasPrice|gasLimit)=(\d+([\,\.]\d+)?))+/i;
    return data.replace(prefix, '').replace(params, '');
  }
}
