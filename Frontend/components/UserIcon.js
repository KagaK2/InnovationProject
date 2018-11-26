import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';

export default class UserIcon extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
    <View>
      <TouchableOpacity>
        <Image
          style={{height: 48, width: 48}}
          source={{uri: this.props.image ? this.props.image : 'https://i.imgur.com/eEnMLyt.png'}}
          />
      </TouchableOpacity>
    </View>
  );
  }
}