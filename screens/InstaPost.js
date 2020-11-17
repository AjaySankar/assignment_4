import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';

import RatingStars from './RatingStars';
import PostImage from './PostImage';
import Comments from './Comments';
import Post from '../post/post';

const InstaPost = () => {
  const [postState, initPost] = React.useState(Post.getEmptyPost());
  return (
    <Card containerStyle={styles.container}>
      <PostImage imageId={postState.image} />
      <PostDescription description={postState.description} />
      <HashTags hashtags={postState.hashTags} />
      <RatingStars postId={postState.id} />
      <Comments postId={postState.id} comments={postState.comments} />
    </Card>
  );
};

const HashTags = ({hashtags}) => {
  return (
    <View style={styles.hashtags}>
      {hashtags.map((hashtag, index) => (
        <Text key={index} style={{color: '#4267B2'}}>
          {hashtag}
        </Text>
      ))}
    </View>
  );
};

const PostDescription = ({description}) => {
  return <Text style={styles.postDescription}>{description}</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hashtags: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  postDescription: {
    marginVertical: 10,
    textAlign: 'center',
  },
});

export default InstaPost;
