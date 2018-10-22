import React from 'react';
import { StyleSheet, Text, View, Button, Alert, AsyncStorage } from 'react-native';

export default class LogInScreen extends React.Component{
  static navigationOptions = { header: null };
  render(){
    return(
    <View>
      <Text> Đây là logo app </Text>
      <Text> Đây là tên App </Text>
      <View>
      <Button onPress={this.logIn.bind(this)} title='Connect with Facebook'/>
      </View>
    </View>
  );
  }
  async logIn(props) {
  const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('289051638371156', {
      permissions: ['public_profile'],
    });
  if (type === 'success') {
    // Get the user's name using Facebook's Graph API
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${token}`);
    AsyncStorage.setItem('userToken', token);
    this.props.navigation.navigate('Home');
    }
  }
}
