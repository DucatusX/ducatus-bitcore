import { BchValidation } from './bch';
import { BtcValidation } from './btc';
import { DucValidation } from './duc';
import { DucxValidation } from './ducx';
import { EthValidation } from './eth';
import { XrpValidation } from './xrp';
import { BnbValidation } from './bnb';

export interface IValidation {
  validateAddress(network: string, address: string): boolean;
  validateUri(addressUri: string): boolean;
}

const validation: { [chain: string]: IValidation } = {
  BTC: new BtcValidation(),
  BCH: new BchValidation(),
  ETH: new EthValidation(),
  XRP: new XrpValidation(),
  DUC: new DucValidation(),
  DUCX: new DucxValidation(),
  BNB: new BnbValidation()
};

export class ValidationProxy {
  get(chain) {
    const normalizedChain = chain.toUpperCase();
    return validation[normalizedChain];
  }

  validateAddress(chain, network, address) {
    return this.get(chain).validateAddress(network, address);
  }

  validateUri(chain, addressUri) {
    return this.get(chain).validateUri(addressUri);
  }
}

export default new ValidationProxy();
