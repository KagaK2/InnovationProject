import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import CarouselCard from './CarouselCard';

var imgurl = "";
var title = "";

// Fetching data from city's API
fetch('https://linkedevents-api.test.hel.ninja/linkedevents-test/v1/event/?start=2018-11-14', {
  method: 'GET',
  headers: {
    'api_key': '934d7aed-9929-4b55-b70f-b60e4772316d',
  },
})
.then(response => response.json())
.then(data => setCarousel(data))
.catch(error => console.log("JSON ERROR"));


function setCarousel(datax) {
  console.log("Datax: " + datax);
  console.log("Data name(fi): " + datax.data[1].name.fi);
  console.log("Data image url: " + datax.data[1].images[0].url);
}

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
