import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen.js';
import LogInScreen from '../screens/LogInScreen.js';
import DiscussionScreen from '../screens/DiscussionScreen.js';
import CalendarScreen from '../screens/CalendarScreen.js';
import ProfileScreen from '../screens/ProfileScreen.js';
import AuthLoadingScreen from '../screens/AuthLoadingScreen.js';
import CarouselCard from '../components/CarouselCard.js';
import EventScreen from '../screens/EventScreen.js';


const RootNav=  createStackNavigator(
   {
      Login: LogInScreen,
    },
  );
const TabNav = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Calendar: { screen: CalendarScreen },
  Discussion: { screen: DiscussionScreen },
  Profile: { screen: ProfileScreen },
});
const CarouselNav = createStackNavigator(
  {
    TabNav: TabNav,
    EventScreen: {screen: EventScreen},
  },
  {
      headerMode: 'none'
  }
);

export const SwitchNav = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: RootNav,
  MainApp: CarouselNav,
  // Carouse: CarouselNav
  },
  {
    initialRouteName: 'AuthLoading',
  });
