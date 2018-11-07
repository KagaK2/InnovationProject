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
            <Text style={Styles.headline}>Home</Text>
            <Text style={Styles.largeBody}>Here is your discovery queue today.</Text>
          </View>
          <View>
            <Text style={Styles.subheader}> Right here right now </Text>
            <HomeCarousel onPress = {this._direct} />
          </View>
          <View>
            <Text style={Styles.subheader}> Nearby Activities</Text>
            <View style={Styles.list}>
              <SmallCard onPress = {this._direct} source='https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/34342318_1685636718210353_5156702804055687168_n.jpg?_nc_cat=106&_nc_ht=scontent-arn2-1.xx&oh=15a5bd1511954bfe2b6a35f4479e40dc&oe=5C8090DF' date='Nov 1' eventName='TalentIT'/>
              <SmallCard onPress = {this._direct} source='https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/A_Game_Of_Thrones_board_game_detail.jpg/275px-A_Game_Of_Thrones_board_game_detail.jpg' date='Nov 2' eventName='Boardgame night'/>
              <SmallCard onPress = {this._direct} source='https://d2g8igdw686xgo.cloudfront.net/30716072_1529445382386421_r.jpeg' date='Nov 2' eventName='Music Concert'/>
              <SmallCard onPress = {this._direct} source='https://philharmoniedeparis.fr/sites/default/files/styles/event_slide_full/public/file_dec_28_8_45_15_pm.jpeg' date='Nov 3' eventName='Late Night Jazz'/>
            </View>
          </View>
          <View>
            <Text style={Styles.subheader}>Explore by topics!</Text>
            <View style={Styles.list}>
              <ThumbnailCard pic='https://www.differencebetween.com/wp-content/uploads/2011/03/Fine-Art_Difference-Between-Fine-Art-and-Illustration.jpg' title='ART'/>
              <ThumbnailCard pic='https://pmcvariety.files.wordpress.com/2018/05/u2-1.jpg' title='CONCERT'/>
              <ThumbnailCard pic='http://thegame730am.com/files/2018/02/Basketball-Hoop2.jpg' title='SPORTS'/>
              <ThumbnailCard pic='https://ubistatic19-a.akamaihd.net/ubicomstatic/en-us/global/search-thumbnail/uno-ubicom-search-thumbnail_mobile_259517.jpg' title='BOARDGAME'/>
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
