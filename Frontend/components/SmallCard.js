import React from 'react';
import {View, Text, Image} from 'react-native';

export default class SmallCard extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View>
        <Image source={{ uri: this.props.source}} style={{width:100, height:100}}/>
        <Text>{this.props.date}</Text>
        <Text>{this.props.eventName}</Text>
      </View>
    );
  }
}
