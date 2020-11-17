import Urls from './urls';
import RequestBase from './requestBase';

export default class GetPostRequest extends RequestBase {
  fetchPost(postId) {
    return fetch(`${Urls.getPost}?post-id=${postId}`)
      .then((response) => response.json())
      .then((json) => super.onValue(json))
      .catch(super.onError);
  }
}
