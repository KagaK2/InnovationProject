import React from 'react';
import SideSwipe from 'react-native-sideswipe';
import {View, Text, Image, ScrollView} from 'react-native';
import CarouselCard from './CarouselCard';

export default class HomeCarousel extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
  }

  render () {
    return (
      <View style={{height: 130, width: 400}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <CarouselCard onPress = {this.props.onPress} pic='https://i.imgur.com/eEnMLyt.png' title='Some random Ahri stuff'/>
            <CarouselCard pic='https://i.imgur.com/eEnMLyt.png' title='Some random Ahri stuff'/>
            <CarouselCard pic='https://i.imgur.com/eEnMLyt.png' title='Some random Ahri stuff'/>
            <CarouselCard pic='https://i.imgur.com/eEnMLyt.png' title='Some random Ahri stuff'/>
            <CarouselCard pic='https://i.imgur.com/eEnMLyt.png' title='Some random Ahri stuff'/>
            <CarouselCard pic='https://i.imgur.com/eEnMLyt.png' title='Some random Ahri stuff'/>
        </ScrollView>
      </View>
    );
  }
}
