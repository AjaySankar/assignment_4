// import RequestStates from '../utils/requestStateEnums';
import Urls from './urls';
import RequestBase from './requestBase';

export default class LoginRequest extends RequestBase {
  login(email, password) {
    return fetch(`${Urls.login}?email=${email}&password=${password}`)
      .then((response) => response.json())
      .then((json) => super.onValue(json))
      .catch(super.onError);
  }
}
