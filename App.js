/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import store from './store';
import ItemsPage from './screens/ItemsPage';
import ItemDetailPage from './screens/ItemDetailPage';
import AddNewPage from './screens/AddNewPage';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={ItemsPage} />
          <Stack.Screen name="DetailPage" component={ItemDetailPage} />
          <Stack.Screen name="AddNewPage" component={AddNewPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
