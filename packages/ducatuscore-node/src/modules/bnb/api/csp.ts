import { BaseEVMStateProvider } from '../../../providers/chain-state/evm/api/csp';

export class BNBStateProvider extends BaseEVMStateProvider {
  constructor() {
    super('BNB');
  }
}

export const BNB = new BNBStateProvider();
