import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Orientation from 'react-native-orientation-locker';
import StartScreen from './StartScreen';
import HomeScreen from './HomeScreen';

import DragonSlayer_Homescreen from './DragonSlayer/Scenes/DragonSlayer_Homescreen';
import DragonSlayer_Gameplay from './DragonSlayer/Scenes/DragonSlayer_Gameplay';
import DragonSlayer_Tutorial from './DragonSlayer/Scenes/DragonSlayer_Tutorial';
import DragonSlayer_GameplayTransition from './DragonSlayer/Scenes/DragonSlayer_GameplayTransition';
import DragonSlayer_Loadingscreen from './DragonSlayer/Scenes/DragonSlayer_Loadingscreen';
const Stack = createStackNavigator();

class App extends Component {
  render() {
    Orientation.lockToPortrait();
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false, animationEnabled: false}}
          initialRouteName="DS_Loadingscreen">
          <Stack.Screen
            name="DS_Homescreen"
            component={DragonSlayer_Homescreen}
          />
          <Stack.Screen
            name="DS_Loadingscreen"
            component={DragonSlayer_Loadingscreen}
          />
          <Stack.Screen name="DS_Gameplay" component={DragonSlayer_Gameplay} />
          <Stack.Screen name="DS_Tutorial" component={DragonSlayer_Tutorial} />
          <Stack.Screen
            name="DS_GameplayTransition"
            component={DragonSlayer_GameplayTransition}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
