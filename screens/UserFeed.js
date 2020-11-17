import React from 'react';

import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import InstaPost from './InstaPost';

import GetFriendPostsRequest from '../network/getFriendPosts';
import User from '../models/User';

const UserFeed = () => {
  // const feedPostIds = ['870'];
  const [feedPostIds, updatePostIds] = React.useState(['870']);

  React.useEffect(() => {
    new GetFriendPostsRequest()
      .fetchPosts(User.getNickName())
      .then((response) => {
        if (
          response &&
          response.status &&
          response.body &&
          response.body.ids &&
          response.body.ids.length > 0
        ) {
          updatePostIds([...response.body.ids]);
        }
      });
  }, []);

  const renderItem = ({item}) => <InstaPost key={item} postId={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={feedPostIds}
        renderItem={renderItem}
        keyExtractor={(item) => String(item)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default UserFeed;
