import Collapsible from 'react-native-collapsible';
import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const Comments = () => {
  return (
    <Collapsible collapsed={false} align="center" style={styles.container}>
      <View>
        <Text> Comments 1 </Text>
        <Text> Comments 2 </Text>
        <Text> Comments 3 </Text>
      </View>
    </Collapsible>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
});

export default Comments;
