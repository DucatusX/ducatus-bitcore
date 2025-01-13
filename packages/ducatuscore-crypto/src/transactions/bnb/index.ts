import { ETHTxProvider } from '../eth';
export class BNBTxProvider extends ETHTxProvider {
  getChainId(network: string) {
    let chainId = 56;
    switch (network) {
      case 'testnet':
        chainId = 97;
        break;
      case 'regtest':
        chainId = 1337;
        break;
      default:
        chainId = 56;
        break;
    }
    return chainId;
  }
}
