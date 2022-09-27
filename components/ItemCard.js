import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';

const ItemCard = ({snack}) => {
  const navigation = useNavigation();
  let itemPoster = snack.image;

  const tapToDetails = Gesture.Tap().onStart(() => {
    navigation.navigate('DetailPage', {
      id: snack.id,
    });
    // navigation.navigate('Detail');
  });

  return (
    <View style={styles.perItem}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 12,
          marginTop: 5,
        }}>
        {snack.name}
      </Text>
      <GestureDetector gesture={tapToDetails}>
        <TouchableOpacity>
          <Image style={styles.image} source={{uri: `${itemPoster}`}} />
        </TouchableOpacity>
      </GestureDetector>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 170,
    height: 240,
  },
  perItem: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ItemCard;
