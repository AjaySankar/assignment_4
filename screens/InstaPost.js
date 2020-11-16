import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';

import RatingStars from './RatingStars';
import PostImage from './PostImage';
import Comments from './Comments';

const InstaPost = () => {
  return (
    <Card containerStyle={styles.container}>
      <PostImage />
      <PostDescription />
      <HashTags />
      <RatingStars />
      <Comments />
    </Card>
  );
};

const HashTags = () => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
      {['#abc', '#def', '#ghi', '#jkl'].map((hashtag, index) => (
        <Text key={index} style={{color: '#4267B2'}}>
          {hashtag}
        </Text>
      ))}
    </View>
  );
};

const PostDescription = () => {
  return (
    <Text style={{marginVertical: 10, textAlign: 'center'}}>
      This is the long post description.
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default InstaPost;
