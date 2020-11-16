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

const UserFeed = () => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
    },
    {
      id: '202cb962ac59075b964b07152d234b70',
    },
    {
      id: '250cf8b51c773f3f8dc8b4be867a9a02',
    },
    {
      id: '68053af2923e00204c3ca7c6a3150cf7',
    },
    {
      id: '13f9896df61279c928f19721878fac41',
    },
    {
      id: '0d7de1aca9299fe63f3e0041f02638a3',
    },
  ];

  const renderItem = ({item}) => <InstaPost key={item.id} id={item.id} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
