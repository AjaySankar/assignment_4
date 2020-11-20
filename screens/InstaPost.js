import React from 'react';

import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {Card} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import GetPostHandle from '../network/getPost';

import RatingStars from './RatingStars';
import PostImage from './PostImage';
import Comments from './Comments';
import Post from '../post/post';
import RequestStates from '../utils/requestStateEnums';

const InstaPost = ({postId}) => {
  const [postState, initPost] = React.useState(Post.getEmptyPost());
  const [requestState, updatePostRequestState] = React.useState(
    RequestStates.RequestInProcess,
  );

  React.useEffect(() => {
    let isSubscribed = true;
    new GetPostHandle().fetchPost(postId).then((response) => {
      if (
        response &&
        response.status &&
        response.status &&
        response.body &&
        response.body.post
      ) {
        const {
          body: {
            post: {id, image, text, hashtags, comments},
          },
        } = response;
        if (isSubscribed) {
          initPost(new Post(id, image, text, hashtags, comments));
          updatePostRequestState(RequestStates.RequestSuccessful);
        }
      } else {
        if (isSubscribed) {
          updatePostRequestState(RequestStates.RequestFailed);
        }
      }
    });
    return () => (isSubscribed = false);
  }, []);

  let postComponent;
  switch (requestState) {
    case RequestStates.RequestInProcess:
      postComponent = (
        <Card containerStyle={styles.container}>
          <ActivityIndicator size="large" color="#3b5998" />
        </Card>
      );
      break;
    case RequestStates.RequestSuccessful:
      postComponent = (
        <Card containerStyle={styles.container}>
          <Text>{postState.id}</Text>
          <PostImage imageId={postState.image} />
          <PostDescription description={postState.description} />
          <HashTags hashtags={postState.hashTags} />
          <RatingStars postId={postState.id} />
          <Comments postId={postState.id} comments={postState.comments} />
        </Card>
      );
      break;
    case RequestStates.RequestFailed:
      postComponent = (
        <Card containerStyle={styles.container}>
          <View style={styles.failedPostContainer}>
            <MaterialCommunityIcons
              name="image-broken-variant"
              color="crimson"
              size={50}
            />
            <Text
              style={{
                color: 'crimson',
              }}>
              {' '}
              Failed to load post{' '}
            </Text>
          </View>
        </Card>
      );
      break;
  }
  return postComponent;
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
  failedPostContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default InstaPost;
