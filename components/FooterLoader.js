import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

const FooterLoader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
});

export default FooterLoader;
