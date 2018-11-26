import React from 'react';
import {View, ScrollView, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {Styles} from '../styles/componentstyle.js';
import SearchBar from '../components/SearchBar.js';
import { connect } from 'react-redux';

class SearchScreen extends React.Component {
  constructor(props){
    super(props);
  }
  static navigationOptions = { header: null };
  render(){
    return(
      <ScrollView style={Styles.colorBody}>
        <View style={Styles.appBody}>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={Styles.headline}>Search</Text>
              <Text style={Styles.largeBody}>This is the search screen.</Text>
            </View>
            <TouchableOpacity style={Styles.profileIconContainer}>
              <Image
                style={Styles.profileIcon}
                source={{uri: this.props.picurl}}
              />
            </TouchableOpacity>
          </View>
          <View>
            <SearchBar/>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    picurl: state.reducer.picurl,
  };
}

export default connect(mapStateToProps)(SearchScreen);
