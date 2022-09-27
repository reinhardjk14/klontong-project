import React, {useEffect, useState} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchItems, fetchItemsSuccess} from '../store/action';
import ItemCard from '../components/ItemCard';
import {FlatList} from 'react-native-gesture-handler';
import FooterLoader from '../components/FooterLoader';
import AddButton from '../components/AddButton';

const ItemsPage = () => {
  const dispatch = useDispatch();
  const listItems = useSelector(state => state.items);

  const renderItem = ({item}) => {
    return <ItemCard snack={item} />;
  };

  useEffect(() => {
    dispatch(fetchItems(`http://localhost:3000/klontong`))
      .then(response => {
        dispatch(fetchItemsSuccess(response.data));
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <View>
      <StatusBar />
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Klontong Shop</Text>
        <AddButton />
        <FlatList
          data={listItems}
          renderItem={renderItem}
          numColumns={2}
          onEndReachedThreshold={0}
          keyExtractor={item => item.id}
          ListFooterComponent={FooterLoader}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 15,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default ItemsPage;
