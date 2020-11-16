import React from 'react';

// There is some require circular dependency warning with react-native-paper. So importing components seperately
import ListItem from 'react-native-paper/lib/commonjs/components/List/ListItem';
import Divider from 'react-native-paper/lib/commonjs/components/Divider';
import ListAccordion from 'react-native-paper/lib/commonjs/components/List/ListAccordion';
import TextInput from '../node_modules/react-native-paper/lib/commonjs/components/TextInput/TextInput';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {StyleSheet} from 'react-native';

const Comments = () => {
  const comments = ['Comments 1', 'Comments 2', 'Comments 3'];
  return (
    <>
      <TextInput
        mode="outlined"
        label="Add a comment"
        right={
          <TextInput.Icon name="comment-plus-outline" onPress={() => {}} />
        }
      />
      <ListAccordion
        title="Load for comments"
        titleStyle={styles.accordianTitleStyle}
        left={() => <MaterialCommunityIcons name="comment" size={15} />}>
        {comments.map((comment, index) => (
          <SingleComment key={index} comment={comment} />
        ))}
      </ListAccordion>
    </>
  );
};

const SingleComment = ({comment}) => {
  return (
    <>
      <ListItem title={comment} />
      <Divider />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
  accordianTitleStyle: {
    color: '#3b5998',
  },
});

export default Comments;
