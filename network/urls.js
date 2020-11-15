const QueryBaseURL = 'https://bismarck.sdsu.edu/api/instapost-query';
const UploadBaseURL = 'https://bismarck.sdsu.edu/api/instapost-upload';

export default class Urls {
  static register = UploadBaseURL + '/newuser';
  static addPost = UploadBaseURL + '/post';
  static uploadImage = UploadBaseURL + '/image';
  static getPost = QueryBaseURL + '/post';
  static getImage = QueryBaseURL + '/image';
  static ratePost = UploadBaseURL + '/rating';
  static commentPost = UploadBaseURL + '/comment';
  static getNickNames = QueryBaseURL + '/nicknames';
  static getFriendPostIds = QueryBaseURL + '/nickname-post-ids';
  static getHashTagCount = QueryBaseURL + '/hashtag-count';
  static getHashTagsBatch = QueryBaseURL + '/hashtags-batch';
  static getHashTagPostIds = QueryBaseURL + '/hashtags-post-ids';
  static login = QueryBaseURL + '/authenticate';
  static ping = 'https://bismarck.sdsu.edu/api/ping';
  static checkIfNickNamesExists = QueryBaseURL + '/nickname-exists';
  static checkIfEmailExists = QueryBaseURL + '/email-exists';
}
