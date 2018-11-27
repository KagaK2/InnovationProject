import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import HomeScreen from '../screens/HomeScreen.js';
import LogInScreen from '../screens/LogInScreen.js';
import DiscussionScreen from '../screens/DiscussionScreen.js';
import CalendarScreen from '../screens/CalendarScreen.js';
import ProfileScreen from '../screens/ProfileScreen.js';
import AuthLoadingScreen from '../screens/AuthLoadingScreen.js';
import CarouselCard from '../components/CarouselCard.js';
import EventScreen from '../screens/EventScreen.js';
import SearchScreen from '../screens/SearchScreen.js';
import OtherUserScreen from '../screens/OtherUserScreen.js';


const RootNav = createStackNavigator(
   {
      Login: LogInScreen,
    },
  );
const TabNav = createBottomTabNavigator({
  Home: { screen: HomeScreen, navigationOptions: {
    tabBarLabel: 'Home',
    tabBarIcon: ({tintColor}) => <Ionicons name='ios-home' size={30} color={tintColor}/>
  },
},
  Calendar: { screen: CalendarScreen , navigationOptions: {
    tabBarLabel: 'Calendar',
    tabBarIcon: ({tintColor}) => <Ionicons name='ios-calendar' size={30} color={tintColor}/>
  },
},
  Search: {screen: SearchScreen, navigationOptions: {
    tabBarLabel: 'Search',
    tabBarIcon: ({tintColor}) => <Ionicons name='ios-search' size={30} color={tintColor}/>
  },
},
  Discussion: { screen: DiscussionScreen, navigationOptions: {
    tabBarLabel: 'Discussion',
    tabBarIcon: ({tintColor}) => <Ionicons name='ios-chatbubbles' size={30} color={tintColor}/>
  },
},
  Profile: { screen: ProfileScreen, navigationOptions: {
    tabBarLabel: 'Profile',
    tabBarIcon: ({tintColor}) => <Ionicons name='ios-person' size={30} color={tintColor}/>
  },
 },
},
{
  tabBarOptions: {
      activeTintColor: '#FFA06E',
      inactiveTintColor: 'gray',
  },
}
);
const CarouselNav = createStackNavigator(
  {
    TabNav: TabNav,
    EventScreen: {screen: EventScreen},
    OtherUserScreen : {screen: OtherUserScreen},
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
