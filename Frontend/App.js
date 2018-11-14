import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View, Button, Alert, StatusBar, Platform } from 'react-native';
import { createStore } from 'redux';
import {SwitchNav} from './router/appRouter';
import {Styles} from './styles/componentstyle.js';
import rootReducer from './reducer/';

const store = createStore(rootReducer);

export default class App extends React.Component {
  render() {
    console.log(StatusBar.currentHeight + " Oh my god");
    return (
      <Provider store={store}>
        <View style={{ flex: 1, marginTop: (Platform.OS === 'ios') ? 20 : 0 }}>
          <SwitchNav/>
        </View>
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
