/* eslint-disable */

export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
	    throw new Error('Code must be a string');
    } else if (typeof name !== 'string') {
	    throw new Error('Name must be a string');
    }
    this._name = name;
    this._code = code;
  }

  set code(value) {
    if (typeof value !== 'string') {
	    throw new Error('Code must be a string');
    }
    this._code = value;
  }

  get code() {
    return this._code;
  }

  set name(value) {
    if (typeof value !== 'string') {
	    throw new Error('Name must be a string');
    }
    this._name = value;
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
