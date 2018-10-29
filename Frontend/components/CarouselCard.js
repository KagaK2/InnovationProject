import React from 'react';
import {View, Text, TouchableWithoutFeedback, Alert, ImageBackground} from 'react-native';

export default class CarouselCard extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
      <TouchableWithoutFeedback onPress={this.props.onPress} style={{height:130, width: '90%'}}>
      <View>
        <View style={{ flex: 2 }}>
          <ImageBackground source={{uri: this.props.pic}} style={{flex: 1, width:300, height:null, margin: 8, alignItems: 'center',
    justifyContent:'center',}} imageStyle={{resizeMode:'stretch'}} >
          <Text style={{fontSize: 14, color: '#FFFFFF', fontWeight:'bold'}}>{this.props.title}</Text>
          </ImageBackground>
        </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
