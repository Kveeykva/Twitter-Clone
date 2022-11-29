import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../pages/HomeScreen';
import MessageScreen from '../pages/MessageScreen';
import NotificationScreen from '../pages/NotificationScreen';
import SearchScreen from '../pages/SearchScreen';
import SpacesScreen from '../pages/SpacesScreen';
import ProfileScreen from '../pages/ProfileScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from '../drawerContent';
import TopicsScreen from '../pages/TopicsScreen';
import BookmarksScreen from '../pages/BookmarksScreen';
import ListScreen from '../pages/ListsScreen';
import TwitterCircleScreen from '../pages/TwitterCircleScrreen';
import Icon from 'react-native-vector-icons/Ionicons';
import PostScreen from '../pages/PostScreen';
import InsideSearchScreen from '../pages/InsideSearchScreen';
import {CardStyleInterpolators} from '@react-navigation/stack';
import LoginScreen from '../auth/login';
import RegisterScreen from '../auth/register';

const Stack = createNativeStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          transitionSpec: {
            open: config,
            close: config,
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen
          name="DrawerTabs"
          component={MyDrawer}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Topics" component={TopicsScreen} />
        <Stack.Screen name="Bookmarks" component={BookmarksScreen} />
        <Stack.Screen name="Lists" component={ListScreen} />
        <Stack.Screen name="TwitterCircle" component={TwitterCircleScreen} />
        <Stack.Screen
          name="PostScreen"
          component={PostScreen}
          options={{title: 'Tweet'}}
        />
        <Stack.Screen
          name="InsideSearch"
          component={InsideSearchScreen}
          options={{title: 'Popüler gündem'}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search-sharp' : 'search-outline';
          } else if (route.name === 'Spaces') {
            iconName = focused ? 'mic' : 'mic-outline';
          } else if (route.name === 'Notification') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          } else if (route.name === 'Message') {
            iconName = focused ? 'mail' : 'mail-outline';
          }

          return <Icon name={iconName} size={24} color={'black'} />;
        },
        tabBarInactiveBackgroundColor: 'white',
        tabBarActiveBackgroundColor: 'white',
        headerShown: false,
        tabBarShowLabel: false,
      })}
      initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Spaces" component={SpacesScreen} />

      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Message" component={MessageScreen} />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="HomeTabs" component={HomeTabs} />
    </Drawer.Navigator>
  );
}
