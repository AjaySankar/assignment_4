import Urls from './urls';
import RequestBase from './requestBase';

export default class RegisterRequest extends RequestBase {
  register(firstname, lastname, nickname, email, password) {
    const registrationData = {
      firstname,
      lastname,
      nickname,
      email,
      password,
    };

    return fetch(Urls.register, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registrationData),
    })
      .then((response) => response.json())
      .then((json) => super.onValue(json))
      .catch(super.onError);
  }
}
