/* Singleton class for User*/

class User {
  constructor() {
    this._firstname = '';
    this._lastname = '';
    this._password = '';
    this._email = '';
    this._nickname = '';
    if (!User.instance) {
      User.instance = this;
    }
    return User.instance;
  }

  updateProfile(nickname, email, password, firstname = '', lastname = '') {
    this._firstname = firstname;
    this._lastname = lastname;
    this._nickname = nickname;
    this._password = password;
    this._email = email;
  }

  getEmail() {
    return this._email;
  }

  getPassword() {
    return this._password;
  }

  getFirstName() {
    return this._firstname;
  }

  getLastName() {
    return this._lastname;
  }

  getFullName() {
    return `${this._firstname} ${this._lastname}`;
  }

  getNickName() {
    return this._nickname;
  }

  getUserCredentials() {
    return {
      email: this._email,
      password: this._password,
    };
  }
}

export default new User();
