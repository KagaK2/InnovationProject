//Specific screen styling.
import {StyleSheet} from 'react-native';
export const HomeScreenStyle = StyleSheet.create({
  pref : {
    alignItems: 'flex-start',
    marginTop: 67,
  },
  prefButton: {
    marginTop: 24,
    backgroundColor: '#FFA06E',
  },

});
export const CalendarScreenStyle = StyleSheet.create({
  appBody: {
    marginHorizontal: 8,
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#BBBBBB',
  },
  list: {
    alignItems: 'center',
    marginRight: 16,
    marginTop: 5,
    flex: 1,
  },
  boxWithShadow: {
    shadowColor: '#CCCCCC',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,
    shadowOpacity: 10,

}
});
export const ProfileScreenStyle = StyleSheet.create({
  image: {
    height: 160,
    width: 160,
    marginBottom: 22,
    borderRadius: 4,
    borderWidth: 2,
  },
  userLogo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -24,
  },
  name: {
    marginBottom: 13,
  },
  subtitle: {
    marginBottom: 37,
  },
  interest: {
    marginBottom: 13,
  },
  generalSettings: {
    marginBottom: 13,
  },
  addMore: {
    borderWidth: 1,
    borderRadius: 4,
  },
  settingLine: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    marginRight: 16,
    marginBottom: 5,
  },
  numberOfEvents: {
    backgroundColor: '#FFA06E',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,
    borderRadius: 5,
    borderWidth: 0.05,
    marginRight: 16,
    marginBottom: 16,
  },
  listOfEvents: {
    flex: 1,
    flexDirection: 'column',
  },
  eventDetails: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
  },
  eventAchievementTime: {
    fontSize: 12,
  },
  eventAchievement: {
    fontSize: 14,
  },
  signOutSection: {
    alignItems: 'flex-start',
    flex: 1,
  },
  signOut: {
    backgroundColor: '#FFA06E',
  },
  backButton: {
    marginTop: 16,
    marginLeft: 16,
  },
});
export const LoginScreenStyle = StyleSheet.create({
  loginButton: {
    backgroundColor: '#324697',
    marginBottom: 70,
  },
  image: {
    height: 160,
    width: 160,
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 100,
  },
});
export const EventScreenStyle = StyleSheet.create({
  topBanner: {
    flex: 1,
  },
  backButton: {
    marginTop: 16,
    marginLeft: 16,
  },
  hashtagdate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  eventBody: {
    marginLeft: 16,
    marginTop: 20,
  },
  title: {
    marginVertical: 16,
  },
  checkIn: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
  },
  checkInButton: {
    backgroundColor: '#FFA06E',
    marginTop: 10,
  },
  checkInButtonText: {
    color: '#FFFFFF',
  },
  eventAttendingText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  eventAttendees: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 50,
  },
});

export const SearchScreenStyle = StyleSheet.create({
  mainScreen: {
    marginTop: 120,
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 15,
  },
});
