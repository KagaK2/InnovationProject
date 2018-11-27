import React from 'react';
import {View, Text, Button, TouchableOpacity, ImageBackground, Image, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {Styles} from '../styles/componentstyle.js';
import {EventScreenStyle} from '../styles/screenstyle.js';
import UserIcon from '../components/UserIcon.js';
import * as FBcon from '../scripts/FBcon.js';

class EventScreen extends React.Component {
  static navigationOptions = {
    title: 'Your event',
  };
  constructor(props) {
    super(props)
    this._goBack = this._goBack.bind(this);
    this.eventCheck = this.eventCheck.bind(this);
    this.attendeeFetch = this.attendeeFetch.bind(this);
    this.state = {event: {images: [], name: {}, description: {}, start_time: '', end_time: ''}, attendees: []};
  }
  _goBack(){
    this.props.navigation.navigate('TabNav');
  }
  componentDidMount(){
    let data = this.props.navigation.getParam('data', 'untitled');
    this.attendeeFetch(data);
    this.setState(
      {event: data}
    );
  }
  async eventCheck(){
    await FBcon.checkEvent(this.props.id, this.state.event.id,this.state.event.name.en ? this.state.event.name.en: this.state.event.name.fi, this.state.event.start_time ? this.state.event.start_time : this.state.event.end_time, this.state.event.description.en ? this.state.event.description.en : this.state.event.description.fi);
    await FBcon.addAttending(this.props.id, this.state.event.id);
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
      <View key={arrayData.id}>
        <UserIcon image={arrayData.pic}/>
      </View>
    );
  }

  render(){
    return(
      <View>
      <ScrollView>
        <View>
          <ImageBackground source={{uri: this.state.event.images.length > 0 ? this.state.event.images[0].url : 'https://i.ytimg.com/vi/4eoM26ZmHd0/maxresdefault.jpg'}} style={{height: 200, width: '100%'}}>
            <TouchableOpacity onPress={this._goBack} title="Back" style={EventScreenStyle.backButton}>
              <Image source={{uri: 'https://i.imgur.com/Usn22lm.png'}} style={{height: 36, width: 36}}/>
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
          <Text> People who will attend this event </Text>
          <View>
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
