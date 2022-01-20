class LibProvider {
  libs = {
    BTC: {
      lib: require('bitcore-lib'),
      p2p: require('bitcore-p2p')
    },
    DUC: {
      lib: require('@ducatus/ducatus-core-lib-rev'),
      p2p: require('@ducatus/ducatus-core-p2p-rev')
    }
  };

  register(chain: string, lib: string, p2p: string) {
    this.libs[chain] = { lib: require(lib), p2p: require(p2p) };
  }

  get(chain) {
    return this.libs[chain];
  }
}

export const Libs = new LibProvider();
