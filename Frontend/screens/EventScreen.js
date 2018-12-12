import React from 'react';
import {View, Text, Button, TouchableOpacity, ImageBackground, Image, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {Styles} from '../styles/componentstyle.js';
import {EventScreenStyle} from '../styles/screenstyle.js';
import UserIcon from '../components/UserIcon.js';
import * as FBcon from '../scripts/FBcon.js';
import * as HelAPI from '../scripts/HelAPI.js';
import {Ionicons} from '@expo/vector-icons';
//Rendering each event depends on the input.
class EventScreen extends React.Component {
  static navigationOptions = {
    title: 'Your event',
  };
  constructor(props) {
    super(props)
    this._goBack = this._goBack.bind(this);
    this.eventCheck = this.eventCheck.bind(this);
    this.attendeeFetch = this.attendeeFetch.bind(this);
    this.attendeeRender = this.attendeeRender.bind(this);
    this.state = {event: {images: [], name: {}, description: {}, start_time: '', end_time: ''}, attendees: []};
  }
  _goBack(){
    console.log("Going back");
    this.props.navigation.navigate('TabNav');
  }
  _redirect = (item) => {
    this.props.navigation.navigate(
      {
        routeName: 'OtherUserScreen',
        params: {data: item},
      }
    )
  }
  //get data from the navigation props first, then fetch the attendees and event from the firebase database, then set the returned data as a state.
  async componentDidMount(){
    let data = this.props.navigation.getParam('data', 'untitled');
    this.attendeeFetch(data);
    let event = await HelAPI.getEventById(data.id);
    this.setState(
      {event: event}
    );
  }
  async componentDidUpdate(prevProps){
    console.log(this.props.navigation.getParam('data','untitled').id);
    console.log(this.state.event.id);
    if(this.props.navigation.getParam('data','untitled').id!= this.state.event.id){
      let data = this.props.navigation.getParam('data', 'untitled');
      this.attendeeFetch(data);
      let event = await HelAPI.getEventById(data.id);
      this.setState(
        {event: event}
      );
    }
  }
  //run after the user pressing the checkin button
  async eventCheck(){
    await FBcon.checkEvent(this.props.id, this.state.event.id,this.state.event.name.en ? this.state.event.name.en: this.state.event.name.fi, this.state.event.start_time ? this.state.event.start_time : this.state.event.end_time, this.state.event.description.en ? this.state.event.description.en : this.state.event.description.fi);
    await FBcon.addAttending(this.props.id, this.state.event.id);
    let attendees = this.state.attendees;
    let checkIn = attendees.findIndex(x => x.id==this.props.id);
    if (checkIn == -1) {
      let info = await FBcon.getUserData(this.props.id);
      console.log(info);
      attendees.push(info[0]);
      this.setState({attendees: attendees});
    }

  }
  async attendeeFetch(data){
    try {
     let attendees = await FBcon.getEventAttendees(data.id);
     if (attendees.length > 0){
     let attendeesArray = await Promise.all( attendees[0].map(async (attendee) => {
      let info = await FBcon.getUserData(attendee);
      return {key: info[0].id,...info[0]};
    }));
    this.setState({attendees: attendeesArray});
  }
  }
  catch(err){
    console.log(err);
  }
  }

  attendeeRender(arrayData){
    return(
      <View>
      <TouchableOpacity key={arrayData.id} onPress={() => this._redirect(arrayData)}>
        <UserIcon image={arrayData.pic}/>
      </TouchableOpacity>
      </View>
    );
  }

  render(){
    console.log(this.props.navigation.getParam('data','untitled'));
    return(
      <View>
      <ScrollView>
        <View>
          <ImageBackground source={{uri: this.state.event.images.length > 0 ? this.state.event.images[0].url : 'https://i.ytimg.com/vi/4eoM26ZmHd0/maxresdefault.jpg'}} style={{height: 200, width: '100%'}}>
            <TouchableOpacity onPress={this._goBack} title="Back" style={EventScreenStyle.backButton}>
              <Ionicons name='ios-arrow-back' size={36} color='#FFA06E'/>
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View style={EventScreenStyle.eventBody}>
          <View style={EventScreenStyle.hashtagdate}>
            <Text style={Styles.largeBody}>#concert</Text>
            <Text style={Styles.secondBody}>•{this.state.event.start_time}-{this.state.event.end_time}</Text>
          </View>
          <Text style={[Styles.title,EventScreenStyle.title]}>{this.state.event.name.en ? this.state.event.name.en : this.state.event.name.fi}</Text>
          <Text>{this.state.event.description.en ? this.state.event.description.en : this.state.event.description.fi}
            </Text>
          <Text style={EventScreenStyle.eventAttendingText}> People who will attend this event </Text>
          <View style={EventScreenStyle.eventAttendees}>
            {this.state.attendees.map(this.attendeeRender)}
          </View>
          <View style={EventScreenStyle.checkIn}>
            <TouchableOpacity
              onPress={this.eventCheck}
              style={[Styles.jumbo, EventScreenStyle.checkInButton]}
              >
              <Text style={[Styles.buttonText, EventScreenStyle.checkInButtonText]}> CHECK IN </Text>
            </TouchableOpacity>
          </View>
        </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    id : state.reducer.id,
  };
};

export default connect(mapStateToProps)(EventScreen);
