import React from 'react';
import {View, ScrollView, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {Styles} from '../styles/componentstyle.js';
import SearchBar from '../components/SearchBar.js';
import { connect } from 'react-redux';

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
          <View style={{backgroundColor: 'white'}}>
            <SearchBar
              onFocus={()=>this.setState({searchFocus: true})}
              onBlur={()=>this.setState({searchFocus: false})}
            />
          </View>
          <View style={{opacity: 0.3,flex:1, backgroundColor:'grey'}}>
            <Text>GOGOGO</Text>
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
