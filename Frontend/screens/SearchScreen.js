import React from 'react';
import {View, ScrollView, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {Styles} from '../styles/componentstyle.js';
import SearchBar from '../components/SearchBar.js';
import {SearchScreenStyle} from '../styles/screenstyle.js';
import { connect } from 'react-redux';
import {Ionicons} from '@expo/vector-icons';

//Are not implemented yet.
class SearchScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {searchFocus : false};
  }
  static navigationOptions = { header: null };
  render(){
    return(
      <ScrollView style={this.state.searchFocus? Styles.focusColorBody : Styles.colorBody}>
        <View style={this.state.searchFocus ? Styles.focusAppBody : Styles.appBody}>
          {!this.state.searchFocus ? <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={Styles.headline}>Search</Text>
              <Text style={Styles.largeBody}>This is the search screen.</Text>
            </View>
            <TouchableOpacity
              style={Styles.profileIconContainer}
              onPress={() => this.props.navigation.navigate('Profile')}
            >
              <Image
                style={Styles.profileIcon}
                source={{uri: this.props.picurl}}
              />
            </TouchableOpacity></View>
: <View></View>}
          <View style={{backgroundColor: 'white',paddingBottom: 8, paddingLeft: this.state.searchFocus ? 16 : 0}}>
            <SearchBar
              onFocus={()=>this.setState({searchFocus: true})}
              onBlur={()=>this.setState({searchFocus: false})}
            />
          </View>
          <View style={{opacity: 0.3,flex:1, backgroundColor:'grey'}}>
          </View>
        </View>
        <View style={SearchScreenStyle.mainScreen}>
          <Ionicons name='ios-search' size={100} color='#000000'/>
          <Text style={SearchScreenStyle.titleText}>Find the event you want</Text>
          <Text>Search for events, activities and more.</Text>
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
