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
  },
  list: {
    alignItems: 'center',
  },
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
  signOutSection: {
    alignItems: 'flex-start',
    flex: 1,
  },
  signOut: {
    backgroundColor: '#FFA06E',
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
    backgroundColor: '#1F8FFF',
  },
  checkInButtonText: {
    color: '#FFFFFF',
  }

});
