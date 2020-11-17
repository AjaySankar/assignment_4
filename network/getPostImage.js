import Urls from './urls';
import RequestBase from './requestBase';

export default class GetImageRequest extends RequestBase {
  fetchImage(imageId) {
    return fetch(`${Urls.getImage}?id=${imageId}`)
      .then((response) => response.json())
      .then((json) => super.onValue(json))
      .catch(super.onError);
  }
}
