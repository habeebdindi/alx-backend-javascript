/* eslint-disable */

import util from 'util';

export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  getInstanceProperties() {
    const properties = {};
    for (const key of Object.keys(this)) {
	    properties[key] = this[key];
    }
    return properties;
  }

  [util.inspect.custom]() {
    // return `${this.constructor.name} [${this._code}] ${this.getInstanceProperties()}`;
    return `${this.constructor.name} [${this._code}] { _name: '${this._name}', _code: '${this._code}' }`;
  }

  toString() {
    return `[${typeof this} ${this._code}]`;
  }
}
