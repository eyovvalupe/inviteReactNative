import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './pages/home';
import Login from './pages/profile';
import GroupName from './pages/groupName';
import CreateGroup from './pages/createGroup';
import TabScreen from './pages/tabPage';
import Splash from './pages/splash';
import Viewer from './component/RBsheet';
import InviteFriendToGroup from './component/InviteFriendToGroup';
import { Provider } from 'react-redux';
import store from './store';

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          headerMode = "none"
          >
          {/* <Stack.Screen name='splash' component={Splash} /> */}
          {/* <Stack.Screen name='home' component={HomeScreen} /> */}
          {/* <Stack.Screen name='login' component={Login} /> */}
          {/* <Stack.Screen name='groups' component={GroupName} /> */}
          {/* <Stack.Screen name='createGroup' component={CreateGroup} /> */}
          <Stack.Screen name='tabone' component={TabScreen} />
          {/* <Stack.Screen name='viewer' component={Viewer} /> */}
          {/* <Stack.Screen name='in' component={InviteFriendToGroup} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
