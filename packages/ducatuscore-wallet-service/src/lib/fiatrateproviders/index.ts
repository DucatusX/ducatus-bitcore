import bitpay from './bitpay';
import ducatus from './ducatus';
// import bitstamp from './bitstamp';

export interface Rate {
  code: string
  value: number
}

const Providers = {
  BitPay: bitpay,
  Ducatus: ducatus
  // Bitstamp: bitstamp, // no longer used
};

export default Providers;
