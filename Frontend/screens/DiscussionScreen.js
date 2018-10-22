import React from 'react';
import {View, Text} from 'react-native';



export default class DiscussionScreen extends React.Component {
  static navigationOptions = { header: null };
  render(){
    return(
      <View>
        <Text> This is the Discussion screen </Text>
      </View>
    );
  }
}
