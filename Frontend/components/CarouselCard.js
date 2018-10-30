import React from 'react';
import {View, Text, TouchableWithoutFeedback, Alert, ImageBackground} from 'react-native';
import {Styles, CarouselCardStyle} from '../styles/componentstyle.js';
export default class CarouselCard extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
      <TouchableWithoutFeedback onPress={this.props.onPress} style={CarouselCardStyle.card}>
      <View>
        <View style={{ flex: 2 }}>
          <ImageBackground source={{uri: this.props.pic}} style={CarouselCardStyle.image} imageStyle={{resizeMode:'stretch'}} >
          <Text style={Styles.largeBody}>{this.props.title}</Text>
          </ImageBackground>
        </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}