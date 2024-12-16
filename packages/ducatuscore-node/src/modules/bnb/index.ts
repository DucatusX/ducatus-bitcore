import { BaseModule } from '..';
import { EVMVerificationPeer } from '../,,/../../providers/chain-state/evm/p2p/EVMVerificationPeer';
import { BnbRoutes } from './api/bnb-routes';
import { BNBStateProvider } from './api/csp';
import { BnbP2pWorker } from './p2p/p2p';

export default class BNBModule extends BaseModule {
  constructor(services: BaseModule['ducatuscoreServices']) {
    super(services);
    services.P2P.register('BNB', BnbP2pWorker);
    services.CSP.registerService('BNB', new BNBStateProvider());
    services.Api.app.use(BnbRoutes);
    services.Verification.register('BNB', EVMVerificationPeer);
  }
}
