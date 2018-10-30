import React from 'react';
import {View, Text, Image} from 'react-native';
import {Styles, SmallCardStyle} from '../styles/componentstyle.js';

export default class SmallCard extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View style={SmallCardStyle.card}>
        <Image source={{ uri: this.props.source}} style={SmallCardStyle.image}/>
        <Text style={[Styles.secondBody, SmallCardStyle.date]}>{this.props.date}</Text>
        <Text style={[Styles.largeBody, SmallCardStyle.title]}>{this.props.eventName}</Text>
      </View>
    );
  }
}
