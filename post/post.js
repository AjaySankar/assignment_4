/*
 * Question class to hold current state of a question displayed in the quiz card
 */

export default class Post {
  constructor(id, image, text, hashtags, comments) {
    this._id = id || 0;
    this._image = image || 0;
    this._description = text || '';
    this._hashTags = hashtags || [];
    this._comments = comments || [];
  }

  static getEmptyPost() {
    return new Post(0, 0, 'default', ['#abc'], ['Comment 1']);
  }

  get id() {
    return Number.parseInt(this._id, 10);
  }

  get image() {
    return Number.parseInt(this._image, 10);
  }

  get description() {
    return this._description;
  }

  get hashTags() {
    return this._hashTags;
  }

  get comments() {
    return this._comments;
  }
}
