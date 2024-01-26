import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Home = () => {
  return (
    <View style={styles.container} >
   <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#0f172a',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Home;
