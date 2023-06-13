import request = require('request');
import { LoggifyClass } from './decorators/Loggify';
type CallbackType = (err: any, data?: any) => any;

@LoggifyClass
export class RPC {
  constructor(
    private username: string,
    private password: string,
    private host: string,
    private port: number | string
  ) {}

  public callMethod(method: string, params: any, callback: CallbackType, walletName?: string) {
    request(
      {
        method: 'POST',
        url: `http://${this.username}:${this.password}@${this.host}:${this.port}${walletName ? '/wallet/' + walletName : ''}`,
        body: {
          jsonrpc: '1.0',
          id: Date.now(),
          method,
          params
        },
        json: true
      },
      (err, res) => {
        if (err) {
          return callback(err);
        } else if (res) {
          if (res.body) {
            if (res.body.error) {
              return callback(res.body.error);
            } else if (res.body.result) {
              return callback(null, res.body && res.body.result);
            } else {
              return callback({ msg: 'No error or body found', body: res.body });
            }
          }
        } else {
          return callback('No response or error returned by rpc call');
        }
      }
    );
  }

  async asyncCall<T>(method: string, params: any[], walletName?: string) {
    return new Promise<T>((resolve, reject) => {
      this.callMethod(method, params, (err, data) => {
        if (err) {
          return reject(err);
        }
        return resolve(data);
      }, walletName);
    });
  }

  async getChainTip() {
    const tips = await this.asyncCall<{
      height: number;
      hash: string;
      branchlen: number;
      status: string;
    }>('getchaintips', []);
    return tips[0];
  }

  getBestBlockHash() {
    return this.asyncCall('getbestblockhash', []);
  }

  getBlockHeight() {
    return this.asyncCall('getblockcount', []);
  }

  getBlock(hash: string, verbose: boolean) {
    return this.asyncCall('getblock', [hash, verbose]);
  }

  getBlockHash(height: number) {
    return this.asyncCall<string>('getblockhash', [height]);
  }

  async getBlockByHeight(height: number) {
    const hash = await this.getBlockHash(height);
    return this.getBlock(hash, false);
  }

  getTransaction(txid: string) {
    return this.asyncCall('getrawtransaction', [txid, true]);
  }

  sendTransaction(rawTx: string | Array<string>) {
    const txs = typeof rawTx === 'string' ? [rawTx] : rawTx;
    return this.asyncCall<string>('sendrawtransaction', txs);
  }

  decodeScript(hex: string) {
    return this.asyncCall('decodescript', [hex]);
  }

  getWalletAddresses(account: string) {
    return this.asyncCall('getaddressesbyaccount', [account]);
  }

  async getEstimateSmartFee(target: number) {
    return this.asyncCall('estimatesmartfee', [target]);
  }

  async getEstimateFee() {
    return this.asyncCall('estimatefee', []);
  }
}

@LoggifyClass
export class AsyncRPC {
  private rpc: RPC;
  private walletName: string | undefined;

  constructor(username: string, password: string, host: string, port: number | string) {
    this.rpc = new RPC(username, password, host, port);
    this.walletName = process.env.LOADED_MOCHA_OPTS === 'true' ? 'MOCHA_DUCATUSCORE_WALLET' : undefined;
  }

  async call<T = any>(method: string, params: any[], walletName?: string): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.rpc.callMethod(method, params, (err, data) => {
        if (err) {
          return reject(err);
        }
        return resolve(data);
      }, walletName);
    });
  }

  async setWallet(walletName?: string) {
    if (!this.walletName && !walletName) {
      throw new Error('No wallet name specified');
    }
    if (this.walletName == walletName) {
      return;
    }

    walletName = walletName || this.walletName;
    try {
      await this.call('createwallet', [walletName]);
    } catch (err: any) {
      if (!err.message.includes('already exists')) {
        throw err;
      }
    }
    this.walletName = walletName;
  }

  async block(hash: string): Promise<RPCBlock<string>> {
    return (await this.call('getblock', [hash, 1])) as RPCBlock<string>;
  }

  async verbose_block(hash: string): Promise<RPCBlock<RPCTransaction>> {
    return (await this.call('getblock', [hash, 2])) as RPCBlock<RPCTransaction>;
  }

  async getnewaddress(account: string): Promise<string> {
    await this.setWallet();
    return (await this.call('getnewaddress', [account], this.walletName)) as string;
  }

  async signrawtx(txs: string): Promise<any> {
    await this.setWallet();

    try {
      const ret = await this.call('signrawtransactionwithwallet', [txs], this.walletName);
      return ret;
    } catch (e: any) {
      if (!e.code || e.code != -32601) return Promise.reject(e);
      return await this.call('signrawtransaction', [txs]);
    }
  }

  async transaction(txid: string, block?: string): Promise<RPCTransaction> {
    const args = [txid, true];
    if (block) {
      args.push(block);
    }
    return (await this.call('getrawtransaction', args)) as RPCTransaction;
  }

  async sendtoaddress(address: string, value: string | number) {
    await this.setWallet();
    return this.call<string>('sendtoaddress', [address, value], this.walletName);
  }
}

export interface RPCBlock<T> {
  hash: string;
  confirmations: number;
  size: number;
  strippedsize: number;
  weight: number;
  height: number;
  version: number;
  versionHex: string;
  merkleroot: string;
  tx: T[];
  time: number;
  mediantime: number;
  nonce: number;
  bits: string;
  difficulty: number;
  chainwork: string;
  previousblockhash: string;
  nextblockhash: string;
}

export interface RPCTransaction {
  in_active_chain: boolean;
  hex: string;
  txid: string;
  hash: string;
  strippedsize: number;
  size: number;
  vsize: number;
  version: number;
  locktime: number;
  vin: {
    txid: string;
    vout: number;
    scriptSig: {
      asm: string;
      hex: string;
    };
    sequence: number;
    txinwitness: string[];
  }[];
  vout: {
    value: number;
    n: number;
    scriptPubKey: {
      asm: string;
      hex: string;
      reqSigs: number;
      type: string;
      addresses: string[];
    };
  }[];
  blockhash: string;
  confirmations: number;
  time: number;
  blocktime: number;
}
