export default class Currency {
  // constructor method for obj creation
  constructor(code, name) {
    // verify code
    if (typeof code !== 'string' || code.trim().length === 0) {
      throw new Error('Code must be a non empty string');
    }
    // verify name
    if (typeof name !== 'string' || name.trim().length === 0) {
      throw new Error('Name must be a non empty string');
    }

    this._code = code;
    this._name = name;
  }

  // setters
  get code() {
    return this._code;
  }

  set code(newCode) {
    if (typeof newCode !== 'string' || newCode.trim().length === 0) {
      throw new Error('Code must be a non empty string');
    }
    this._code = newCode;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string' || newName.trim().length === 0) {
      throw new Error('Name must be a non empty string');
    }
    this._name = newName;
  }

  // displays formatted currency type ie: Dollars ($)
  displayFullCurrency() {
    return (`${this._name} (${this._code})`);
  }
}
