import React from 'react';
import {ScrollView, View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import BigCard from '../components/BigCard.js';
import {Styles} from '../styles/componentstyle.js';
import {CalendarScreenStyle} from '../styles/screenstyle.js';
import * as HelAPI from '../scripts/HelAPI.js';
import {fetchWeekEvent} from '../actions/index.js'
import { connect } from 'react-redux';

//Event for next 7 days.
class CalendarScreen extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount () {
     this.props.fetchWeekEvent();
  }

  _redirect = (item) => {
    this.props.navigation.navigate(
      {
        routeName: 'EventScreen',
        params: {data: item}
      }
    );
  }
  _keyExtractor = (item, index) => item.id;
  render(){
    return(
      <ScrollView style={Styles.colorBody}>
        <View style={Styles.appBody}>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={Styles.headline}>Calendar</Text>
            <TouchableOpacity
              style={Styles.profileIconContainer}
              onPress={() => this.props.navigation.navigate('Profile')}
            >
              <Image
                style={Styles.profileIcon}
                source={{uri: this.props.picurl}}
                />
            </TouchableOpacity>
          </View>
        <View style={CalendarScreenStyle.list}>
          <FlatList
            style = {CalendarScreenStyle.boxWithShadow}
            data = {this.props.week}
            renderItem = {({item}) =>(item.name) && <BigCard onPress={() => this._redirect(item)} hashtag="theater" date={item.start_time ? item.start_time : item.end_time} eventName={item.name ? (item.name.en ? item.name.en : item.name.fi) : 'untitled'} pic={item.images.length>0 ? item.images[0].url : 'https://i.ytimg.com/vi/4eoM26ZmHd0/maxresdefault.jpg'} going="Me and mah homies" />}
            keyExtractor = {this._keyExtractor}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = state => {
  return {
    picurl: state.reducer.picurl,
    week: state.reducer.week,
  };
}

const mapDispatchToProps = {
  fetchWeekEvent
};

export default connect(mapStateToProps,mapDispatchToProps)(CalendarScreen);
