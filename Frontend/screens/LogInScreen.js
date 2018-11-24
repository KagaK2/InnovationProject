import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Alert, AsyncStorage, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import {Styles} from '../styles/componentstyle.js';
import {LoginScreenStyle} from '../styles/screenstyle.js';
import {saveNameAndPic} from '../actions/index.js';
import * as FBcon from '../scripts/FBcon.js';
class LogInScreen extends React.Component{
  static navigationOptions = { header: null };
  render(){
    return(
    <ImageBackground source={{uri: 'https://i.imgur.com/Q70lyeL.jpg'}} style={{flex:1, height:'100%', width:'100%'}}>
    <View style={LoginScreenStyle.page}>
      <View>
        <Image source={{uri: 'https://i.imgur.com/wcJMsY2.jpg'}} style={LoginScreenStyle.image}/>
      </View>
      <View style={{alignItems : 'flex-start', justifyContent: 'flex-end'}}>
      <TouchableOpacity onPress={this.logIn.bind(this)} style={[Styles.bigJumbo,LoginScreenStyle.loginButton]}><Text style={[Styles.buttonText,{color: '#FFFFFF'}]}>Connect With Facebook</Text></TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
  );
  }
  async logIn(props) {
  const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('289051638371156', {
      permissions: ['public_profile'],
    });
  if (type === 'success') {
    // Get the user's name using Facebook's Graph API
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${token}&fields=id,name,picture.type(large)`);
    AsyncStorage.setItem('userToken', token);
    const finalRes = await response.json();
    await FBcon.checkUser(finalRes.id, finalRes.name, finalRes.picture.data.url);
    this.props.saveNameAndPic(finalRes.name, finalRes.picture.data.url, finalRes.id);
    this.props.navigation.navigate('Home');
    }
  }
}

const mapDispatchToProps = {
  saveNameAndPic
};

export default connect(null, mapDispatchToProps)(LogInScreen);
