import React from 'react';
import {View, Text, Button, AsyncStorage, Image, ScrollView, Switch, TouchableOpacity} from 'react-native';
import {ProfileScreenStyle} from '../styles/screenstyle.js';
import {Styles} from '../styles/componentstyle.js';
import { connect } from 'react-redux';
import { logOut, fetchAttending } from '../actions/index.js';


//Keywords/ Interests and Settings haven't been implemented yet.
class ProfileScreen extends React.Component {
  constructor(props){
    super(props);
    this.renderAttending = this.renderAttending.bind(this);
  }
  async componentDidMount(){
    this.props.fetchAttending(this.props.id);
  }
  _redirect = (item) => {
    this.props.navigation.navigate(
      {
        routeName : 'EventScreen',
        params: {data: item},
      }
    );
  }
  renderAttending(array){
    if(array[0] != undefined){
    return (
    <View key={array[0].id} style={ProfileScreenStyle.eventDetails}>
      <TouchableOpacity
        onPress={()=>this._redirect(array[0])}
       style= {{flex : 1, alignItems: 'center'}}>
        <Image
        style={Styles.eventIcon}
        source={{uri: 'https://i.ytimg.com/vi/4eoM26ZmHd0/maxresdefault.jpg'}}
      />
      </TouchableOpacity>
      <View style={{flex : 3, justifyContent: 'space-around',}}>
        <Text style={ProfileScreenStyle.eventAchievementTime}>{array[0].date}</Text>
        <Text style={ProfileScreenStyle.eventAchievement}>You attended {array[0].name}</Text>
      </View>
    </View>
  );
}
  }
  static navigationOptions = { header: null };
  render(){
    const {attending} = this.props;
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
              <TouchableOpacity><Text style={Styles.tagText}>#rock</Text></TouchableOpacity>
            </View>
            <View style={Styles.tags}>
              <TouchableOpacity><Text style={Styles.tagText}>#board-game</Text></TouchableOpacity>
            </View>
            <View style={Styles.tags}>
              <TouchableOpacity><Text style={Styles.tagText}>#soccer</Text></TouchableOpacity>
            </View>
            <View style={Styles.tags}>
              <TouchableOpacity><Text style={Styles.tagText}>#martial-arts</Text></TouchableOpacity>
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
              <Text style={Styles.hurray}>Hurray! You have attended</Text>
              <Text style={Styles.numberOfEvents}>{(this.props.attending&&this.props.attending.length>0) ? this.props.attending.length : '0'} events</Text>
            </View>
            <View id='eventsAttended' style={ProfileScreenStyle.listOfEvents}>
              {!attending ? <View><Text>Give it a try!</Text></View> : attending.map(this.renderAttending)}
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
    id: state.reducer.id,
    name: state.reducer.name,
    picurl: state.reducer.picurl,
    attending: state.reducer.attending,
  };
};

const mapDispatchToProps = {
  logOut, fetchAttending
};

export default connect(mapStateToProps,mapDispatchToProps)(ProfileScreen);
