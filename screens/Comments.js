import React from 'react';

// There is some require
import ListItem from 'react-native-paper/lib/commonjs/components/List/ListItem';
import Divider from 'react-native-paper/lib/commonjs/components/Divider';
import ListAccordion from 'react-native-paper/lib/commonjs/components/List/ListAccordion';

import {View, Text, StyleSheet, TextInput} from 'react-native';

const Comments = () => {
  const comments = ['Comments 1', 'Comments 2', 'Comments 3'];
  return (
    <>
      <TextInput
        placeholder="Add a comment"
        style={{
          paddingHorizontal: 15,
          marginTop: 50,
          borderBottomWidth: 0.5,
          marginHorizontal: 10,
        }}
      />
      <ListAccordion title="Load for comments">
        <ListItem title="First item" />
        <Divider />
        <ListItem title="Second item" />
      </ListAccordion>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
});

export default Comments;
