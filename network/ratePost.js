import Urls from './urls';
import RequestBase from './requestBase';
import User from '../models/User';

export default class RatePostRequest extends RequestBase {
  ratePost(postId, rating) {
    const postData = {
      ...User.getUserCredentials(),
      ...{
        rating: rating,
        'post-id': postId,
      },
    };
    return fetch(Urls.ratePost, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((json) => super.onValue(json))
      .catch(super.onError);
  }
}
