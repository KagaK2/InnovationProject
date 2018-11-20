import React from 'react';
import {View, Text, Image, ScrollView, FlatList} from 'react-native';
import CarouselCard from './CarouselCard';
import * as HelAPI from '../scripts/HelAPI';


export default class HomeCarousel extends React.Component {
  constructor(props){
    super(props);
    this.state = {array: []};
    this.setCarousel = this.setCarousel.bind(this);
  }
  async componentDidMount(){
   let todayEvents = await this.setCarousel();
   this.setState({array: todayEvents});
   //this.setState = ({ array: lmao });
  }
  async setCarousel() {
    let datax = await HelAPI.getTodaysEvents();

    return datax.data;
  }
  _keyExtractor = (item, index) => item.id;
  render () {
    return (
      <View style={{height: 130}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <FlatList
              data = {this.props.data}
              renderItem = { ({item}) => <CarouselCard key={item.id} onPress = {item.renderFunction} pic={item.images.length>0 ? item.images[0].url : 'https://i.ytimg.com/vi/4eoM26ZmHd0/maxresdefault.jpg'} title={item.name.en ? item.name.en : item.name.fi}/>}
              keyExtractor = {this._keyExtractor}
              extraData={this.props.data}horizontal={true} showsHorizontalScrollIndicator={false}
              />
        </ScrollView>
      </View>
    );
  }

}
