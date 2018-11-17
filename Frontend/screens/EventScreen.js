import React from 'react';
import {View, Text, Button, TouchableOpacity, ImageBackground, Image, ScrollView} from 'react-native';
import {Styles} from '../styles/componentstyle.js';
import {EventScreenStyle} from '../styles/screenstyle.js';

export default class EventScreen extends React.Component {
  static navigationOptions = {
    title: 'Your event',
  };
  constructor(props) {
    super(props)
    this._goBack = this._goBack.bind(this);
  }
  _goBack(){
    this.props.navigation.navigate('TabNav');
  }
  render(){
    return(
      <View>
      <ScrollView>
        <View>
          <ImageBackground source={{uri: 'https://i.imgur.com/2HFkX7E.png'}} style={{height: 200, width: '100%'}}>
            <TouchableOpacity onPress={this._goBack} title="Back" style={EventScreenStyle.backButton}>
              <Image source={{uri: 'https://i.imgur.com/Usn22lm.png'}} style={{height: 36, width: 36}}/>
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View style={EventScreenStyle.eventBody}>
          <View style={EventScreenStyle.hashtagdate}>
            <Text style={Styles.largeBody}>#concert</Text>
            <Text style={Styles.secondBody}>•1 November 2018 at 11:00</Text>
          </View>
          <Text style={[Styles.title,EventScreenStyle.title]}>Coming To You Live by DPR</Text>
          <Text>Ut vitae porta eros. Aliquam condimentum lorem in elit aliquam ullamcorper. Pellentesque pellentesque nisl leo. Donec vel pulvinar felis, luctus consequat tortor. Quisque molestie lacus eros, id efficitur quam cursus ac. Donec aliquam felis purus, id condimentum ex finibus eget. Donec vehicula accumsan diam ac bibendum. Pellentesque consequat, ipsum eget interdum iaculis, mi velit eleifend odio, sed cursus nunc est eu arcu. Curabitur placerat enim a sodales consectetur. Cras nec ultrices ex. Nullam suscipit enim vitae tempor hendrerit. Etiam consequat pellentesque bibendum.
            </Text>
          <View style={EventScreenStyle.checkIn}>
            <TouchableOpacity style={[Styles.jumbo, EventScreenStyle.checkInButton]}>
              <Text style={[Styles.buttonText, EventScreenStyle.checkInButtonText]}> CHECK IN </Text>
            </TouchableOpacity>
          </View>
        </View>
        </ScrollView>
      </View>
    );
  }
}
