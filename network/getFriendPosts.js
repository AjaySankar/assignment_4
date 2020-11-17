import Urls from './urls';
import RequestBase from './requestBase';

export default class GetFriendPostsRequest extends RequestBase {
  fetchPosts(nickName) {
    return fetch(`${Urls.getFriendPostIds}?nickname=${nickName}`)
      .then((response) => response.json())
      .then((json) => super.onValue(json))
      .catch(super.onError);
  }
}
