import Urls from './urls';
import RequestBase from './requestBase';
import User from '../models/User';

export default class CommentPostRequest extends RequestBase {
  commentOnPost(postId, newComment) {
    const postData = {
      ...User.getUserCredentials(),
      ...{
        comment: newComment,
        'post-id': postId,
      },
    };
    return fetch(Urls.commentPost, {
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
