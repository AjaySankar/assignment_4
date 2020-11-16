import React from 'react';
import Post from './post';

export default React.createContext({
  Post: Post.getEmptyPost(),
  addComment: (comment) => {},
  ratePost: (rating) => {},
});
