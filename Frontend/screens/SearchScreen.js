import React from 'react';
import {View, ScrollView, Text, TextInput} from 'react-native';

export default class SearchScreen extends React.Component {
  constructor(props){
    super(props);
  }
  static navigationOptions = { header: null };
  render(){
    return(
      <View>
        <View>
          <TextInput value=''/>
        </View>
        <ScrollView>
          
        </ScrollView>
      </View>
    );
  }
}
