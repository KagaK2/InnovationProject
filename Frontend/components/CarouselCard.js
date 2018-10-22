import React from 'react';
import {View, Text, TouchableWithoutFeedback, Alert, Image} from 'react-native';

export default class CarouselCard extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
      <TouchableWithoutFeedback onPress={this.props.onPress} style={{height:130, width: 200}}>
      <View>
        <View style={{ flex: 2 }}>
          <Image source={{uri: this.props.pic}} style={{flex: 1, width:null, height:null, resizeMode: 'cover'}} />
        </View>
        <View style={{ flex: 1}}>
          <Text>{this.props.title}</Text>
        </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
