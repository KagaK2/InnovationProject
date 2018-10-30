import React from 'react';
import {View, Text, TouchableWithoutFeedback, Alert, ImageBackground} from 'react-native';
import {ThumbnailCardStyle} from '../styles/componentstyle.js';
export default class ThumbnailCard extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
      <TouchableWithoutFeedback onPress={this.props.onPress} style={ThumbnailCardStyle.card}>
      <View>
        <View>
          <ImageBackground source={{uri: this.props.pic}} style={ThumbnailCardStyle.image} >
          <Text style={{fontSize: 14, color: '#FFFFFF', fontWeight:'bold'}}>{this.props.title}</Text>
          </ImageBackground>
        </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
