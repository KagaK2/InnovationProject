import React from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import HomeCarousel from '../components/HomeCarousel.js';
import SmallCard from '../components/SmallCard.js';
import ThumbnailCard from '../components/ThumbnailCard.js';
import {Styles} from '../styles/componentstyle.js';
import {HomeScreenStyle} from '../styles/screenstyle.js';


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
      <ScrollView style={Styles.colorBody}>
        <View style={Styles.appBody}>
          <View>
            <Text style={Styles.subheader}> Right here right now </Text>
            <HomeCarousel onPress = {this._direct} />
          </View>
          <View>
            <Text style={Styles.subheader}> Nearby Activities</Text>
            <View style={Styles.list}>
              <SmallCard source='https://i.imgur.com/eEnMLyt.png' date='Oct 21' eventName='Do whatever'/>
              <SmallCard source='https://i.imgur.com/eEnMLyt.png' date='Oct 21' eventName='Do whatever'/>
              <SmallCard source='https://img.youtube.com/vi/D9ioyEvdggk/hqdefault.jpg' date='Oct 21' eventName='Do whatever'/>
              <SmallCard source='https://img.youtube.com/vi/D9ioyEvdggk/hqdefault.jpg' date='Oct 21' eventName='Do whatever'/>
            </View>
          </View>
          <View>
            <Text style={Styles.subheader}>Explore by topics!</Text>
            <View style={Styles.list}>
              <ThumbnailCard pic='https://i.imgur.com/eEnMLyt.png' title='Some random Ahri stuff'/>
              <ThumbnailCard pic='https://i.imgur.com/eEnMLyt.png' title='Some random Ahri stuff'/>
              <ThumbnailCard pic='https://i.imgur.com/eEnMLyt.png' title='Some random Ahri stuff'/>
              <ThumbnailCard pic='https://i.imgur.com/eEnMLyt.png' title='Some random Ahri stuff'/>
            </View>
          </View>
          <View style={HomeScreenStyle.pref}>
            <Text style={Styles.largeBody}> Want something else? </Text>
            <Text style={Styles.largeBody}> Let us know! </Text>
            <TouchableOpacity style={[Styles.jumbo, HomeScreenStyle.prefButton]}><Text style={[Styles.buttonText,{color: '#FFFFFF'}]}>Update Preferences</Text></TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
