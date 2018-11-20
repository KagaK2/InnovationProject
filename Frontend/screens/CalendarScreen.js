import React from 'react';
import {ScrollView, View, Text, FlatList} from 'react-native';
import BigCard from '../components/BigCard.js';
import {Styles} from '../styles/componentstyle.js';
import {CalendarScreenStyle} from '../styles/screenstyle.js';
import * as HelAPI from '../scripts/HelAPI.js';
import {fetchWeekEvent} from '../actions/index.js'
import { connect } from 'react-redux';


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
        <View style={CalendarScreenStyle.appBody}>
        <View style={{marginLeft:8}}>
          <Text style={Styles.headline}>Calendar</Text>
        </View>
        <View style={Styles.list}>
          <FlatList
            data = {this.props.week}
            renderItem = {({item}) => <BigCard onPress={() => this._redirect(item)} hashtag="theater" date={item.start_time ? item.start_time : item.end_time} eventName={item.name.en ? item.name.en : item.name.fi} pic={item.images.length>0 ? item.images[0].url : 'https://i.ytimg.com/vi/4eoM26ZmHd0/maxresdefault.jpg'} going="Me and mah homies" />}
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
    week: state.reducer.week,
  };
}

const mapDispatchToProps = {
  fetchWeekEvent
};

export default connect(mapStateToProps,mapDispatchToProps)(CalendarScreen);
