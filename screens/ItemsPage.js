import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchItems} from '../store/action';
import ItemCard from '../components/ItemCard';
import {FlatList} from 'react-native-gesture-handler';

const ItemsPage = () => {
  const dispatch = useDispatch();
  const listItems = useSelector(state => state.items);

  const renderItem = ({item}) => {
    return <ItemCard snack={item} />;
  };

  useEffect(() => {
    dispatch(
      fetchItems(
        'https://crudcrud.com/api/0a6871cdb24d4398b73d59f95ee18a61/klontong',
      ),
    );
  }, []);

  return (
    <View style={[styles.backgroundColor]}>
      <StatusBar />
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Klontong Shop</Text>
        <FlatList
          data={listItems}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default ItemsPage;
