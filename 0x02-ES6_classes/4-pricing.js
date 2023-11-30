/* eslint-disable */

import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  set amount(value) {
    this._amount = value;
  }

  get amount() {
    return this._amount;
  }

  set currency(value) {
    this._currency = value;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return Math.floor(amount * conversionRate);
  }
}
