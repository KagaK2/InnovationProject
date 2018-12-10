import React from 'react';
import {ScrollView, View, Text, TouchableOpacity, Image} from 'react-native';
import {Styles} from '../styles/componentstyle.js';
import { Ionicons } from '@expo/vector-icons';
//Suppposedly to be the chat part/ discussion part of the app
export default class DiscussionScreen extends React.Component {
  static navigationOptions = { header: null };
  _redirect = () => {
    console.log('oof');
    this.props.navigation.navigate(
      {
        routeName: 'OtherUserScreen',
        params: {}
      }
    );
  }
  render(){
    return(
      <ScrollView style={Styles.colorBody}>
        <View style={Styles.appBody}>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={Styles.headline}>Discussion</Text>
              <Text style={Styles.largeBody}>Discussion is not implemented right now.</Text>
            </View>
            <TouchableOpacity
              style={Styles.profileIconContainer}
              onPress={() => this.props.navigation.navigate('Profile')}
            >
              <Image
                style={Styles.profileIcon}
                source={{uri: 'https://i.imgur.com/M0ks2ba.png'}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
