import React from 'react';
import {View, Text, Button, AsyncStorage, Image, ScrollView, Switch, TouchableOpacity} from 'react-native';
import {ProfileScreenStyle} from '../styles/screenstyle.js';
import {Styles} from '../styles/componentstyle.js';
import { connect } from 'react-redux';
import {Ionicons} from '@expo/vector-icons';
import * as FBcon from '../scripts/FBcon.js'
import {fetchAttendingByArray} from '../actions/index.js';
//Keywords/ Interests haven't been implemented yet.
class OtherUserScreen extends React.Component {
  constructor(props){
    super(props);
  }
  _goBack(){
    this.props.navigation.navigate('TabNav');
  }
  async componentDidMount(){
    let data = this.props.navigation.getParam('data','untitled');
    this.props.fetchAttendingByArray(data.attending);
  }
  _redirect = (item) => {
    this.props.navigation.navigate(
      {
        routeName : 'EventScreen',
        params: {data: item},
      }
    );
  }
  renderAttending = (array) => {
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
  );}}

  render(){
    let data = this.props.navigation.getParam('data','untitled');
    const {attending} = this.props;
    return(
      <ScrollView style={Styles.colorBody}>
        <View style={Styles.otherUserAppBody}>
          <TouchableOpacity onPress={()=>this._goBack()} title="Back" style={ProfileScreenStyle.backButton}>
            <Ionicons name='ios-arrow-back' size={36} color='#FFA06E'/>
          </TouchableOpacity>
          <View id='userLogo' style={ProfileScreenStyle.userLogo}>
            <Image source={{uri: data.pic}} style={ProfileScreenStyle.image}/>
            <Text style={Styles.headline}> {data.name}</Text>
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
              <Text style={Styles.numberOfEvents}>{(data.attending&&data.attending.length>0) ? data.attending.length : '0'} events</Text>
            </View>
            <View id='eventsAttended' style={ProfileScreenStyle.listOfEvents}>
              {!attending ? <View><Text>Give it a try!</Text></View> : attending.map(this.renderAttending)}
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    attending: state.reducer.attendingArray,
  };
};

const mapDispatchToProps = {
  fetchAttendingByArray
};

export default connect(mapStateToProps,mapDispatchToProps)(OtherUserScreen);
