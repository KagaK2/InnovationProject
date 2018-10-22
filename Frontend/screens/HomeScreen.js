import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import HomeCarousel from '../components/HomeCarousel.js';
import SmallCard from '../components/SmallCard.js';



export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }
  _direct = () => {
    this.props.navigation.navigate(
      {
        routeName : 'EventScreen',
        param: {},
      }
    );
  }
  render(){
    return(
      <ScrollView>
        <Text> This is the home screen </Text>
        <View>
          <Text> Right here right now </Text>
          <HomeCarousel onPress = {this._direct} />
        </View>
        <View>
          <Text> Nearby Activities</Text>
          <SmallCard source='https://img.youtube.com/vi/D9ioyEvdggk/hqdefault.jpg' date='Oct 21' eventName='Do whatever'/>
          <SmallCard source='https://img.youtube.com/vi/D9ioyEvdggk/hqdefault.jpg' date='Oct 21' eventName='Do whatever'/>
          <SmallCard source='https://img.youtube.com/vi/D9ioyEvdggk/hqdefault.jpg' date='Oct 21' eventName='Do whatever'/>
          <SmallCard source='https://img.youtube.com/vi/D9ioyEvdggk/hqdefault.jpg' date='Oct 21' eventName='Do whatever'/>
        </View>
      </ScrollView>
    );
  }
}
