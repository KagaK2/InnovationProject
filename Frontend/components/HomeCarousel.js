import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import CarouselCard from './CarouselCard';
import * as HelAPI from '../scripts/HelAPI';


async function setCarousel() {
  var datax = await HelAPI.getTodaysEvents();
  
  // // Loop to Title and image url for the carousel cards

  // for(i in datax.data) {
  //   // EVENT NAME(FI):
  //   datax.data[i].name.fi;
  //   // EVENT IMAGE URL:
  //   datax.data[i].images[0].url;
  // }

  return datax;
}

var datax = setCarousel();

export default class HomeCarousel extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
  }

  render () {
    return (
      <View style={{height: 130}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <CarouselCard onPress = {this.props.onPress} pic='https://i.ytimg.com/vi/4eoM26ZmHd0/maxresdefault.jpg' title='LOL Tournament'/>
            <CarouselCard onPress = {this.props.onPress} pic='https://i.ytimg.com/vi/4eoM26ZmHd0/maxresdefault.jpg' title='Innovation Project'/>
            <CarouselCard onPress = {this.props.onPress} pic='https://i.ytimg.com/vi/4eoM26ZmHd0/maxresdefault.jpg' title='yada yada'/>
            <CarouselCard onPress = {this.props.onPress} pic='https://i.ytimg.com/vi/4eoM26ZmHd0/maxresdefault.jpg' title='etc'/>
            <CarouselCard onPress = {this.props.onPress} pic='https://i.ytimg.com/vi/4eoM26ZmHd0/maxresdefault.jpg' title='Lorem Ipsum'/>
            <CarouselCard onPress = {this.props.onPress} pic='https://i.ytimg.com/vi/4eoM26ZmHd0/maxresdefault.jpg' title='Donor si amet'/>
        </ScrollView>
      </View>
    );
  }

}
