import React, { Fragment, Component } from 'react';
import Map from './components/Map';
import FindBar from './components/FindBar';
import AddBar from './components/AddBar';
import Menu from './components/Menu';
import HomePage from './components/HomePage';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const RootStack = createStackNavigator(
  {
    Map: Map,
    FindBar: FindBar,
    AddBar: AddBar,
    Menu: Menu,
    HomePage: HomePage,
  },
  {
    initialRouteName: 'HomePage',
  }
);

const AppContainer = createAppContainer(RootStack);

class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

export default App;