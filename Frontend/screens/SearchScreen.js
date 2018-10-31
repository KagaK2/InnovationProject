import React from 'react';
import {Text} from 'react-native';

export default class SearchScreen extends React.Component {
  constructor(props){
    super(props);
  }
  static navigationOptions = { header: null };
  render(){
    return(
      <Text>This is the search screen</Text>
    );
  }
}
