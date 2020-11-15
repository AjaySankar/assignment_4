import RequestStates from '../utils/requestStateEnums';

export default class RequestBase {
  onValue(responseData) {
    let result = {};
    if (responseData['result'] == 'success' || responseData['result'] == true) {
      result = {
        status: true,
        message: 'Successfully registered',
        body: responseData,
      };
    } else {
      result = {
        status: false,
        message: responseData['errors'],
      };
    }
    return result;
  }

  onError(error) {
    return {
      status: false,
      message: `Unsuccessful Request - ${JSON.stringify(
        error.message || 'Network error!!',
      )}`,
    };
  }
}
