import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import BigCard from '../components/BigCard.js';
import {Styles} from '../styles/componentstyle.js';
import {CalendarScreenStyle} from '../styles/screenstyle.js';



export default class CalendarScreen extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
  }
  _redirect = () => {
    this.props.navigation.navigate(
      {
        routeName: 'EventScreen',
        param: {},
      }
    );
  }
  render(){
    return(
      <ScrollView style={Styles.colorBody}>
        <View style={CalendarScreenStyle.appBody}>
          <BigCard onPress={this._redirect} hashtag="theater" date="23 Oct 2018" eventName="Some Random Events" pic="https://i.imgur.com/o7XhtRB.png" going="Me and mah homies" />
          <BigCard hashtag="theater" date="23 Oct 2018" eventName="Some Random Events" pic="https://i.imgur.com/o7XhtRB.png" going="Me and mah homies" />
          <BigCard hashtag="theater" date="23 Oct 2018" eventName="Some Random Events" pic="https://i.imgur.com/o7XhtRB.png" going="Me and mah homies" />
          <BigCard hashtag="theater" date="23 Oct 2018" eventName="Some Random Events" pic="https://i.imgur.com/o7XhtRB.png" going="Me and mah homies" />
          <BigCard hashtag="theater" date="23 Oct 2018" eventName="Some Random Events" pic="https://i.imgur.com/o7XhtRB.png" going="Me and mah homies" />
          <BigCard hashtag="theater" date="23 Oct 2018" eventName="Some Random Events" pic="https://i.imgur.com/o7XhtRB.png" going="Me and mah homies" />
        </View>
      </ScrollView>
    );
  }
}
