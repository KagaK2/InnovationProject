import React from 'react';
import {View, Text, Image, ScrollView, FlatList} from 'react-native';
import CarouselCard from './CarouselCard';
import * as HelAPI from '../scripts/HelAPI';

// Component are used in the HomeScreen. Will render a pseudo carousel (a FlatList nested by a ScrollView in fact)
export default class HomeCarousel extends React.Component {
  constructor(props){
    super(props);
    this.state = {array: []};
    this.setCarousel = this.setCarousel.bind(this);
  }
  async componentDidMount(){
   let todayEvents = await this.setCarousel();
   this.setState({array: todayEvents});
  }
  async setCarousel() {
    let datax = await HelAPI.getTodaysEvents();

    return datax.data;
  }
  _keyExtractor = (item, index) => item.id;
  render () {
    return (
      <View style={{height: 140}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <FlatList
              data = {this.props.data}
              renderItem = { ({item}) => (item.name) && (<CarouselCard key={item.id} onPress = {item.renderFunction} pic={item.images.length>0 ? item.images[0].url : 'https://i.ytimg.com/vi/4eoM26ZmHd0/maxresdefault.jpg'} title={item.name ? (item.name.en ? item.name.en : item.name.fi) : 'untitled'}/>)}
              keyExtractor = {this._keyExtractor}
              extraData={this.props.data}horizontal={true} showsHorizontalScrollIndicator={false}
              />
        </ScrollView>
      </View>
    );
  }

}
