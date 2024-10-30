export default class Airport {
  constructor(name, code) {
    this._name = name;
    thise._code = code;
  }

  toString() {
    return '[object ${this._code}]';
  }
}
