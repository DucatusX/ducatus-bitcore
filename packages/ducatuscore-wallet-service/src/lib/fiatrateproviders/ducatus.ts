import { Rate } from ".";

export default {
  name: 'Ducatus',
  url: 'https://rates.ducatuscoins.com/api/v1/rates/',
  parseFn(res, coin) {
    const rates: Rate[] = []

    for (const code in res[coin]) {
      rates.push({
        code,
        value: Number(res[coin][code])
      });
    }

    return rates;
  }
};
