import React from 'react';
import {View, Text, Button, AsyncStorage, Image, ScrollView, Switch, TouchableOpacity} from 'react-native';
import {ProfileScreenStyle} from '../styles/screenstyle.js';
import {Styles} from '../styles/componentstyle.js';
import { connect } from 'react-redux';
import {Ionicons} from '@expo/vector-icons';

export default class OtherUserScreen extends React.Component {
  _goBack(){
    this.props.navigation.navigate('TabNav');
  }

  render(){
    return(
      <ScrollView style={Styles.colorBody}>
        <View style={Styles.otherUserAppBody}>
          <TouchableOpacity onPress={()=>this._goBack()} title="Back" style={ProfileScreenStyle.backButton}>
            <Ionicons name='ios-arrow-back' size={36} color='#FFA06E'/>
          </TouchableOpacity>
          <View id='userLogo' style={ProfileScreenStyle.userLogo}>
            <Image source={{uri: this.props.picurl}} style={ProfileScreenStyle.image}/>
            <Text style={Styles.headline}> {this.props.name}</Text>
            <Text style={Styles.secondBody}> This is the user title </Text>
          </View>
          <View id='accSettings'>
        <Text style={Styles.subheader}> Interests </Text>
        <View id='interest'>
          <View style={[Styles.list,ProfileScreenStyle.interest]}>
            <View style={Styles.tags}>
              <Text style={Styles.tagText}>#Keywords</Text>
            </View>
            <View style={Styles.tags}>
              <Text style={Styles.tagText}>#aren't</Text>
            </View>
            <View style={Styles.tags}>
              <Text style={Styles.tagText}>#implemented</Text>
            </View>
            <View style={Styles.tags}>
              <Text style={Styles.tagText}>#rightnow</Text>
            </View>
          </View>
        </View>
          </View>
          <View id='recentActivities'>
            <Text style={Styles.subheader}> Recent Activities </Text>
            <View id='numberOfEvents' style={ProfileScreenStyle.numberOfEvents}>
              <Text style={Styles.hurray}>Hurray! You have attended</Text>
              <Text style={Styles.numberOfEvents}>{(this.props.attending&&this.props.attending.length>0) ? this.props.attending.length : '0'} events</Text>
            </View>
            <View id='eventsAttended' style={ProfileScreenStyle.listOfEvents}>
              <View style={ProfileScreenStyle.eventDetails}>
                <View style= {{flex : 1, alignItems: 'center'}}>
                  <Image
                  style={Styles.eventIcon}
                  source={{uri: 'https://i.imgur.com/M0ks2ba.png'}}
                />
                </View>
                <View style={{flex : 3, justifyContent: 'space-around',}}>
                  <Text style={ProfileScreenStyle.eventAchievementTime}>3 minutes ago</Text>
                  <Text style={ProfileScreenStyle.eventAchievement}>You received medal Daxua</Text>
                </View>
              </View>
              <View style={ProfileScreenStyle.eventDetails}>
                <View style= {{flex : 1, alignItems: 'center'}}>
                  <Image
                  style={Styles.eventIcon}
                  source={{uri: 'https://i.imgur.com/O6szkhx.png'}}
                />
                </View>
                <View style={{flex : 3, justifyContent: 'space-around',}}>
                  <Text style={ProfileScreenStyle.eventAchievementTime}>Yesterday, 20:00</Text>
                  <Text style={ProfileScreenStyle.eventAchievement}>You checked in at Akali</Text>
                </View>
              </View>
              <View style={ProfileScreenStyle.eventDetails}>
                <View style= {{flex : 1, alignItems: 'center'}}>
                  <Image
                  style={Styles.eventIcon}
                  source={{uri: 'https://i.imgur.com/kP814Ja.jpg'}}
                />
                </View>
                <View style={{flex : 3, justifyContent: 'space-around',}}>
                  <Text style={ProfileScreenStyle.eventAchievementTime}>24/09/2018, 20:00</Text>
                  <Text style={ProfileScreenStyle.eventAchievement}>You attended Lee Sin</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
