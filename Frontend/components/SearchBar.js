import React from 'react';
import {View, TextInput, Image} from 'react-native';
import {SearchBarStyle} from '../styles/componentstyle.js';
import SearchIcon from '../img/search_icon.png';

export default class SearchBar extends React.Component {
  render() {
    return (
      <View style={SearchBarStyle.searchBar}>
        <Image
          source={SearchIcon}
          style ={{height: 20, width: 20}}
        />
        <TextInput
        style = {{fontSize: 16, marginLeft: 8}}
        inlineImageLeft = 'search_icon'
        placeholder='What are you looking for?'
        />
      </View>
    )
  }
}
