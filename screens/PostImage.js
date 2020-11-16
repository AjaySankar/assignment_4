import React from 'react';

import {Card} from 'react-native-elements';

const PostImage = () => {
  return (
    <Card.Image
      resizeMode="contain"
      source={{
        uri:
          'https://www.tutorialspoint.com/react_native/images/react-native-mini-logo.jpg',
      }}
    />
  );
};

export default PostImage;
