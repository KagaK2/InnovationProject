import React from 'react';
import { connect } from 'react-redux';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {saveNameAndPic} from '../actions/index.js';

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);

  }
  componentDidMount(){
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    if (userToken) {
      try{
          const response = await fetch(
            `https://graph.facebook.com/me?access_token=${userToken}&fields=id,name,picture.type(large)`);
          const finalRes = await response.json();
          this.props.saveNameAndPic(finalRes.name, finalRes.picture.data.url, finalRes.id);
        }
      catch(err){
        console.log(err);
      }
  }
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    // Change the MainApp to Auth for the facebook login
    this.props.navigation.navigate(userToken ? 'MainApp' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const mapDispatchToProps = {
  saveNameAndPic
};

export default connect(null, mapDispatchToProps)(AuthLoadingScreen);
