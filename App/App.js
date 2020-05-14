import React from 'react';
import {Provider} from 'react-redux';
import {StyleProvider, View, Text} from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import AppRouter from './Navigation/AppRouter';
import Store from './Redux/Store';

function App() {
  return (
    <Provider store={Store}>
      <StyleProvider style={getTheme(material)}>
        <AppRouter />
      </StyleProvider>
    </Provider>
  );
}

export default App;
