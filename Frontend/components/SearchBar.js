import React from 'react';
import {View, TextInput, Image} from 'react-native';
import {SearchBarStyle} from '../styles/componentstyle.js';
import { Ionicons } from '@expo/vector-icons';
//Component are used in the SearchScreen
export default class SearchBar extends React.Component {
  render() {
    return (
      <View style={SearchBarStyle.searchBar}>
        <Ionicons name='ios-search' size={20} color={'#A6A6A6'}/>
        <TextInput
        style = {{flex: 1, fontSize: 16, marginLeft: 8}}
        placeholder='What are you looking for?'
        onFocus = {this.props.onFocus}
        onBlur = {this.props.onBlur}
        />
      </View>
    )
  }
}
