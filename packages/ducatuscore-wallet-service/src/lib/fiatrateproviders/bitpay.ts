import { Rate } from '.';
import { Defaults } from '../common/defaults';

export default {
  name: 'BitPay',
  url: 'https://bitpay.com/api/rates/',
  parseFn(res, coin) {
    const rates: Rate[] = [];

    const COIN_RATE = res.find(rate => rate.code === coin)?.rate

    for (const fiat of Defaults.FIAT_CURRENCIES) {
      const FIAT_RATE = res.find(rate => rate.code === fiat.code)?.rate
      if (!FIAT_RATE || !COIN_RATE) continue
      rates.push({
        code: fiat.code,
        value: Number(FIAT_RATE/COIN_RATE)
      });
    }

    return rates;
  }
};
