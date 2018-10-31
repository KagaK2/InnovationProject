import React from 'react';
import { StyleSheet, Text, View, Button, Alert, StatusBar, Platform } from 'react-native';
import {SwitchNav} from './router/appRouter';
import {Styles} from './styles/componentstyle.js';
export default class App extends React.Component {
  render() {
    console.log(StatusBar.currentHeight + " Oh my god");
    return (
      <View style={{ flex: 1, marginTop: (Platform.OS === 'ios') ? 20 : 0 }}>
        <SwitchNav/>
      </View>
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
