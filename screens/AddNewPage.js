import React, {useState} from 'react';
import {View, Text, TextInput, Pressable, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {addNewItem} from '../store/action';
import {fetchItems, fetchItemsSuccess} from '../store/action';

const AddNewPage = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [form, setForm] = useState({
    categoryName: '',
    sku: '',
    name: '',
    description: '',
    weight: '',
    width: '',
    length: '',
    height: '',
    image: '',
    harga: '',
  });

  const changeHandler = (text, name) => {
    const getForm = {
      categoryName: form.categoryName,
      name: form.name,
      description: form.description,
      weight: form.weight,
      image: form.image,
      harga: form.harga,
    };
    getForm[name] = text;
    setForm(getForm);
  };

  const submitForm = e => {
    dispatch(addNewItem(form, 'http://localhost:3000/klontong'));
    dispatch(fetchItems(`http://localhost:3000/klontong`))
      .then(response => {
        dispatch(fetchItemsSuccess(response.data));
        navigation.navigate('Home');
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <View>
      <TextInput
        placeholder="Category Name"
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={text => changeHandler(text, 'categoryName')}
        value={form.categoryName}
      />
      <TextInput
        placeholder="Name"
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={text => changeHandler(text, 'name')}
        value={form.name}
      />
      <TextInput
        placeholder="Description"
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={text => changeHandler(text, 'description')}
        value={form.description}
      />
      <TextInput
        placeholder="Weight"
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={text => changeHandler(text, 'weight')}
        value={form.weight}
      />
      <TextInput
        placeholder="Image"
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={text => changeHandler(text, 'image')}
        value={form.image}
      />
      <TextInput
        placeholder="Price"
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={text => changeHandler(text, 'harga')}
        value={form.harga}
      />
      <Pressable onPressOut={e => submitForm(e)}>
        <Text style={styles.button}>Submit</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 13,
    padding: 12,
    width: '90%',
    backgroundColor: '#fff',
    marginBottom: 16,
    marginTop: 16,
    marginLeft: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,

    elevation: 1.5,
  },
  button: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    width: '40%',
    marginTop: 8,
    borderRadius: 5,
    backgroundColor: '#3CCF4E',
    padding: 12,
    marginLeft: 20,
    textAlign: 'center',
  },
});

export default AddNewPage;
