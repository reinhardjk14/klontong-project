import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchItemById} from '../store/action';

const ItemDetailPage = ({route}) => {
  const {id} = route.params;
  const dispatch = useDispatch();
  const snack = useSelector(state => state.itemById);

  useEffect(() => {
    dispatch(fetchItemById(`http://localhost:3000/klontong/${id}`));
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.snackImage} source={{uri: snack?.image}} />
      <Text style={styles.snackName}>{snack.name}</Text>
      <Text style={styles.snackCategory}>Category: {snack.categoryName}</Text>
      <Text>{snack.description}</Text>
      <Text>Weight: {snack.weight}gr</Text>
      <Text>Price: Rp. {snack.harga}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 15,
  },
  snackImage: {
    width: 200,
    height: 270,
  },
  snackName: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10
  },
  snackCategory: {
    marginBottom: 10
  }
});

export default ItemDetailPage;
