/* eslint-disable */

import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
	    throw new Error('Amount must be an number');
    } else if (!(currency instanceof Currency)) {
	    throw new Error('Currency must be a currency');
    }
    this._amount = amount;
    this._currency = currency;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new Error('Amount must be an number');
    }
    this._amount = value;
  }

  get amount() {
    return this._amount;
  }

  set currency(value) {
    if (!(currency instanceof Currency)) {
      throw new Error('Currency must be an currency');
    }
    this._currency = value;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return Math.floor(this._amount * conversionRate);
  }
}
