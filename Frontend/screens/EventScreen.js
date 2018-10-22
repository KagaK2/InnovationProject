import React from 'react';
import {View, Text, Button} from 'react-native';

export default class EventScreen extends React.Component {
  static navigationOptions = {
    title: 'Your event',
  };
  constructor(props) {
    super(props)
    console.log(props);
    this._goBack = this._goBack.bind(this);
  }
  _goBack(){
    this.props.navigation.navigate('TabNav');
  }
  render(){
    return(
      <View>
        <Button onPress={this._goBack} title="Back"/>
        <Text>This is an event</Text>
      </View>
    );
  }
}
