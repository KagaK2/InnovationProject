import React from 'react';
import {View, Text, Button, AsyncStorage, Image} from 'react-native';




export default class ProfileScreen extends React.Component {
  static navigationOptions = { header: null };
  render(){
    return(
      <View>
      <View id='userLogo'>
        <Text> This is the Profile screen </Text>
        <Image source={{uri: this.props.profile}} style={{height: 80, width: 80}}/>
        <Text> This is the username </Text>
        <Text> This is the user title </Text>
      </View>

      <View id='accSettings'>
        <Text> Account Settings </Text>
        <View id='interest'>
          <Text> Interests </Text>
        </View>
        <View id='generalSettings'>
          <Text> General Settings </Text>
        </View>
      </View>
      <Button onPress={this.signOut.bind(this)} title='Sign out' />
      </View>
    );
  }
  async signOut() {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  }
}
