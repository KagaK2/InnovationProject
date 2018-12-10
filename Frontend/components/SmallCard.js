import React from 'react';
import {View, Text, Image} from 'react-native';
import {Styles, SmallCardStyle} from '../styles/componentstyle.js';
// Component for home screen. Not implemented with the API yet.
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
