import React from 'react';
import {TouchableWithoutFeedback, View, Text, Image} from 'react-native';

export default class BigCard extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <TouchableWithoutFeedback onPress={this.props.onPress}>
        <View>
        <Text>#{this.props.hashtag}</Text>
        <Text>{this.props.date}</Text>
        <Text>{this.props.eventName}</Text>
        <Image source={{uri: this.props.pic}}  style={{height:200, width: 200}} />
        <Text>{this.props.going} are going</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
