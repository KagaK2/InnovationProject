import {StyleSheet} from 'react-native';
export const HomeScreenStyle = StyleSheet.create({
  pref : {
    alignItems: 'flex-start',
    marginTop: 67,
  },
  prefButton: {
    marginTop: 24,
  },
});
export const CalendarScreenStyle = StyleSheet.create({
  appBody: {
    marginHorizontal: 8,
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
  }
});
