import React, { Fragment, Component } from 'react';
import Map from './components/Map';
import FindBar from './components/FindBar';
import AddBar from './components/AddBar';
import Menu from './components/Menu';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const RootStack = createStackNavigator(
  {
    Home: Map,
    FindBar: FindBar,
    AddBar: AddBar,
    Menu: Menu,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

export default App;