/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ItemsPage from './screens/ItemsPage';

const App = () => {

  return (
    <Provider store={store}>
      <ItemsPage />
    </Provider>
  );
};

export default App;
