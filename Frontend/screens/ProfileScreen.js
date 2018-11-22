import React from 'react';
import {View, Text, Button, AsyncStorage, Image, ScrollView, Switch, TouchableOpacity} from 'react-native';
import {ProfileScreenStyle} from '../styles/screenstyle.js';
import {Styles} from '../styles/componentstyle.js';
import { connect } from 'react-redux';
import { logOut } from '../actions/index.js';


class ProfileScreen extends React.Component {
  constructor(props){
    super(props);
  }
  static navigationOptions = { header: null };
  render(){
    return(
      <ScrollView style={Styles.colorBody}>
        <View style={Styles.appBody}>
          <View id='userLogo' style={ProfileScreenStyle.userLogo}>
            <Image source={{uri: this.props.picurl}} style={ProfileScreenStyle.image}/>
            <Text style={Styles.headline}> {this.props.name}</Text>
            <Text style={Styles.secondBody}> This is the user title </Text>
          </View>
          <View id='accSettings'>
        <Text style={Styles.subheader}> Account Settings </Text>
        <View id='interest'>
          <Text style={[Styles.largeBody,ProfileScreenStyle.interest]}> Interests </Text>
          <View style={[Styles.list,ProfileScreenStyle.interest]}>
            <View style={Styles.tags}>
            <Text style={Styles.tagText}>#idk</Text>
            </View>
            <View style={Styles.tags}>
            <Text style={Styles.tagText}>#what</Text>
            </View>
            <View style={Styles.tags}>
            <Text style={Styles.tagText}>#to</Text>
            </View>
            <View style={Styles.tags}>
            <Text style={Styles.tagText}>#expect</Text>
            </View>
            <TouchableOpacity style={[Styles.jumbo, ProfileScreenStyle.addMore]}><Text style={Styles.buttonText}>+</Text></TouchableOpacity>
          </View>
        </View>
        <View id='generalSettings'>
          <Text style={[Styles.largeBody, ProfileScreenStyle.generalSettings]}> General Settings </Text>
          <View style={ProfileScreenStyle.settingLine}>
            <Text> Alert me when I'm near an event </Text>
            <Switch/>
          </View>
          <View style={ProfileScreenStyle.settingLine}>
            <Text> Other people can see my profile </Text>
            <Switch/>
          </View>
          <View style={ProfileScreenStyle.settingLine}>
            <Text> Allow location sharing </Text>
            <Switch/>
          </View>
        </View>
          </View>
          <View id='recentActivities'>
            <Text style={Styles.subheader}> Recent Activities </Text>
            <View id='numberOfEvents' style={ProfileScreenStyle.numberOfEvents}>
              <Text style={Styles.hurray}>Hurray! Last month you attended</Text>
              <Text style={Styles.numberOfEvents}>3 events</Text>
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
          <View id ='signOut' style={ProfileScreenStyle.signOutSection}>
            <TouchableOpacity onPress={this.signOut.bind(this)} style={[Styles.jumbo, ProfileScreenStyle.signOut]}><Text style={[Styles.buttonText,{color: '#FFFFFF'}]}>Signout</Text></TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
  async signOut() {
    await AsyncStorage.clear();
    await this.props.logOut();
    this.props.navigation.navigate('Auth');
  }
}

const mapStateToProps = state => {
  return {
    name: state.reducer.name,
    picurl: state.reducer.picurl
  };
};

const mapDispatchToProps = {
  logOut
};

export default connect(mapStateToProps,mapDispatchToProps)(ProfileScreen);
