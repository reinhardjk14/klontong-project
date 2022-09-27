import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
// import {useNavigation} from '@react-navigation/core';
// import {GestureDetector, Gesture} from 'react-native-gesture-handler';

export default function ItemCard({snack}) {
  // const navigation = useNavigation();/
  let itemPoster = snack.image;

  // const tapToDetails = Gesture.Tap().onStart(() => {
  //   navigation.navigate('Detail', {
  //     id: item.id,
  //   });
  // });

  return (
    <View style={styles.perItem}>
      {/* <GestureDetector gesture={tapToDetails}> */}
        <TouchableOpacity>
          <Image style={styles.image} source={{uri: `${itemPoster}`}} />
        </TouchableOpacity>
      {/* </GestureDetector> */}

      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 12,
          marginTop: 5,
        }}>
        {snack.name}
      </Text>
    </View>
  );
}

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
