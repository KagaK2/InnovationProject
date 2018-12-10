import React from 'react';
import {TouchableWithoutFeedback, View, Text, Image} from 'react-native';
import {Styles, BigCardStyle} from '../styles/componentstyle.js';
//component used in Calendar Screen.
export default class BigCard extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <TouchableWithoutFeedback onPress={this.props.onPress}>
        <View style={BigCardStyle.card}>
          <View style={BigCardStyle.hashtagdate}>
            <Text style={Styles.largeBody}>#{this.props.hashtag}</Text>
            <Text style={Styles.secondBody}>•{this.props.date}</Text>
          </View>
          <Text style={[Styles.title, BigCardStyle.titleText]}>{this.props.eventName}</Text>
          <Image source={{uri: this.props.pic}} style={BigCardStyle.image}/>
          <Text style={[Styles.secondBody, BigCardStyle.going]}>{this.props.going} are going</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
