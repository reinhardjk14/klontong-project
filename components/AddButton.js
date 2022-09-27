import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const AddButton = () => {
  const navigation = useNavigation();
  const toAddPage = () => {
    navigation.navigate('AddNewPage');
  };
  
  return (
    <View style={styles.container}>
      <Button onPress={toAddPage} title="Add New" color="#000000" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default AddButton;
