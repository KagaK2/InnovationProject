import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import {SwitchNav} from './router/appRouter';

export default class App extends React.Component {
  render() {
    return (
      <SwitchNav />
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
